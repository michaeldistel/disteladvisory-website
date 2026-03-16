<svelte:head>
	<title>Fractional CTO | Distel Advisory</title>
	<meta name="description" content="Part-time CTO leadership for early-stage startups in Southeast Asia. Architecture, engineering team oversight, hiring, and delivery accountability." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-(--color-accent)">Service</p>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">Fractional CTO</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			Embedded technical leadership, typically 1 to 3 days per week, giving your startup the strategic and operational depth of a full-time CTO without the cost or commitment.
		</p>
	</div>
</section>

<!-- What's included -->
<section class="border-t border-(--color-border) bg-(--color-surface-subtle)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What's included</h2>
		<ul class="grid gap-6 sm:grid-cols-2">
			{#each [
				{ title: 'Architecture & technical decisions', body: 'I own the technical roadmap, evaluate build vs. buy, select the right stack, and make the calls that matter before they become expensive mistakes.' },
				{ title: 'Engineering team leadership', body: 'Hiring, onboarding, code review culture, and team processes. I run or support your engineering org as it grows.' },
				{ title: 'Vendor & agency oversight', body: 'I manage external agencies and contractors so you get accountability without micromanagement.' },
				{ title: 'Investor alignment', body: 'Having sat inside a VC firm, I know how investors evaluate technical risk. I help you present your stack and roadmap credibly at every stage.' }
			] as item}
				<li class="rounded-xl border border-(--color-border) bg-white p-6">
					<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
					<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Who it's for -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-2xl">
		<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Who it's for</h2>
		<ul class="space-y-3 text-base text-(--color-ink-muted)">
			{#each [
				'Non-technical founders who need a trusted technical partner from day one',
				'Seed to Series A startups with a small or no in-house engineering team',
				'Companies that have outgrown an agency but aren\'t ready to hire full-time',
				'Founders preparing for a fundraising round who need technical credibility'
			] as point}
				<li class="flex items-start gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)"></span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Experience -->
<section class="border-t border-(--color-border) bg-(--color-surface-subtle)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-2xl">
			<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Why it matters who you choose</h2>
			<p class="mb-4 text-base leading-relaxed text-(--color-ink-muted)">
				Most fractional CTOs have only been operators. I've been on both sides: CTO at VC-backed startups (FoodRazor, BuildBear Labs) and Investment Associate at Cocoon Capital, one of Singapore's leading early-stage funds.
			</p>
			<p class="text-base leading-relaxed text-(--color-ink-muted)">
				That dual perspective means I understand not just how to build, but how your technical decisions read to investors, acquirers, and the engineering talent you're trying to attract.
			</p>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t border-(--color-border)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-xl">
			<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Ready to talk?</h2>
			<p class="mb-8 text-base text-(--color-ink-muted)">Book a free 60-minute intro call. No pitch, no pressure. Just a conversation about where you are and whether I can help.</p>
			<a href="/book" class="rounded-md bg-(--color-accent) px-6 py-3 text-sm font-medium text-white hover:bg-(--color-accent-hover) transition-colors">
				Book a call
			</a>
		</div>
	</div>
</section>
