# Lessons Learned — Acuity Website Build

> Source of truth for rules and patterns learned during this build.
> Updated as we go. Phase 6 reviews this for handoff completeness.

(empty — Drive copy was empty at session start, 2026-05-05)

---

## Rules from user (2026-05-05 kickoff message)

- Plan mode first; verify before executing.
- Pull real source material; do not assume any design system.
- Self-verify end to end before handing back.
- Do not invent credentials, certifications, team members, years in business, or testimonials. Anything missing → `content-gaps.md`.
- Do not lift copy from foxterradesign.com or any competitor.
- Translate Foxterra's design *language*, not its brand.
- Static HTML / Cloudflare Pages / no framework.

## Lessons captured during build

### L1 — Foxterra design language extraction needed Apify, not WebFetch
WebFetch strips `<head>` and inline CSS when it converts pages to markdown — it cannot extract real design tokens. For sites built on WordPress + Elementor (or any page builder that emits per-page generated stylesheets), use Apify's `apify/beautifulsoup-scraper` Actor with a custom `pageFunction` to enumerate `<link rel="stylesheet">` hrefs first, then WebFetch the CSS files directly. (See `research/design-language.md` "Method" section.)

### L2 — Static-HTML build with vanilla Node `build.js` is genuinely tiny
~70 lines of Node, zero dependencies, zero `node_modules`, two `<!-- #include -->` and one `{{var}}` regex pass. 25-page site builds in under a second. The `package.json` exists only to provide an `npm run build` and a one-line dev server (encoded inline in the script command). For small-medium static sites this beats Eleventy/Astro on simplicity by a wide margin.

### L3 — All imagery is currently CSS background-image
The site has zero `<img>` tags as of Phase 4 completion. Hero photos are CSS `background-image` URLs (Unsplash placeholders for now); team photos are CSS gradients pending commissioned headshots (gap #18). Implication: no alt-text audit needed at this stage; when real imagery arrives, the rule for the migration is **content imagery uses `<img>` with alt + `loading="lazy"`; decorative backgrounds stay as CSS `background-image`.**

### L4 — Schema-validation-friendly omission > schema-validation-friendly fabrication
The `Person` schema for each director omits `hasCredential` (CPA designation) until per-director CPA status is confirmed (gaps #3-5). Same logic for `openingHours` (gap #8) on the LocalBusiness blocks. Each absence is a deliberate non-fabrication. When the gaps fill, each addition is a single-property update, not a schema rewrite.

### L5 — `_redirects` "trailing-slash normalization" rules are a footgun
A `/*.html /:splat/ 301` catch-all rule will mis-redirect `/404.html` to `/404/` (which doesn't exist) and break Cloudflare Pages' default 404 handling. Always enumerate the explicit legacy redirects rather than blanket-rewriting an extension.

### L6 — OG images: SVG works on modern previewers, raster needed for legacy SMS/email
Twitter, Facebook, LinkedIn, Slack, Discord, iMessage all render SVG OG images correctly. A small subset of legacy SMS link-preview generators and older email clients prefer raster JPG/PNG. Logged as content-gap #24 — for v1, SVG ships and degrades silently on legacy.
