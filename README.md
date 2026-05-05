# Acuity Business & Tax Advisors — Website

Static HTML site for [expectacuity.com](https://expectacuity.com), built with vanilla HTML, CSS, and JS. No framework. Deployed to Cloudflare Pages from this repo.

## Local development

```bash
npm run build   # compiles src/ → dist/ (vanilla Node, no deps)
npm run serve   # serves dist/ on http://localhost:8787
```

## Project layout

```
src/
├── pages/          one .html per route + sitemap.xml + robots.txt + _headers + _redirects
├── partials/       head.html, header.html, footer.html, cta-block.html
├── styles/         tokens.css (design tokens) + site.css (components)
├── scripts/        site.js (mobile nav, FAQ accordion, contact form)
└── assets/         favicon.svg, og-image.svg

build.js            ~70-line vanilla Node build (resolves <!-- #include "x" --> + {{var}})
package.json        scripts only — zero dependencies
dist/               build output (gitignored — Cloudflare Pages rebuilds on push)

tasks/
├── todo.md         project plan + phase tracking
├── decisions.md    locked design + product decisions
├── content-gaps.md items the site needs that current expectacuity.com doesn't provide
├── content-plan.md 12-post SEO content roadmap for /insights/
└── lessons.md      patterns + gotchas discovered during the build

research/           Phase 1 source material (foxterra design language, expectacuity content audit, Utah CPA competitive scan, synthesis spec)
```

## Page templates

Each page in `src/pages/` opens with a `<!--meta -->` frontmatter block:

```html
<!--meta
title: Page title for the browser tab + OG
description: Meta description (~155 chars)
canonical: https://expectacuity.com/path/
-->
<!-- #include "head" -->
<!-- #include "header" -->
<main>...</main>
<!-- #include "cta-block" -->
<!-- #include "footer" -->
```

The build resolves the includes against `src/partials/` and substitutes `{{title}}` / `{{description}}` / `{{canonical}}` from the meta block.

## Deployment

Cloudflare Pages config:
- **Build command:** `npm run build`
- **Build output:** `dist`
- **Node version:** 18 or newer (no specific version required — vanilla Node)

`dist/_headers` and `dist/_redirects` configure cache rules and legacy `/foo.html` → `/foo/` 301s for SEO equity preserved from the prior Weebly site.

## Conventions

- **No fabricated content.** Anything missing from the original expectacuity.com (CPA designation status, testimonials, office hours, photos) is logged in `tasks/content-gaps.md` and either omitted or flagged inline rather than invented.
- **No client-side framework.** The site is shippable from a basic CDN with no hydration.
- **Sharp 0px corners + 1px borders** are a deliberate design rule (translated from foxterradesign.com's design language). Don't soften them without revisiting `research/site-spec.md` §5.

## License

Proprietary. © Acuity Business & Tax Advisors, LLC.
