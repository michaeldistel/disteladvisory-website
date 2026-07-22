import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// fallback emits build/404.html, which Cloudflare Pages serves with a
		// 404 status for unmatched paths (nginx used error_page 404 before).
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			handleMissingId: 'warn',
			handleUnseenRoutes: 'ignore',
			entries: ['*']
		}
	}
};

export default config;
