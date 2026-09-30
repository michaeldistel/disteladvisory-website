<svelte:head>
	<title>Distel | Practical AI Transformation for SMEs</title>
	<meta
		name="description"
		content="Distel is a Singapore team that designs, builds and runs practical AI workflows and software for growing businesses: AI workflow solutions, build and delivery, and technical advisory."
	/>
</svelte:head>

<!-- Hero: base surface -->
<section class="mx-auto max-w-5xl px-6 pb-6 pt-8 sm:pb-12 sm:pt-14">
	<div class="max-w-2xl">
		<!-- Advisory Chip -->
		<span
			class="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
			style="background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);"
		>
			AI Workflows / Build and Delivery / Technical Advisory
		</span>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl lg:text-6xl">
			Turn AI from idea into daily workflow, without disrupting the business.
		</h1>
		<p class="mt-5 text-lg leading-relaxed text-(--color-ink-muted)">
			We help businesses choose the right AI workflows and put them into daily work. Our team
			scopes, builds and rolls out the automation and the software around it, then hands it over so
			it keeps running.
		</p>
		<div class="mt-8">
			<a
				href="/ai-transformation"
				class="inline-block w-full rounded-md px-8 py-4 text-center text-base font-semibold text-white transition-colors sm:w-auto"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				Explore AI workflow solutions
			</a>
			<p class="mt-3 text-sm text-(--color-ink-muted)">
				See the approach first, then book a 60-minute call if it looks right.
			</p>
		</div>
	</div>
</section>

<!-- Services: surface-container-low shift (no border) -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">What we do</h2>
		<div class="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each [{ href: '/ai-transformation', title: 'AI Workflow Solutions', body: 'Our main offer. We find the parts of your operation where AI genuinely reduces manual work, then build and roll out the workflows you approve.', link: 'See the approach' }, { href: '/build-and-delivery', title: 'Build and Delivery', body: 'When the answer is software rather than an automation, we design and build it: internal tools, web applications, integrations and cloud infrastructure.', link: 'See what we build' }, { href: '/technical-advisory', title: 'Technical Advisory', body: 'Focused guidance on a specific decision: architecture reviews, vendor evaluation and technical due diligence. No long-term commitment.', link: 'Learn more' }] as card}
				<a
					href={card.href}
					class="group rounded-xl p-6 bg-(--color-surface-container-lowest) hover:bg-white transition-colors"
				>
					<h3
						class="mb-2 text-lg font-semibold text-(--color-ink) group-hover:text-(--color-primary) transition-colors"
					>
						{card.title}
					</h3>
					<p class="text-sm leading-relaxed text-(--color-ink-muted)">{card.body}</p>
					<span class="mt-4 inline-block text-sm font-medium text-(--color-primary)"
						>{card.link}</span
					>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- How we work: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<h2 class="mb-10 text-2xl font-bold text-(--color-ink)">How we work</h2>
	<ul class="grid gap-6 sm:grid-cols-2">
		{#each [{ title: 'One team, end to end', body: 'The people who scope the work are the people who build it. Strategy, architecture and build come from one place, without handoffs between a consultant, a designer and a development shop.' }, { title: 'Your systems stay', body: 'We build around what you already run rather than asking you to replace it. The work sits in the gaps between your systems, which is where the manual effort is.' }, { title: 'Honest counsel', body: 'If something is the wrong call, too risky or not worth the money, we say so early and propose an alternative.' }, { title: 'You keep the keys', body: 'Code, infrastructure and accounts sit in your repositories and your environments. No lock-in to us.' }] as item}
			<li class="rounded-xl bg-(--color-surface-container-low) p-6">
				<h3 class="mb-2 text-base font-semibold text-(--color-ink)">{item.title}</h3>
				<p class="text-sm leading-relaxed text-(--color-ink-muted)">{item.body}</p>
			</li>
		{/each}
	</ul>
</section>

<!-- Who does the work: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-14">
			<!-- Photo -->
			<div class="shrink-0 w-full sm:w-auto">
				<img
					src="/michael-distel.jpg"
					alt="Michael Distel, founder of Distel"
					width="192"
					height="192"
					class="w-full aspect-square max-w-xs rounded-2xl object-cover object-top sm:w-60 sm:h-60 sm:max-w-none"
				/>
			</div>
			<!-- Text -->
			<div class="min-w-0">
				<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">Who does the work</h2>
				<div class="space-y-4 text-base leading-relaxed text-(--color-ink-muted)">
					<p>
						Distel is a Singapore team of implementation and engineering specialists. You meet the
						people who will build your workflows, and they are the same people who scoped them.
					</p>
					<p>
						Engagements are led by our founder, <a
							href="https://michaeldistel.com"
							target="_blank"
							rel="noopener noreferrer"
							class="text-(--color-primary) hover:underline">Michael Distel</a
						>, who has spent 20 years building software and companies across Southeast Asia. He
						started with safety-critical systems at Schneider Electric, co-founded and scaled a
						bootstrapped company to 20+ people across several countries, and served as CTO at
						VC-backed startups including FoodRazor and BuildBear Labs. Two and a half years as an
						Investment Associate at Cocoon Capital added the investor's view of what separates
						businesses that scale from those that stall.
					</p>
					<p>
						We work with SMEs and mid-sized businesses, plus selected founders and startups where
						the fit is right.
					</p>
				</div>
				<a
					href="/book"
					class="mt-6 inline-block rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
					style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
				>
					Book a call
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-2xl">
		<h2 class="mb-4 text-2xl font-bold text-(--color-ink)">Let's talk: over coffee or a call</h2>
		<p class="mb-2 text-base leading-relaxed text-(--color-ink-muted)">
			Sometimes the best way to work through a real problem is to sit down and talk it through. If
			you're in Singapore, we're happy to meet in person.
		</p>
		<p class="mb-8 text-base leading-relaxed text-(--color-ink-muted)">
			If not, a 60-minute video call works just as well. You will leave with a clearer decision on
			priorities, resourcing, and next steps.
		</p>
		<a
			href="/book"
			class="inline-block w-full rounded-md px-6 py-4 text-center text-sm font-semibold text-white transition-colors sm:w-auto sm:py-3"
			style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
		>
			Book a call
		</a>
	</div>
</section>
