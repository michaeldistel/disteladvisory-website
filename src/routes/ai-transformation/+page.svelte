<script lang="ts">
	import {
		buildServiceSchema,
		buildBreadcrumbSchema,
		buildFaqSchema,
		serialise,
		SITE_URL
	} from '$lib/schema';

	const serviceSchema = serialise(
		buildServiceSchema({
			name: 'AI Transformation',
			description:
				'Practical AI workflow implementation for SMEs and mid-sized teams. Audit, prioritise, and build AI into daily operations, with clear ownership and measurable outcomes.',
			url: `${SITE_URL}/ai-transformation`,
			serviceType: 'AI Consulting'
		})
	);

	const breadcrumbSchema = serialise(
		buildBreadcrumbSchema([
			{ name: 'Home', url: SITE_URL },
			{ name: 'AI Transformation', url: `${SITE_URL}/ai-transformation` }
		])
	);

	const faqSchema = serialise(
		buildFaqSchema([
			{
				question: 'How long does an AI transformation engagement take?',
				answer:
					'Most engagements deliver measurable outcomes within 30 to 90 days. The first workflows are typically live within four to six weeks of the opportunity audit.'
			},
			{
				question: 'What size of business is this suitable for?',
				answer:
					'The engagement is designed for SMEs and mid-sized teams, roughly 10 to 500 people. It is not suited to solo freelancers or teams with no bandwidth to trial new workflows.'
			},
			{
				question: 'Do we need a technical team to get started?',
				answer:
					'No. The engagement is designed for non-technical leadership teams. You need one person willing to own adoption internally once workflows are built, but no engineering background is required.'
			},
			{
				question: 'Which AI tools does the engagement use?',
				answer:
					'The tooling is chosen to fit your workflows, not the other way around. Common tools include Claude, ChatGPT, Cursor, Notion AI, and custom automations where off-the-shelf options fall short.'
			},
			{
				question: 'What happens after the engagement ends?',
				answer:
					'The goal is a team that can extend and maintain workflows independently. Handover includes documentation and internal training so the capability stays in-house without an ongoing retainer.'
			}
		])
	);
</script>

<svelte:head>
	<title>AI Workflow Solutions for SMEs | Distel Advisory</title>
	<meta
		name="description"
		content="Practical AI workflow implementation for SMEs and mid-sized teams. Audit, prioritise, and build AI into daily operations, with clear ownership and measurable outcomes."
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${serviceSchema}</script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${breadcrumbSchema}</script>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${faqSchema}</script>`}
</svelte:head>

<!-- 1. Hero -->
<section id="hero" class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<span
			class="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
			style="background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);"
		>
			AI Workflow Solutions
		</span>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">
			Turn AI into workflows your team actually uses.
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			Most AI projects stall because they lack clear ownership and practical execution. I work with
			SMEs and mid-sized teams to identify the right use cases, build the workflows, and make
			adoption stick, with measurable outcomes in 30 to 90 days.
		</p>
		<div class="mt-8 flex flex-wrap items-center gap-4">
			<a
				href="/book"
				class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				Book a 60-minute call
			</a>
			<a
				href="#who-its-for"
				class="text-sm font-medium text-(--color-primary) hover:underline transition-colors"
			>
				See if this fits your business
			</a>
		</div>
	</div>
</section>

<!-- 2. Outcomes -->
<section id="outcomes" class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What improves in 30 to 90 days</h2>
		<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each [{ title: 'Hours recovered each week', body: 'Repetitive manual tasks, reporting, and internal communication get automated or assisted, freeing your team for higher-value work.' }, { title: 'Clearer AI ownership', body: 'Someone inside your team owns the workflows. Not a vendor, not a consultant. A named person with a process and the skills to iterate.' }, { title: 'Tools that get used', body: 'No shelf-ware. Every workflow is built around how your team actually works, not a demo scenario. Adoption is tracked, not assumed.' }, { title: 'Prioritised roadmap', body: 'You know which use cases to tackle first and which to ignore. No more chasing the latest AI product announcement.' }, { title: 'Reduced operational drag', body: 'Common bottlenecks in ops, finance, client delivery, or data handling are mapped and addressed with practical AI integration.' }, { title: 'Internal capability, not dependency', body: 'The goal is a team that can extend and maintain these workflows independently, not a retainer that never ends.' }] as item}
				<li class="rounded-xl bg-(--color-surface-container-lowest) p-6">
					<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
					<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- 3. What's included -->
<section id="whats-included" class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What's included</h2>
	<ul class="grid gap-6 sm:grid-cols-2">
		{#each [{ title: 'AI opportunity audit', body: 'A structured review of your current operations to identify where AI can reduce effort, not just the flashiest use case. You get a prioritised shortlist, not a wishlist.' }, { title: 'Prioritisation framework', body: 'We score each opportunity against effort, impact, and adoption risk. You leave with a clear decision on what to build first and what to defer.' }, { title: 'Workflow implementation', body: "Practical AI workflows built around your team's real habits, using tools like Claude, ChatGPT, Cursor, Notion AI, and custom automations where the off-the-shelf options fall short." }, { title: 'Adoption and handover', body: 'The hardest part of any AI rollout is getting the team to actually use it. I handle rollout, training, and internal knowledge transfer so the capability stays in-house.' }] as item}
			<li class="rounded-xl bg-(--color-surface-container-lowest) p-6">
				<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
				<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
			</li>
		{/each}
	</ul>
</section>

<!-- 4. Credibility -->
<section id="credibility" class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-2xl">
			<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Operator-led, not consultant-led</h2>
			<p class="mb-4 text-base leading-relaxed text-(--color-ink-muted)">
				I've spent 20 years building and running software-driven businesses across Southeast Asia.
				That includes co-founding and scaling a bootstrapped company across multiple countries, CTO
				roles at VC-backed startups, and two and a half years as an Investment Associate at Cocoon
				Capital assessing what actually separates businesses that scale from those that stall.
			</p>
			<p class="text-base leading-relaxed text-(--color-ink-muted)">
				My approach to AI is the same as my approach to everything else: practical, not evangelical.
				I'll tell you where AI is a good fit, where it isn't, and what to do instead. The goal is
				workflows your team is still using six months from now.
			</p>
		</div>
	</div>
</section>

<!-- 5. How it works -->
<section id="how-it-works" class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">How it works</h2>
	<ol class="grid gap-6 sm:grid-cols-2">
		{#each [{ title: 'Discovery call', body: 'A 60-minute conversation about your current operations, where time is being lost, and what your team has already tried. No prep required.' }, { title: 'Opportunity audit', body: 'I review your workflows, tools, and team structure to identify the highest-value AI opportunities. You get a ranked shortlist with clear rationale.' }, { title: 'Build and implement', body: 'We build the first one or two workflows together, with your team involved throughout. The point is knowledge transfer, not a handoff.' }, { title: 'Adoption and review', body: "A structured review at 30 and 60 days to confirm adoption, adjust what isn't working, and identify the next round of improvements." }] as item}
			<li class="rounded-xl bg-(--color-surface-container-lowest) p-6">
				<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
				<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
			</li>
		{/each}
	</ol>
</section>

<!-- 6. Who it's for / not for -->
<section id="who-its-for" class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="grid gap-10 sm:grid-cols-2">
			<div>
				<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Best fit if...</h2>
				<ul class="space-y-3 text-base text-(--color-ink-muted)">
					{#each ['You lead an SME or mid-sized team (roughly 10 to 500 people) and AI projects keep stalling before they deliver anything', 'Your team is losing hours each week on manual, repetitive work across ops, reporting, finance, or client delivery', "You've tried AI tools and got nothing useful out of them, or you don't know where to start", 'You want practical execution and clear ownership, not a workshop, a strategy document, or a slide deck', "You're willing to put someone internal in charge of adoption once the workflows are built"] as point}
						<li class="flex items-start gap-3">
							<span
								class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
								style="background-color: var(--color-primary);"
							></span>
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Not a fit if...</h2>
				<ul class="space-y-3 text-base text-(--color-ink-muted)">
					{#each ["You're looking for generic AI training sessions, prompt libraries, or a crash course for staff", 'You want a chatbot demo with no operational use case attached to it', 'You need someone to write an AI strategy document but not implement anything', "You're a solo freelancer or a team under 10 people with no bandwidth to trial new workflows", 'You expect results without any internal involvement or ownership'] as point}
						<li class="flex items-start gap-3">
							<span
								class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
								style="background-color: var(--color-ink-muted);"
							></span>
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- 7. Final CTA -->
<section id="book" class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-xl">
		<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Ready to see what's worth doing?</h2>
		<p class="mb-8 text-base text-(--color-ink-muted)">
			Book a 60-minute call. Bring a specific problem or just a vague sense that you're leaving time
			on the table. Either works.
		</p>
		<a
			href="/book"
			class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
			style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
		>
			Book a 60-minute call
		</a>
	</div>
</section>
