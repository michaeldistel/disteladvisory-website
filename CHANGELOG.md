# Changelog

All notable changes to this project will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]

### Added

- Initial project scaffold
- GA4, Google Ads, LinkedIn Insight Tag, Meta Pixel install hooks via public env vars
- Sitewide self-referencing canonical tag via `$app/state` page URL
- Prebuild script to auto-generate `static/sitemap.xml`, excluding noindex pages
- nginx 301 redirect for trailing-slash URLs
- `SITE_URL` constant in `src/lib/site-config.ts`
- JSON-LD schema module (`src/lib/schema.ts`) with typed builders for Organisation, WebSite, Service, FAQPage, and BreadcrumbList
- Sitewide Organisation and WebSite schema injected in root layout
- Service, Breadcrumb, and FAQPage schema on AI Transformation, Fractional CTO, and Technical Advisory pages
