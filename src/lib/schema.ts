/**
 * JSON-LD schema builder helpers.
 *
 * Each function returns a plain object ready to be serialised via
 * JSON.stringify and injected into a <script type="application/ld+json"> tag.
 *
 * All types follow schema.org vocabulary.
 */

export const SITE_URL = 'https://disteladvisory.com';

// ---------------------------------------------------------------------------
// Sitewide schemas
// ---------------------------------------------------------------------------

export function buildOrganisationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Distel Advisory',
		url: SITE_URL,
		logo: `${SITE_URL}/favicon.svg`,
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'michael@disteladvisory.com',
			contactType: 'customer service'
		},
		sameAs: [] as string[]
	};
}

export function buildWebSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Distel Advisory',
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
			name: 'Distel Advisory',
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
// Serialisation helper
// ---------------------------------------------------------------------------

/** Serialise a schema object to a JSON string safe for inline script injection. */
export function serialise(schema: object): string {
	return JSON.stringify(schema);
}
