<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { formatDate } from '$lib/insights';
	import {
		buildBlogPostingSchema,
		buildBreadcrumbSchema,
		buildFaqSchema,
		serialise,
		SITE_URL
	} from '$lib/schema';

	let { data } = $props();
	const post = $derived(data.post);

	const url = $derived(`${SITE_URL}/insights/${post.slug}`);

	const articleSchema = $derived(
		serialise(
			buildBlogPostingSchema({
				headline: post.title,
				description: post.seo.description,
				url,
				datePublished: post.date,
				dateModified: post.date,
				wordCount: post.words
			})
		)
	);

	const breadcrumbSchema = $derived(
		serialise(
			buildBreadcrumbSchema([
				{ name: 'Home', url: SITE_URL },
				{ name: 'Insights', url: `${SITE_URL}/insights` },
				{ name: post.title, url }
			])
		)
	);

	const faqSchema = $derived(
		post.faq.length
			? serialise(buildFaqSchema(post.faq.map((item) => ({ question: item.q, answer: item.a }))))
			: null
	);
</script>

<Seo
	title={post.seo.title}
	description={post.seo.description}
	type="article"
	publishedTime={post.date}
	modifiedTime={post.date}
	author={`${SITE_URL}/about`}
	imageAlt={post.title}
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${articleSchema}</script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${breadcrumbSchema}</script>`}
	{#if faqSchema}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `<script type="application/ld+json">${faqSchema}</script>`}
	{/if}
</svelte:head>

<article>
	<!-- Header: base surface -->
	<header class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
		<div class="max-w-2xl">
			<p class="mb-4 text-xs font-semibold uppercase tracking-widest text-(--color-ink-muted)">
				<a href="/insights" class="transition-colors hover:text-(--color-ink)">Insights</a>
				<span aria-hidden="true"> / </span>
				<time datetime={post.date}>{formatDate(post.date)}</time>
				<span aria-hidden="true"> / </span>
				{post.readingMinutes} min read
			</p>
			<h1 class="text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl lg:text-5xl">
				{post.title}
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">{post.summary}</p>
			<p class="mt-6 flex items-center gap-3 text-sm text-(--color-ink-muted)">
				<img
					src="/michael-distel.jpg"
					alt=""
					width="40"
					height="40"
					class="h-10 w-10 rounded-full object-cover object-top"
				/>
				<span>
					By <a href="/about" class="font-medium text-(--color-ink) hover:text-(--color-primary)"
						>{post.author}</a
					>, Distel
				</span>
			</p>
		</div>
	</header>

	<!-- Body: surface-container-low -->
	<div class="bg-(--color-surface-container-low)">
		<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div class="article max-w-2xl">{@html post.html}</div>
		</div>
	</div>

	{#if post.faq.length}
		<!-- FAQ: base surface -->
		<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14" aria-labelledby="faq-heading">
			<div class="max-w-2xl">
				<h2 id="faq-heading" class="mb-8 text-2xl font-bold text-(--color-ink)">
					Questions this post answers
				</h2>
				<dl class="space-y-8">
					{#each post.faq as item (item.q)}
						<div>
							<dt class="text-base font-semibold text-(--color-ink)">{item.q}</dt>
							<dd class="mt-2 text-base leading-relaxed text-(--color-ink-muted)">{item.a}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</section>
	{/if}

	<!-- CTA: surface-container-low -->
	<section class="bg-(--color-surface-container-low)">
		<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
			<div class="max-w-xl">
				<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Working through this yourself?</h2>
				<p class="mb-8 text-base text-(--color-ink-muted)">
					Book a quick intro call. Tell us which AI tools and agents are in use and we will work out
					together what, if anything, needs to change.
				</p>
				<a
					href="/book"
					class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
					style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
				>
					Book a quick intro call
				</a>
			</div>
		</div>
	</section>
</article>
