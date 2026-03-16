## Scope
Project-local rules for this `disteladvisory-website` website repo only.

## Project Intent
Marketing website for Distel Advisory

## Stack
- SvelteKit + adapter-static (SSG)
- Tailwind CSS
- pnpm (package manager)
- Docker + nginx:alpine, Traefik reverse proxy

## Key Commands
```sh
pnpm dev            # dev server
pnpm build          # production build (includes prebuild)
pnpm check          # svelte-check + type check
pnpm format         # prettier --write
pnpm lint           # prettier --check
pnpm prod:deploy    # build + rsync + docker restart (ask first)
```

## Deployment
- Never deploy without explicit user permission.
- Deployment copies `build/`, `prod.compose.yml`, `nginx/` via rsync to homelab, then restarts Docker container.
- Update `static/sitemap.xml` whenever new routes are added.

## GitHub Flow
- Pull issue context, branch, commit, open PR; never auto-merge.
- Before commit/PR: run `pnpm check` + `pnpm build`, confirm no secrets, update docs/changelog if user-facing.

## Branching
- `main`: always deployable. Never commit directly.
- `feature/issue-N-desc`: new functionality.
- `fix/issue-N-desc`: bug fixes.
- `chore/desc`: tooling, config, dependencies.
- `docs/desc`: documentation-only changes.
- All branches PR directly to `main`; delete branch after merge.

## Release Process
- Ship: move `CHANGELOG.md` `[Unreleased]` to `[X.Y.0] - YYYY-MM-DD`, tag `vX.Y.0` on `main`, close milestone.

## Pull Requests
- Use `.github/PULL_REQUEST_TEMPLATE.md`.
- 1-5 bullets: what changed, why, closes which issues.

## Changelog
- Keep a Changelog: `Added`, `Changed`, `Fixed`, `Removed`.
- Concise, user-facing entries only; no severity labels.
- In-progress work stays under `[Unreleased]`.

## UI Design
- Before writing any UI component, consult the **ui-design-brain** knowledge base at
  `~/.config/opencode/templates/ui-design-brain/` — read `SKILL.md` for design philosophy
  and workflow, `components.md` for the 60+ component reference.
- Follow its anti-pattern list: no rainbow badges, no placeholder-only fields, no equal-weight buttons, etc.
- Default design direction: **Modern SaaS** (neutral palette, one accent, 8 px grid, generous white space).
- Override direction only when user explicitly requests a different style preset.

## Copy Rules
- No em dashes (`—`) anywhere in site copy. Rewrite sentences to avoid them (use a comma, colon, or split into two sentences).
- No emoji anywhere on the site.
- Contact email: `michael@disteladvisory.com`.
- Use `|` as the title separator in `<title>` tags.

## Change Rules
- Keep UI changes intentional and consistent with the existing design system.
- Avoid broad refactors unless asked.
- Never commit `.env`, tokens, credentials, `src/lib/build-info.ts`, or local override files.
- `src/lib/build-info.ts` is auto-generated — keep it in `.gitignore`.

## Validation
- Run `pnpm check` and `pnpm build` before every commit.
- Use Playwright for browser testing/regressions where applicable.
- State exactly what ran; if nothing exists yet, say so.

## Git Hygiene
- Do not auto-commit or push unless explicitly requested.
- When a commit is requested, use `/commit` instead of manual commit steps.
