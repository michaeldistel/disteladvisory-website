<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { buildBreadcrumbSchema, serialise, SITE_URL } from '$lib/schema';

	let { data } = $props();

	const PDF = '/downloads/distel-ai-and-personal-data-checklist.pdf';

	const breadcrumbSchema = serialise(
		buildBreadcrumbSchema([
			{ name: 'Home', url: SITE_URL },
			{ name: 'Insights', url: `${SITE_URL}/insights` },
			{
				name: 'AI and personal data checklist',
				url: `${SITE_URL}/insights/ai-and-personal-data-checklist`
			}
		])
	);
</script>

<Seo
	title="AI and personal data checklist for Singapore businesses (PDPA) | Distel"
	description="A two-page checklist for firms that use generative AI tools and agents, built from the PDPC's guidelines of 20 July 2026: what to ask a vendor, how to set a tool up, the staff rule, and the records to keep."
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${breadcrumbSchema}</script>`}
</svelte:head>

<!-- Header: base surface -->
<section class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<p class="mb-4 text-xs font-semibold uppercase tracking-widest text-(--color-ink-muted)">
			<a href="/insights" class="transition-colors hover:text-(--color-ink)">Insights</a>
			<span aria-hidden="true"> / </span>
			Checklist
		</p>
		<h1 class="text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl lg:text-5xl">
			{data.checklist.title}
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			For firms that use generative AI tools and agents in day-to-day work. Work through it on this
			page, or take the PDF to a meeting.
		</p>
		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href={PDF}
				download
				class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				Download the PDF
			</a>
			<a
				href="/insights/pdpc-generative-ai-guidelines-deployers"
				class="text-sm font-medium text-(--color-primary) hover:underline"
			>
				Read the post behind it
			</a>
		</div>
	</div>
</section>

<!-- Checklist body: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="article article-checklist max-w-2xl">{@html data.checklist.html}</div>
	</div>
</section>

<!-- CTA: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-xl">
		<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Want it done rather than checked?</h2>
		<p class="mb-8 text-base text-(--color-ink-muted)">
			We build back-office AI agents with the purpose, access limits, logs and hand-offs already in
			place. Book a quick intro call and bring the checklist.
		</p>
		<a
			href="/book"
			class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
			style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
		>
			Book a quick intro call
		</a>
	</div>
</section>
