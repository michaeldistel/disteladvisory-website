# Distel Advisory

Marketing website for Distel Advisory

**Live:** https://disteladvisory.com

## Stack

- **Framework:** SvelteKit (static site generation)
- **Styling:** Tailwind CSS
- **Package manager:** pnpm
- **Deployment:** Cloudflare Pages

## Development

```sh
pnpm dev        # dev server
pnpm check      # type check
pnpm format     # format
pnpm lint       # lint check
```

## Build & Deploy

```sh
pnpm cf:deploy     # build + upload to Cloudflare Pages
```

## Tracking config

GTM container ID is repo-configured in `src/lib/site-config.ts`.
