<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { formatDate } from '$lib/insights';
	import { buildBreadcrumbSchema, serialise, SITE_URL } from '$lib/schema';

	let { data } = $props();

	const breadcrumbSchema = serialise(
		buildBreadcrumbSchema([
			{ name: 'Home', url: SITE_URL },
			{ name: 'Insights', url: `${SITE_URL}/insights` }
		])
	);
</script>

<Seo
	title="Insights on AI in Singapore businesses | Distel"
	description="Short, opinionated notes from Michael Distel on putting AI to work inside Singapore businesses: regulation, back-office agents, and what goes wrong in practice."
/>

<svelte:head>
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
			Insights
		</span>
		<h1 class="text-4xl font-bold leading-tight text-(--color-ink) sm:text-5xl">
			Notes on making AI work in a business
		</h1>
		<p class="mt-6 text-lg leading-relaxed text-(--color-ink-muted)">
			Short posts by our founder, Michael Distel. What a regulation or an incident means for a
			Singapore firm that uses AI in its daily work, and what to do about it.
		</p>
	</div>
</section>

<!-- Posts: surface-container-low -->
<section class="bg-(--color-surface-container-low)">
	<div class="mx-auto max-w-5xl px-6 py-8 sm:py-14">
		<ul class="grid gap-6">
			{#each data.posts as post (post.slug)}
				<li>
					<a
						href={`/insights/${post.slug}`}
						class="group block rounded-xl bg-(--color-surface-container-lowest) p-6 transition-colors hover:bg-white sm:p-8"
					>
						<p
							class="mb-3 text-xs font-semibold uppercase tracking-widest text-(--color-ink-muted)"
						>
							<time datetime={post.date}>{formatDate(post.date)}</time>
							<span aria-hidden="true"> / </span>
							{post.readingMinutes} min read
						</p>
						<h2
							class="text-xl font-semibold leading-snug text-(--color-ink) transition-colors group-hover:text-(--color-primary) sm:text-2xl"
						>
							{post.title}
						</h2>
						<p class="mt-3 max-w-2xl text-base leading-relaxed text-(--color-ink-muted)">
							{post.summary}
						</p>
						<span class="mt-4 inline-block text-sm font-medium text-(--color-primary)">
							Read the post
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
