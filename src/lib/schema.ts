/**
 * JSON-LD schema builder helpers.
 *
 * Each function returns a plain object ready to be serialised via
 * JSON.stringify and injected into a <script type="application/ld+json"> tag.
 *
 * All types follow schema.org vocabulary.
 */

export const SITE_URL = 'https://distel.sg';

/** Public profiles for the firm. Add the LinkedIn company page here once it exists. */
export const ORGANISATION_SAME_AS: string[] = [];

/** Public profiles for Michael Distel. */
export const MICHAEL_SAME_AS: string[] = ['https://michaeldistel.com'];

// ---------------------------------------------------------------------------
// Sitewide schemas
// ---------------------------------------------------------------------------

export function buildOrganisationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Distel',
		legalName: 'Distel Advisory',
		url: SITE_URL,
		logo: `${SITE_URL}/favicon.svg`,
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'enquiries@distel.sg',
			contactType: 'customer service'
		},
		employee: {
			'@type': 'Person',
			name: 'Michael Distel',
			jobTitle: 'Managing Director',
			url: `${SITE_URL}/about`
		},
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'SG',
			addressLocality: 'Singapore'
		},
		sameAs: ORGANISATION_SAME_AS
	};
}

export function buildWebSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Distel',
		url: SITE_URL
	};
}

// ---------------------------------------------------------------------------
// Service page schema
// ---------------------------------------------------------------------------

export interface ServiceSchemaOptions {
	name: string;
	description: string;
	url: string;
	serviceType?: string;
	areaServed?: string;
}

export function buildServiceSchema(opts: ServiceSchemaOptions) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: opts.name,
		description: opts.description,
		url: opts.url,
		serviceType: opts.serviceType ?? opts.name,
		provider: {
			'@type': 'Organization',
			name: 'Distel',
			url: SITE_URL
		},
		areaServed: opts.areaServed ?? 'Southeast Asia'
	};
}

// ---------------------------------------------------------------------------
// FAQ schema
// ---------------------------------------------------------------------------

export interface FaqItem {
	question: string;
	answer: string;
}

export function buildFaqSchema(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};
}

// ---------------------------------------------------------------------------
// Breadcrumb schema
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
	name: string;
	url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

// ---------------------------------------------------------------------------
// Person schema (author page)
// ---------------------------------------------------------------------------

export function buildPersonSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${SITE_URL}/about#michael-distel`,
		name: 'Michael Distel',
		jobTitle: 'Managing Director',
		url: `${SITE_URL}/about`,
		image: `${SITE_URL}/michael-distel.jpg`,
		worksFor: {
			'@type': 'Organization',
			name: 'Distel',
			url: SITE_URL
		},
		knowsAbout: [
			'AI workflow automation',
			'Personal Data Protection Act (Singapore)',
			'Back-office AI agents',
			'Technical due diligence'
		],
		sameAs: MICHAEL_SAME_AS
	};
}

// ---------------------------------------------------------------------------
// BlogPosting schema (insights posts)
// ---------------------------------------------------------------------------

export interface BlogPostingSchemaOptions {
	headline: string;
	description: string;
	url: string;
	datePublished: string;
	dateModified?: string;
	image?: string;
	wordCount?: number;
}

export function buildBlogPostingSchema(opts: BlogPostingSchemaOptions) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: opts.headline,
		description: opts.description,
		url: opts.url,
		mainEntityOfPage: opts.url,
		datePublished: opts.datePublished,
		dateModified: opts.dateModified ?? opts.datePublished,
		inLanguage: 'en-SG',
		image: opts.image ?? `${SITE_URL}/og/default.png`,
		wordCount: opts.wordCount,
		author: {
			'@type': 'Person',
			'@id': `${SITE_URL}/about#michael-distel`,
			name: 'Michael Distel',
			url: `${SITE_URL}/about`
		},
		publisher: {
			'@type': 'Organization',
			name: 'Distel',
			url: SITE_URL,
			logo: {
				'@type': 'ImageObject',
				url: `${SITE_URL}/favicon.svg`
			}
		}
	};
}

// ---------------------------------------------------------------------------
// Serialisation helper
// ---------------------------------------------------------------------------

/** Serialise a schema object to a JSON string safe for inline script injection. */
export function serialise(schema: object): string {
	return JSON.stringify(schema);
}
