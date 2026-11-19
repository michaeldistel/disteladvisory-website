<script lang="ts">
	/**
	 * Page metadata in one place: title, description, Open Graph and Twitter
	 * cards. The canonical link is set sitewide in +layout.svelte; this
	 * component mirrors it into og:url so shares resolve to the same address.
	 */
	import { page } from '$app/state';
	import { SITE_URL } from '$lib/site-config';

	interface Props {
		title: string;
		description: string;
		/** 'article' for insights posts, otherwise 'website'. */
		type?: 'website' | 'article';
		/** Absolute or site-relative path to a 1200x630 image. */
		image?: string;
		imageAlt?: string;
		publishedTime?: string;
		modifiedTime?: string;
		author?: string;
	}

	let {
		title,
		description,
		type = 'website',
		image = '/og/default.png',
		imageAlt = 'Distel. Practical AI workflows for Singapore businesses.',
		publishedTime,
		modifiedTime,
		author
	}: Props = $props();

	function normalisePathname(pathname: string): string {
		return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	}

	const url = $derived(new URL(normalisePathname(page.url.pathname), SITE_URL).toString());
	const imageUrl = $derived(new URL(image, SITE_URL).toString());
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:site_name" content="Distel" />
	<meta property="og:locale" content="en_SG" />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	{#if type === 'article'}
		{#if publishedTime}<meta property="article:published_time" content={publishedTime} />{/if}
		{#if modifiedTime}<meta property="article:modified_time" content={modifiedTime} />{/if}
		{#if author}<meta property="article:author" content={author} />{/if}
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />
</svelte:head>
