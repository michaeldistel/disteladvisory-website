import { promises as fs } from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://disteladvisory.com';
const projectRoot = process.cwd();
const routesDir = path.join(projectRoot, 'src', 'routes');
const sitemapPath = path.join(projectRoot, 'static', 'sitemap.xml');

async function listPageFiles(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dir, entry.name);

			if (entry.isDirectory()) {
				if (entry.name.startsWith('(')) {
					return [];
				}

				return listPageFiles(fullPath);
			}

			return entry.name === '+page.svelte' ? [fullPath] : [];
		})
	);

	return files.flat();
}

function routeFromPageFile(pageFile) {
	const relativeDir = path.relative(routesDir, path.dirname(pageFile));

	if (!relativeDir || relativeDir === '.') {
		return '/';
	}

	const segments = relativeDir
		.split(path.sep)
		.filter(Boolean)
		.filter((segment) => !segment.startsWith('[') && !segment.startsWith('('));

	return `/${segments.join('/')}`;
}

function hasNoindex(content) {
	return /<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(content);
}

function priorityForRoute(route) {
	const priorities = new Map([
		['/', '1.0'],
		['/fractional-cto', '0.9'],
		['/technical-advisory', '0.9'],
		['/ai-transformation', '0.9'],
		['/book', '0.8']
	]);

	return priorities.get(route) ?? '0.7';
}

function toAbsoluteUrl(route) {
	if (route === '/') {
		return `${SITE_URL}/`;
	}

	return `${SITE_URL}${route}`;
}

async function generateSitemap() {
	const pageFiles = await listPageFiles(routesDir);

	const routes = [];
	for (const pageFile of pageFiles) {
		const content = await fs.readFile(pageFile, 'utf8');
		if (hasNoindex(content)) {
			continue;
		}

		const route = routeFromPageFile(pageFile);
		if (!route || route.includes('[')) {
			continue;
		}

		routes.push(route);
	}

	const uniqueRoutes = [...new Set(routes)].sort((a, b) => {
		if (a === '/') return -1;
		if (b === '/') return 1;
		return a.localeCompare(b);
	});

	const urlEntries = uniqueRoutes
		.map(
			(route) =>
				`  <url>\n    <loc>${toAbsoluteUrl(route)}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priorityForRoute(route)}</priority>\n  </url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

	await fs.writeFile(sitemapPath, xml, 'utf8');
	console.log(`Sitemap generated with ${uniqueRoutes.length} routes at ${sitemapPath}`);
}

generateSitemap().catch((error) => {
	console.error('Failed to generate sitemap');
	console.error(error);
	process.exit(1);
});
