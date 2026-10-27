import { error } from '@sveltejs/kit';
import { getChecklist } from '$lib/insights';

export function load() {
	const checklist = getChecklist('ai-and-personal-data');
	if (!checklist) {
		error(404, 'Checklist not found');
	}

	return { checklist };
}
