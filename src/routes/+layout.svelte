<script lang="ts">
	import { page } from '$app/state';
	import { GTM_CONTAINER_ID, SITE_URL } from '$lib/site-config';
	import { buildOrganisationSchema, buildWebSiteSchema, serialise } from '$lib/schema';

	import '../app.css';
	let { children } = $props();

	const gtmContainerId = GTM_CONTAINER_ID?.trim();

	function normalisePathname(pathname: string): string {
		if (pathname !== '/' && pathname.endsWith('/')) {
			return pathname.slice(0, -1);
		}

		return pathname;
	}

	const canonicalHref = $derived(
		new URL(normalisePathname(page.url.pathname), SITE_URL).toString()
	);

	const organisationSchema = serialise(buildOrganisationSchema());
	const websiteSchema = serialise(buildWebSiteSchema());

	const nav = [
		{ href: '/ai-transformation', label: 'AI Transformation' },
		{ href: '/fractional-cto', label: 'Fractional CTO' },
		{ href: '/technical-advisory', label: 'Technical Advisory' }
	];
</script>

<svelte:head>
	<link rel="canonical" href={canonicalHref} />
	<!-- Organisation + WebSite JSON-LD: sitewide entity signals -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${organisationSchema}</script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${websiteSchema}</script>`}
	{#if gtmContainerId}
		<script>
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'gtm.start': new Date().getTime(),
				event: 'gtm.js'
			});
		</script>
		<script async src={`https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}`}></script>
	{:else}
		<script>
			console.error('Missing GTM_CONTAINER_ID in site config. GTM is required.');
		</script>
	{/if}
</svelte:head>

{#if gtmContainerId}
	<noscript>
		<iframe
			src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
			height="0"
			width="0"
			style="display:none;visibility:hidden"
			title=""
		></iframe>
	</noscript>
{/if}

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
>
	Skip to content
</a>

<!-- Glass header: 80% opacity + 24px blur, no border -->
<header
	class="sticky top-0 z-40 backdrop-blur-[24px]"
	style="background-color: color-mix(in srgb, var(--color-surface) 80%, transparent);"
>
	<div class="mx-auto max-w-5xl px-6">
		<!-- Row 1: logo + CTA -->
		<div class="flex items-center justify-between py-4">
			<a
				href="/"
				class="text-base font-semibold tracking-tight text-(--color-ink) hover:text-(--color-primary) transition-colors"
			>
				Distel Advisory
			</a>
			<a
				href="/book"
				class="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				Book a call
			</a>
		</div>
		<!-- Row 2: service links (mobile only) -->
		<nav aria-label="Main navigation" class="sm:hidden">
			<ul class="flex overflow-x-auto py-2 gap-0 scrollbar-none">
				{#each nav as item}
					<li class="shrink-0">
						<a
							href={item.href}
							class="block rounded-md px-2.5 py-1.5 text-xs font-medium text-(--color-ink-muted) hover:bg-(--color-surface-container-low) hover:text-(--color-ink) transition-colors whitespace-nowrap"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<!-- Desktop: single row with service links inline -->
		<nav
			aria-label="Main navigation"
			class="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 h-full"
		>
			<ul class="flex items-center h-full gap-6">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="text-sm text-(--color-ink-muted) hover:text-(--color-ink) transition-colors"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="mt-10 sm:mt-16 bg-(--color-surface-container-low)">
	<div
		class="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<p class="text-sm text-(--color-ink-muted)">
			© {new Date().getFullYear()} Distel Advisory. All rights reserved.
		</p>
		<ul class="flex gap-5 text-sm text-(--color-ink-muted)">
			<li><a href="/privacy" class="hover:text-(--color-ink) transition-colors">Privacy</a></li>
			<li><a href="/cookies" class="hover:text-(--color-ink) transition-colors">Cookies</a></li>
		</ul>
	</div>
</footer>
