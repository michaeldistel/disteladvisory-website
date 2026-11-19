<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { buildBreadcrumbSchema, buildPersonSchema, serialise, SITE_URL } from '$lib/schema';

	const personSchema = serialise(buildPersonSchema());
	const breadcrumbSchema = serialise(
		buildBreadcrumbSchema([
			{ name: 'Home', url: SITE_URL },
			{ name: 'About', url: `${SITE_URL}/about` }
		])
	);
</script>

<Seo
	title="About Distel and Michael Distel | AI workflows, Singapore"
	description="Distel is a Singapore team that designs, builds and runs AI workflows for growing businesses. It is led by Michael Distel, who has spent 20 years building software and companies across Southeast Asia."
	image="/michael-distel.jpg"
	imageAlt="Michael Distel, Distel"
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${personSchema}</script>`}
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
			About
		</span>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">
			One team, end to end
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			Distel is a Singapore team of implementation and engineering specialists. The people who scope
			your AI workflows are the people who build them and keep them running.
		</p>
	</div>
</section>

<!-- Michael: surface-container-low -->
<section class="bg-(--color-surface-container-low)" aria-labelledby="michael-heading">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-14">
			<div class="w-full shrink-0 sm:w-auto">
				<img
					src="/michael-distel.jpg"
					alt="Michael Distel"
					width="240"
					height="240"
					class="aspect-square w-full max-w-xs rounded-2xl object-cover object-top sm:h-60 sm:w-60 sm:max-w-none"
				/>
			</div>
			<div class="min-w-0">
				<h2 id="michael-heading" class="mb-6 text-2xl font-bold text-(--color-ink)">
					Michael Distel
				</h2>
				<div class="space-y-4 text-base leading-relaxed text-(--color-ink-muted)">
					<p>
						Michael leads Distel and every engagement. He has spent 20 years building software and
						companies across Southeast Asia. He started with safety-critical systems at Schneider
						Electric, co-founded and scaled a bootstrapped company to more than 20 people across
						several countries, and served as CTO at VC-backed startups including FoodRazor and
						BuildBear Labs.
					</p>
					<p>
						Two and a half years as an Investment Associate at Cocoon Capital, one of Singapore's
						early-stage venture firms, added the investor's view of what separates businesses that
						scale from those that stall.
					</p>
					<p>
						He is the registered Data Protection Officer for Distel and writes the firm's
						<a href="/insights" class="text-(--color-primary) hover:underline">Insights</a> posts on
						putting AI to work inside Singapore businesses. His personal site is
						<a
							href="https://michaeldistel.com"
							target="_blank"
							rel="noopener noreferrer me"
							class="text-(--color-primary) hover:underline">michaeldistel.com</a
						>.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- The firm: base surface -->
<section class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
	<div class="max-w-2xl">
		<h2 class="mb-6 text-2xl font-bold text-(--color-ink)">The firm</h2>
		<div class="space-y-4 text-base leading-relaxed text-(--color-ink-muted)">
			<p>
				We work with growing businesses in Singapore, with a focus on trading and distribution,
				brokers, and freight and logistics. The unit of work is an AI agent doing a named
				back-office job, built, run and improved by us.
			</p>
			<p>
				Distel is the trading name of Distel Advisory, Singapore, UEN 53371963A. Enquiries to
				<a href="mailto:enquiries@distel.sg" class="text-(--color-primary) hover:underline"
					>enquiries@distel.sg</a
				>.
			</p>
		</div>
	</div>
</section>

<!-- CTA: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<div class="max-w-xl">
			<h2 class="mb-3 text-2xl font-bold text-(--color-ink)">Talk to Michael</h2>
			<p class="mb-8 text-base text-(--color-ink-muted)">
				The first conversation is with him. Book a quick intro call and bring the problem, not a
				brief.
			</p>
			<a
				href="/book"
				class="rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				Book a quick intro call
			</a>
		</div>
	</div>
</section>
