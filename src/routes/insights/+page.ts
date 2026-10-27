import { getPosts } from '$lib/insights';

export function load() {
	return {
		posts: getPosts().map(({ html, ...rest }) => rest)
	};
}
