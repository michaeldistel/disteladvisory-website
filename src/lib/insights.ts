/**
 * Loads the markdown under src/content at build time.
 *
 * Posts live in src/content/insights/<slug>.md with YAML frontmatter. The
 * frontmatter shape is documented in the Distel marketing folder
 * (08-marketing/blog-style.md); the fields used here are typed below.
 *
 * Everything runs at prerender time: import.meta.glob with eager: true inlines
 * the raw files, js-yaml parses the frontmatter and marked renders the body.
 */

import { load as parseYaml } from 'js-yaml';
import { marked } from 'marked';

export interface FaqItem {
	q: string;
	a: string;
}

export interface PostSeo {
	title: string;
	description: string;
	target_queries?: string[];
}

export interface Post {
	slug: string;
	title: string;
	date: string;
	status: 'draft' | 'published';
	author: string;
	summary: string;
	seo: PostSeo;
	faq: FaqItem[];
	download?: string;
	html: string;
	words: number;
	readingMinutes: number;
}

interface Frontmatter {
	title: string;
	slug?: string;
	date: string;
	status?: 'draft' | 'published';
	author?: string;
	summary: string;
	seo?: Partial<PostSeo>;
	faq?: FaqItem[];
	download?: string;
}

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

marked.use({ gfm: true, breaks: false });

export function splitFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
	const match = raw.match(FRONTMATTER);
	if (!match) {
		return { data: {}, body: raw };
	}

	const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
	return { data, body: raw.slice(match[0].length) };
}

/** Remove the first level-one heading: pages render the title themselves. */
function stripLeadingH1(body: string): string {
	return body.replace(/^\s*# [^\n]+\n+/, '');
}

export function renderMarkdown(body: string): string {
	return marked.parse(body, { async: false }) as string;
}

function countWords(text: string): number {
	return text
		.replace(/[#*_>`\[\]()]/g, ' ')
		.split(/\s+/)
		.filter(Boolean).length;
}

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

function toPost(path: string, raw: string): Post {
	const { data, body } = splitFrontmatter(raw);
	const fm = data as unknown as Frontmatter;
	const content = stripLeadingH1(body);
	const words = countWords(content);

	return {
		slug: fm.slug ?? slugFromPath(path),
		title: fm.title,
		date: fm.date,
		status: fm.status ?? 'draft',
		author: fm.author ?? 'Michael Distel',
		summary: fm.summary,
		seo: {
			title: fm.seo?.title ?? fm.title,
			description: fm.seo?.description ?? fm.summary,
			target_queries: fm.seo?.target_queries ?? []
		},
		faq: fm.faq ?? [],
		download: fm.download,
		html: renderMarkdown(content),
		words,
		readingMinutes: Math.max(1, Math.round(words / 200))
	};
}

const postFiles = import.meta.glob('/src/content/insights/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const allPosts: Post[] = Object.entries(postFiles)
	.map(([path, raw]) => toPost(path, raw))
	.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** Published posts, newest first. Drafts never reach the build. */
export function getPosts(): Post[] {
	return allPosts.filter((post) => post.status === 'published');
}

export function getPost(slug: string): Post | undefined {
	return getPosts().find((post) => post.slug === slug);
}

// ---------------------------------------------------------------------------
// Checklists: plain markdown pages with an optional PDF download.
// ---------------------------------------------------------------------------

export interface Checklist {
	slug: string;
	title: string;
	html: string;
}

const checklistFiles = import.meta.glob('/src/content/checklists/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export function getChecklist(slug: string): Checklist | undefined {
	const entry = Object.entries(checklistFiles).find(([path]) => slugFromPath(path) === slug);
	if (!entry) return undefined;

	const [, raw] = entry;
	const { body } = splitFrontmatter(raw);
	const titleMatch = body.match(/^\s*# ([^\n]+)/);

	return {
		slug,
		title: titleMatch?.[1] ?? slug,
		html: renderMarkdown(stripLeadingH1(body))
	};
}

/** Format an ISO date as "25 October 2026" for display. */
export function formatDate(iso: string): string {
	return new Date(`${iso}T00:00:00+08:00`).toLocaleDateString('en-SG', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'Asia/Singapore'
	});
}
