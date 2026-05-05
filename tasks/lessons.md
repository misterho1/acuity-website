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

### L7 — Cloudflare Pages adds `x-robots-tag: noindex` to *.pages.dev URLs
Lighthouse SEO score on a `*.pages.dev` preview is capped at ~66 because the response includes `x-robots-tag: noindex`. This is a Cloudflare feature to prevent preview environments from competing with production in Google's index. The header is automatically removed when a custom domain is attached. **Don't waste time "fixing" the SEO score on the preview URL — it's environmental, not a code issue.**

### L8 — `@import` in CSS sequentializes loading; link stylesheets directly in HTML for parallel
A `@import url("./tokens.css")` inside `site.css` forced tokens.css to load AFTER site.css instead of in parallel. Both showed up as render-blocking in Lighthouse with their wasted-ms summed. Removing the `@import` and adding two `<link rel="stylesheet">` tags in `head.html` cut render-blocking time in half.

### L9 — Async Google Fonts pattern that actually works on Lighthouse
The `<link rel="stylesheet" media="print" onload="this.media='all'">` + `<link rel="preload" as="style">` + `<noscript>` triple is the pattern that drives Lighthouse render-blocking from "847ms wasted" to zero. Just `<link rel="preconnect">` is not enough — Lighthouse still flags the synchronous CSS request as render-blocking.

### L10 — `gh repo create … --source=. --push` is the cleanest one-shot
`gh repo create misterho1/acuity-website --public --source=. --remote=origin --push` does three things in one command: creates the GitHub repo, sets the local remote, and pushes the initial commit. Compared to the alternative (create empty repo in dashboard → `git remote add` → `git push -u`), this is one command vs. three steps spread across two surfaces (browser + CLI). Worth knowing.

### L11 — Wrangler + Pages: project must exist before deploy
`wrangler pages deploy <dir> --project-name=X` fails with "Project not found" if X doesn't exist. The fix is one extra command beforehand: `wrangler pages project create X --production-branch=main`. Worth scripting both into a single deploy command for repeated use.

### L12 — Lighthouse on Windows: cleanup error is cosmetic, JSON still writes
On Windows, `npx lighthouse … --output-path=foo.json` exits with `EPERM: Permission denied` while removing its temp dir, even when the run succeeded. The JSON output writes correctly before the cleanup error. Treat the exit code as advisory; check for the file's existence directly. (Likely a chrome-launcher cleanup race against Windows file locks.)
