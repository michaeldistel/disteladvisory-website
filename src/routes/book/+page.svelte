<script lang="ts">
	import { onMount } from 'svelte';

	let step: 'form' | 'calendar' = $state('form');
	let meetingType: 'online' | 'inperson' = $state<'online' | 'inperson'>('online');

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let challenge = $state('');

	let errors: Record<string, string> = $state({});

	const CALENDAR_ONLINE =
		'https://calendar.google.com/appointments/schedules/AcZssZ07NTRWYmu_u0S81u-W6iMT1oyyARSR5uLkaBXeRr-gekqR39qI2WGl4PHH08TFd0C9PMeDzrIJ';
	const CALENDAR_INPERSON =
		'https://calendar.google.com/appointments/schedules/AcZssZ22ZgjkbFRHqd6W_oFuiMKkzveNpGUxyVss51U-x3tgvThgIvD0ZrMfdzmvTWhPX1FT1hGdWWMb';

	const calendarUrl = $derived(meetingType === 'inperson' ? CALENDAR_INPERSON : CALENDAR_ONLINE);

	function syncStateFromUrl() {
		const url = new URL(window.location.href);
		const urlStep = url.searchParams.get('step');
		const urlMeetingType = url.searchParams.get('meetingType');
		meetingType = urlMeetingType === 'inperson' ? 'inperson' : 'online';
		step = urlStep === 'calendar' ? 'calendar' : 'form';
	}

	function syncUrlFromState(push: boolean) {
		const url = new URL(window.location.href);
		if (step === 'calendar') {
			url.searchParams.set('step', 'calendar');
			url.searchParams.set('meetingType', meetingType);
		} else {
			url.searchParams.delete('step');
			url.searchParams.delete('meetingType');
		}

		if (push) window.history.pushState({}, '', url);
		else window.history.replaceState({}, '', url);
	}

	function setMeetingType(type: 'online' | 'inperson') {
		meetingType = type;
		if (step === 'calendar') syncUrlFromState(false);
	}

	function validate() {
		const e: Record<string, string> = {};
		if (!name.trim()) e.name = 'Required';
		if (!email.trim()) e.email = 'Required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email';
		if (!company.trim()) e.company = 'Required';
		if (!challenge.trim()) e.challenge = 'Required';
		errors = e;
		return Object.keys(e).length === 0;
	}

	function submit(e: Event) {
		e.preventDefault();
		if (validate()) {
			const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
			w.dataLayer = w.dataLayer || [];
			w.dataLayer.push({
				event: 'form_submit',
				meeting_type: meetingType,
				page_path: window.location.pathname
			});
			step = 'calendar';
			syncUrlFromState(true);
			window.open(calendarUrl, '_blank', 'noopener,noreferrer');
		}
	}

	onMount(() => {
		syncStateFromUrl();
		const onPopState = () => syncStateFromUrl();
		window.addEventListener('popstate', onPopState);
		return () => window.removeEventListener('popstate', onPopState);
	});
</script>

<svelte:head>
	<title>Book a Call | Distel Advisory</title>
	<meta
		name="description"
		content="Book an intro call or meet Michael Distel in person in Singapore."
	/>
</svelte:head>

<section class="mx-auto max-w-xl px-6 py-10 sm:py-16">
	{#if step === 'form'}
		<div class="mb-10">
			<p
				class="mb-3 text-xs font-semibold uppercase tracking-widest inline-block rounded-full px-3 py-1"
				style="background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);"
			>
				60-minute intro call
			</p>
			<h1 class="text-3xl font-bold text-(--color-ink)">Book a call or meet for coffee</h1>
			<p class="mt-3 text-base text-(--color-ink-muted)">
				A casual conversation, no pitch, no pressure, just practical advice focused on your current
				situation.
			</p>
		</div>

		<form onsubmit={submit} novalidate class="space-y-6">
			<!-- Meeting type -->
			<div>
				<p class="mb-3 text-sm font-medium text-(--color-ink)">How would you like to meet?</p>
				<div class="grid grid-cols-2 gap-3">
					<button
						type="button"
						onclick={() => setMeetingType('online')}
						class="rounded-lg px-4 py-3 text-sm font-medium text-left transition-colors"
						style={meetingType === 'online'
							? 'background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);'
							: 'background-color: var(--color-surface-container-low); color: var(--color-on-surface-muted);'}
					>
						<span class="block font-semibold text-inherit">Video call</span>
						<span class="block text-xs mt-0.5 opacity-75">60 min, any timezone</span>
					</button>
					<button
						type="button"
						onclick={() => setMeetingType('inperson')}
						class="rounded-lg px-4 py-3 text-sm font-medium text-left transition-colors"
						style={meetingType === 'inperson'
							? 'background-color: var(--color-primary-fixed); color: var(--color-on-primary-fixed);'
							: 'background-color: var(--color-surface-container-low); color: var(--color-on-surface-muted);'}
					>
						<span class="block font-semibold text-inherit">In person</span>
						<span class="block text-xs mt-0.5 opacity-75">Coffee in Singapore</span>
					</button>
				</div>
			</div>

			<div>
				<label for="name" class="mb-1.5 block text-sm font-medium text-(--color-ink)"
					>Your name</label
				>
				<input
					id="name"
					type="text"
					autocomplete="name"
					bind:value={name}
					aria-invalid={!!errors.name}
					aria-describedby={errors.name ? 'name-error' : undefined}
					class="w-full rounded-md px-3 py-2.5 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-muted)
					{errors.name ? 'ring-1 ring-red-400' : ''}"
					style="background-color: var(--color-surface-container-low);"
					placeholder="Jane Smith"
				/>
				{#if errors.name}
					<p id="name-error" class="mt-1 text-xs text-red-500">{errors.name}</p>
				{/if}
			</div>

			<div>
				<label for="email" class="mb-1.5 block text-sm font-medium text-(--color-ink)"
					>Work email</label
				>
				<input
					id="email"
					type="email"
					autocomplete="email"
					bind:value={email}
					aria-invalid={!!errors.email}
					aria-describedby={errors.email ? 'email-error' : undefined}
					class="w-full rounded-md px-3 py-2.5 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-muted)
					{errors.email ? 'ring-1 ring-red-400' : ''}"
					style="background-color: var(--color-surface-container-low);"
					placeholder="jane@company.com"
				/>
				{#if errors.email}
					<p id="email-error" class="mt-1 text-xs text-red-500">{errors.email}</p>
				{/if}
			</div>

			<div>
				<label for="company" class="mb-1.5 block text-sm font-medium text-(--color-ink)"
					>Company</label
				>
				<input
					id="company"
					type="text"
					autocomplete="organization"
					bind:value={company}
					aria-invalid={!!errors.company}
					aria-describedby={errors.company ? 'company-error' : undefined}
					class="w-full rounded-md px-3 py-2.5 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-muted)
					{errors.company ? 'ring-1 ring-red-400' : ''}"
					style="background-color: var(--color-surface-container-low);"
					placeholder="Acme Inc."
				/>
				{#if errors.company}
					<p id="company-error" class="mt-1 text-xs text-red-500">{errors.company}</p>
				{/if}
			</div>

			<div>
				<label for="challenge" class="mb-1.5 block text-sm font-medium text-(--color-ink)"
					>What would you like help with?</label
				>
				<textarea
					id="challenge"
					bind:value={challenge}
					rows={4}
					aria-invalid={!!errors.challenge}
					aria-describedby={errors.challenge ? 'challenge-error' : undefined}
					class="w-full resize-none rounded-md px-3 py-2.5 text-sm text-(--color-ink) outline-none transition-colors placeholder:text-(--color-ink-muted)
					{errors.challenge ? 'ring-1 ring-red-400' : ''}"
					style="background-color: var(--color-surface-container-low);"
					placeholder="e.g. We are losing hours each week on manual reporting and need a practical AI rollout plan"
				></textarea>
				{#if errors.challenge}
					<p id="challenge-error" class="mt-1 text-xs text-red-500">{errors.challenge}</p>
				{/if}
			</div>

			<button
				type="submit"
				class="w-full rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
				style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
			>
				See available times →
			</button>
		</form>
	{:else}
		<div class="mb-8">
			<h1 class="text-3xl font-bold text-(--color-ink)">Open calendar</h1>
			<p class="mt-2 text-base text-(--color-ink-muted)">
				{meetingType === 'inperson'
					? 'Your booking page opened in a new tab. If it did not open, use the button below.'
					: 'Your booking page opened in a new tab. If it did not open, use the button below.'}
			</p>
		</div>
		<a
			href={calendarUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block rounded-md px-6 py-3 text-sm font-medium text-white transition-colors"
			style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-container));"
		>
			Open scheduling page
		</a>
		<button
			onclick={() => {
				step = 'form';
				syncUrlFromState(true);
			}}
			class="mt-4 text-sm text-(--color-ink-muted) hover:text-(--color-ink) transition-colors"
		>
			← Back
		</button>
	{/if}
</section>
