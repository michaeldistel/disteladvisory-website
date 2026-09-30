<script lang="ts">
	import { buildServiceSchema, buildBreadcrumbSchema, serialise, SITE_URL } from '$lib/schema';

	const serviceSchema = serialise(
		buildServiceSchema({
			name: 'Build and Delivery',
			description:
				'End-to-end application delivery for growing businesses: internal tools, web applications, system integrations, document processing pipelines and cloud infrastructure, delivered in reviewable milestones into your own accounts.',
			url: `${SITE_URL}/build-and-delivery`,
			serviceType: 'Software Development'
		})
	);

	const breadcrumbSchema = serialise(
		buildBreadcrumbSchema([
			{ name: 'Home', url: SITE_URL },
			{ name: 'Build and Delivery', url: `${SITE_URL}/build-and-delivery` }
		])
	);
</script>

<svelte:head>
	<title>Build and Delivery | Distel</title>
	<meta
		name="description"
		content="Internal tools, web applications, integrations and cloud infrastructure, designed and built by one Singapore team and delivered in reviewable milestones into your own accounts."
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${serviceSchema}</script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${breadcrumbSchema}</script>`}
</svelte:head>

<!-- Hero: base surface -->
<section class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<span
			class="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
			style="background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);"
		>
			Service
		</span>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">
			Build and Delivery
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			When the answer is a piece of software rather than an automation, we design and build it: user
			experience, application, infrastructure, deployment and release. One team takes it from scope
			to production.
		</p>
	</div>
</section>

<!-- What we build: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What we build</h2>
		<ul class="grid gap-6 sm:grid-cols-2">
			{#each [{ title: 'Internal tools and web applications', body: 'The system your team works in every day, built around how the work actually runs rather than around a template.' }, { title: 'Integrations', body: 'Connections between systems that do not talk to each other, so information is entered once and flows to where it is needed.' }, { title: 'Document and data pipelines', body: 'Extraction and processing for the documents that arrive by email, PDF and scan, checked and written into the systems you already use.' }, { title: 'Cloud infrastructure', body: 'Hosting, deployment automation and monitoring, set up in your own cloud accounts with a security baseline from day one.' }] as item}
				<li class="rounded-xl bg-(--color-surface-container-lowest) p-6">
					<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
					<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- How delivery runs: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">How delivery runs</h2>
	<ol class="grid gap-6 sm:grid-cols-2">
		{#each [{ title: 'Scope and design', body: 'We agree what is being built, for whom, and what done looks like, before any code is written.' }, { title: 'Reviewable milestones', body: 'Delivery in milestones with a working demo and an acceptance step at each one, not one big release at the end.' }, { title: 'Release with a safety net', body: 'Every release goes out with a security baseline and a rollback plan, into your repositories and your cloud accounts.' }, { title: 'Operational handover', body: 'Documentation and a handover so your team can run and extend what was built.' }] as item}
			<li class="rounded-xl bg-(--color-surface-container-low) p-6">
				<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
				<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
			</li>
		{/each}
	</ol>
</section>

<!-- Why one team: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-2xl">
			<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">One team, end to end</h2>
			<p class="mb-4 text-base leading-relaxed text-(--color-ink-muted)">
				The people who scope the work are the people who build it. You get strategy, architecture
				and build from one place instead of handoffs between a consultant, a designer and a
				development shop.
			</p>
			<p class="text-base leading-relaxed text-(--color-ink-muted)">
				Code, infrastructure and accounts stay in your name throughout. If you later take the work
				in-house or move to another team, nothing is locked to us.
			</p>
		</div>
	</div>
</section>

<!-- CTA: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-xl">
		<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Have something that needs building?</h2>
		<p class="mb-8 text-base text-(--color-ink-muted)">
			Book a 60-minute intro call. Tell us what the software needs to do and we will tell you
			plainly how we would approach it.
		</p>
		<a
			href="/book"
			class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
			style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
		>
			Book a call
		</a>
	</div>
</section>
