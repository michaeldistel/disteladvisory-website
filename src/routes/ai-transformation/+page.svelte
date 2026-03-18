<svelte:head>
	<title>AI Transformation | Distel Advisory</title>
	<meta name="description" content="Practical AI adoption for SMEs and mid-sized businesses. Cut through the hype, identify where AI actually saves time, and build workflows your team will use." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-5xl px-6 pb-8 pt-10 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<p class="mb-4 text-sm font-medium uppercase tracking-widest text-(--color-accent)">Service</p>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">AI Transformation</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			Most businesses waste months chasing AI projects that don't deliver. I help SMEs and mid-sized companies cut through the hype, identify where AI genuinely moves the needle, and put workflows in place that stick.
		</p>
	</div>
</section>

<!-- What's included -->
<section class="border-t border-(--color-border) bg-(--color-surface-subtle)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">What's included</h2>
		<ul class="grid gap-6 sm:grid-cols-2">
			{#each [
				{ title: 'AI opportunity audit', body: 'A structured review of your current operations to find the 20% of tasks where AI can do 80% of the heavy lifting, without disrupting what already works.' },
				{ title: 'Workflow design', body: 'Practical AI workflows built around your team\'s real habits, using tools like Claude, ChatGPT, Cursor, Notion AI, and custom automations where needed.' },
				{ title: 'Tooling strategy', body: 'Vendor-neutral advice on which AI tools are worth paying for, which are hype, and how to avoid lock-in as the landscape keeps shifting.' },
				{ title: 'Team adoption', body: 'The hardest part of AI transformation isn\'t the technology. It\'s getting the team to actually use it. I help with rollout, training, and building internal momentum.' }
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
				'Leadership teams and business owners who know AI matters but don\'t know where to start',
				'SMEs and mid-sized businesses looking to reduce manual, repetitive work',
				'Companies that have tried AI tools and got nothing useful out of them',
				'Teams that want to move faster without adding headcount'
			] as point}
				<li class="flex items-start gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)"></span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Honest framing -->
<section class="border-t border-(--color-border) bg-(--color-surface-subtle)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-2xl">
			<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">An honest take on AI</h2>
			<p class="mb-4 text-base leading-relaxed text-(--color-ink-muted)">
				AI is genuinely useful, but not for everything, and not without effort. The teams that get real value are the ones who pick specific, boring problems and apply AI consistently, rather than chasing the flashiest demo.
			</p>
			<p class="text-base leading-relaxed text-(--color-ink-muted)">
				My approach is practical, not evangelical. I'll tell you where AI is a good fit, where it isn't, and what to do instead. The goal is workflows your team actually uses six months from now, not a slide deck about transformation.
			</p>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t border-(--color-border)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-xl">
			<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Let's find what's worth doing</h2>
			<p class="mb-8 text-base text-(--color-ink-muted)">Book a 60-minute call. Bring a specific problem or just a vague sense that you're leaving time on the table. Either works.</p>
			<a href="/book" class="rounded-md bg-(--color-accent) px-6 py-3 text-sm font-medium text-white hover:bg-(--color-accent-hover) transition-colors">
				Book a call
			</a>
		</div>
	</div>
</section>
