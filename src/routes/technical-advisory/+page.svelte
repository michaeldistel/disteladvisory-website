<svelte:head>
	<title>Technical Advisory | Distel Advisory</title>
	<meta
		name="description"
		content="Strategic technical guidance for SME and mid-sized leadership teams facing specific decisions: architecture reviews, vendor evaluation, and hiring support from a former VC and startup CTO."
	/>
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
			Technical Advisory
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			A trusted technical voice when you need it, with no long-term engagement required. Ideal for
			SME and mid-sized leadership teams at a specific inflection point who want expert guidance and
			a second opinion.
		</p>
	</div>
</section>

<!-- What's included: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What's included</h2>
		<ul class="grid gap-6 sm:grid-cols-2">
			{#each [{ title: 'Technology strategy', body: 'Evaluate your current stack, surface hidden risks, and map out a realistic technical path aligned with your business goals and runway.' }, { title: 'Architecture reviews', body: 'A structured review of your system design, codebase, or technical plans with clear written recommendations you can act on.' }, { title: 'Hiring & team assessment', body: 'Help defining technical roles, writing job descriptions, and evaluating engineering candidates or agencies.' }, { title: 'Fundraising prep', body: "I've seen how VCs assess technical risk from inside a fund. I help you make your technical story credible before the room gets sceptical." }] as item}
				<li class="rounded-xl bg-(--color-surface-container-lowest) p-6">
					<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
					<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Who it's for: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-2xl">
		<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Who it's for</h2>
		<ul class="space-y-3 text-base text-(--color-ink-muted)">
			{#each ['Leadership teams facing a critical technical decision or inflection point', 'Companies evaluating a new platform, vendor, or architectural change', 'Teams looking for a second opinion before a major technical investment', 'Founders and investors who need honest technical due diligence on a company'] as point}
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
</section>

<!-- Background: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-2xl">
			<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">
				Background that's actually relevant
			</h2>
			<p class="mb-4 text-base leading-relaxed text-(--color-ink-muted)">
				I've written software for power plants where failure wasn't an option (Schneider Electric),
				bootstrapped a 20-person company from scratch, served as CTO at two VC-backed startups, and
				spent two and a half years as an Investment Associate at Cocoon Capital, one of Singapore's
				leading early-stage VC firms.
			</p>
			<p class="text-base leading-relaxed text-(--color-ink-muted)">
				I've also built on blockchain infrastructure, evaluated dozens of startups as an investor,
				and watched deals succeed and fail for reasons that had nothing to do with the product. That
				breadth is what I bring to advisory.
			</p>
		</div>
	</div>
</section>

<!-- CTA: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-xl">
		<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Let's talk through it</h2>
		<p class="mb-8 text-base text-(--color-ink-muted)">
			Book a 60-minute intro call. Tell me what you're working through and we'll figure out together
			if advisory is the right fit.
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
