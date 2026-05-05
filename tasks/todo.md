# Acuity Business & Tax Advisors — Website Build

> **Workflow rules** (from user, 2026-05-05):
> 1. Plan mode first. Verify before executing.
> 2. Read tasks/lessons.md at start. (Currently EMPTY in Drive — proceeding with no learned rules; will populate as we go.)
> 3. No assumed design system. Pull real source material.
> 4. Self-verify end to end before handing back.

**Goal:** Ship a static HTML site for Acuity Business & Tax Advisors, deployed to Cloudflare Pages from a new GitHub repo under `Misterho`, with original design translated from Foxterra Design's design language and zero fabricated content.

**Stack:** Static HTML, vanilla CSS (custom-properties tokens), vanilla JS, Cloudflare Pages, GitHub. Tiny Node include script for shared partials (header/footer/nav/CTA).

**Locked decisions:**
- Local path: `C:/Users/goho2/projects/acuity-website/`
- GitHub repo: `Misterho/acuity-website`
- Domain: keep `expectacuity.com` (preserves SEO equity)
- Cloudflare: existing account (same one running exclusiveut, mtnviewlandscapingutah)
- Build step: tiny Node include script for partials

---

## Phase 0 — Setup ✅

- [x] Confirm decisions: repo name, domain, local path, Cloudflare account
- [x] Create local project dir at `C:/Users/goho2/projects/acuity-website/`
- [x] Initialize folder structure: `tasks/`, `research/`, `src/`, `src/assets/`, `src/partials/`, `src/styles/`, `src/scripts/`, `dist/`
- [x] Save this todo.md into `tasks/todo.md`
- [ ] Stub `tasks/lessons.md` (empty for now; we'll populate as we go)

## Phase 1 — Research (parallel)

- [ ] Dispatch Subagent A: foxterradesign.com design-language extraction → `research/design-language.md`
  - Color tokens (real hex values from stylesheet, not eyeballed)
  - Type stack, scale ratio, weights actually used
  - Spacing rhythm (base unit, section padding values)
  - Button styles (radius, padding, hover behavior)
  - Photography style (color grading, framing, subject framing)
  - Section pacing notes (hero → proof → service → CTA cadence)
  - Visual hierarchy patterns
  - **Constraint:** describe the SYSTEM. NO verbatim copy or imagery.

- [ ] Dispatch Subagent B: expectacuity.com content audit → `research/current-content.md`
  - Full page list with URLs
  - **Verbatim** service descriptions (every service)
  - Value props, team bios, contact info, hours
  - Existing image inventory (URLs + alt text + intended use)
  - Existing IA (nav structure, footer links)
  - Testimonials/credentials VERBATIM (do not paraphrase)
  - **Constraint:** this is source-of-truth. Anything not here is a content gap.

- [ ] Dispatch Subagent C: Utah CPA/tax-advisor competitive scan → `research/competitive-analysis.md`
  - 5–7 page-1 firms for: "tax advisor Salt Lake City", "CPA Utah", "small business tax Utah", "tax planning Salt Lake City"
  - Document: service categorization, trust signals, lead-capture mechanics, content depth, local SEO signals
  - **Constraint:** patterns only. NO copy lifted.

- [ ] Synthesize all three into `research/site-spec.md`
  - Information architecture (nav, page list, URL structure)
  - Section-by-section content plan per page (sourced to current-content.md)
  - Translated design tokens (colors, fonts, spacing — original to Acuity)
  - Trust-signal plan (only with credentials we can verify)
  - Open content gaps → flagged for `tasks/content-gaps.md`
- [ ] **GATE: present site-spec.md for user approval before Phase 2**

## Phase 2 — Design system

- [ ] Pick palette appropriate for tax advisory (deep blues + warm neutrals + one disciplined accent). Mirror Foxterra's contrast/saturation logic; values original.
- [ ] Pick typography: serif/sans pairing logic from Foxterra, different fonts.
- [ ] Build `src/styles/tokens.css` (CSS custom properties: colors, type scale, spacing scale, radii, shadows, transitions).
- [ ] Vibe check: render a sample hero + service card with the tokens. Side-by-side compare against Foxterra hero. Must read "high-end professional services," NOT "outdoor design studio."
- [ ] **GATE: confirm tokens before building pages**

## Phase 3 — Build pages

Pages (confirm in site-spec.md): Home, Services, About/Team, Insights/Blog index, Contact, Schedule consultation.

- [ ] Set up shared partials: `header.html`, `footer.html`, `nav.html`, `cta-block.html`. Build the Node include script.
- [ ] Build base `src/styles/site.css` consuming tokens.css
- [ ] Build Home (preserve all home copy from current-content.md)
- [ ] Build Services index + each service sub-page/section
- [ ] Build About/Team (only verifiable team info; flag gaps)
- [ ] Build Insights/Blog index (empty list for now; SEO-ready)
- [ ] Build Contact (form posts to existing endpoint or new Cloudflare Form)
- [ ] Build Schedule consultation (lead capture — confirm form destination)
- [ ] Maintain `tasks/content-gaps.md` as we go

## Phase 4 — SEO + geo

- [ ] Title + meta description per page (geo-targeted to SLC + Utah)
- [ ] Schema.org: LocalBusiness, AccountingService, Person, FAQPage where applicable
- [ ] Open Graph + Twitter card meta per page (with branded OG image)
- [ ] `sitemap.xml`, `robots.txt`
- [ ] Canonical URLs on every page
- [ ] Alt text on every image
- [ ] City names worked into H1s/H2s/body naturally: SLC, Park City, Provo, Draper, Lehi, Sandy, "Utah" broadly. No stuffing.
- [ ] Image optimization: convert to WebP, generate responsive `srcset`, lazy-load below-the-fold
- [ ] Minify CSS/JS, preconnect fonts
- [ ] Internal linking pushes equity to Services + Schedule pages
- [ ] Draft `tasks/content-plan.md`: 6–12 SEO blog post outlines (do NOT write the posts yet)

## Phase 5 — Deploy

- [ ] Create `Misterho/acuity-website` GitHub repo
- [ ] Push initial commit
- [ ] Connect to Cloudflare Pages, configure build, deploy preview
- [ ] Attach custom domain `expectacuity.com`
- [ ] Verify mobile / tablet / desktop rendering
- [ ] Run Lighthouse on Home, Services, Contact (target ≥90 on all four categories)

## Phase 6 — Self-verify

- [ ] Every page renders mobile + desktop
- [ ] Every link works (run link checker)
- [ ] Every form submits to expected destination
- [ ] All meta tags present (programmatic check)
- [ ] Schema validates on Google Rich Results Test
- [ ] Lighthouse ≥90 on all four categories
- [ ] Content traceability: every claim in site is sourced to current-content.md OR flagged in content-gaps.md
- [ ] No copy lifted from foxterradesign.com or any competitor (verbatim search)
- [ ] tasks/todo.md fully checked off
- [ ] tasks/lessons.md updated with anything learned

## Handoff

- Deployment URL
- GitHub repo URL
- Lighthouse report
- content-gaps.md for user to fill
- Suggested next steps (blog post writing, GBP setup, Search Console submission)

---

## Review section (filled in at Phase 6)

(empty — to be filled in at the end)
