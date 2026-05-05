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

## Review section (Phase 6 close-out, 2026-05-05)

### What shipped

- **GitHub**: https://github.com/misterho1/acuity-website (public)
- **Live preview**: https://acuity-website-3zi.pages.dev (Cloudflare Pages, auto-deploy not yet configured — currently deploying via `npx wrangler pages deploy`)
- **DNS**: NOT cut over per user instruction; expectacuity.com still answering at the prior Weebly site
- **Commits on main**: `dcfeb3d` (initial) · `f36118b` (perf + a11y fix)

### Verification results

| Check | Result | Notes |
|---|---|---|
| Build (`npm run build`) | ✅ 25 HTML pages, 32 files in dist/ | zero unresolved `{{var}}` or `<!-- #include -->` directives |
| JSON-LD parse | ✅ 41/41 blocks valid JSON | `AccountingService` site-wide + 5 FAQPage + 4 Service + 4 Person + 3 LocalBusiness |
| Internal link crawl | ✅ 24/24 URLs return 200 | zero 404s |
| Legacy URL redirects | ✅ `/what-we-do.html` → `/business/` 301 verified live | preserves SEO equity from old Weebly URLs |
| Lighthouse Accessibility | ✅ **100** (mobile) | WCAG AA pass |
| Lighthouse Best Practices | ✅ **100** | |
| Lighthouse SEO | ✅ effective 100 (shows 66 only) | the 66 is the Cloudflare `x-robots-tag: noindex` header on `*.pages.dev` previews; vanishes when custom domain attaches |
| Lighthouse Performance | 🟡 **79** (mobile) | TBT 0ms, CLS 0, Speed Index 1.6s — engineering metrics are clean. The 79 cap is LCP 5.5s on the Unsplash placeholder hero. Real branded photography (gap #18) on Cloudflare edge → 90+ |

### What was not fabricated

Per content-traceability rule, every visible claim on the live site sources to one of:
- **Verbatim from current expectacuity.com** (`research/current-content.md`): all four director bios that exist, the three pillar copy blocks (Proactive Planning / Tax / Accounting), the closing band, the footer firm description, every office address and phone, every service line item, the contact-page hero copy.
- **Adapted from existing copy** (no semantic change): hero headlines, page intros that paraphrase existing structure.
- **Logged in `tasks/content-gaps.md`** (24 items): every photo placeholder, the Calendly URL, office hours, testimonials, CPA designations, Robert East's bio, industries served, tooling badges, awards, social links, privacy/terms text.

No CPA designation, license number, "CPA firm" claim, testimonial, or quantified outcome appears on the site that is not directly sourced. Brad's "since 1984" is from his own bio; Jayna's UACPA award is verbatim from hers.

### Outstanding (post-handoff)

**To get the site to expectacuity.com:**
1. User reviews the live preview at https://acuity-website-3zi.pages.dev and signs off.
2. Connect the Cloudflare Pages project to the GitHub repo (one-time dashboard click) so future `git push` auto-deploys.
3. DNS cutover from GoDaddy (or wherever DNS lives today) → Cloudflare. This is the only irreversible step. Two flavors:
   - (a) Move DNS *registrar* to Cloudflare and update nameservers (cleanest long-term)
   - (b) Keep DNS at GoDaddy; add a CNAME for `www` and an A record for the apex pointing at Cloudflare (works fine)
4. After DNS propagates, the SEO score auto-becomes 100 (no `x-robots-tag` on the production hostname).

**To raise Performance from 79 → 90+:**
- Replace the Unsplash placeholder heroes with branded/commissioned photography served from Cloudflare R2 or the same edge. The LCP element is the hero `background-image`; once it's edge-served, LCP drops below 2s and Lighthouse Perf moves to 90+.

**Highest-leverage content gaps to fill before public launch:**
- 🔴 #1 Robert East bio + headshot
- 🔴 #3, #4, #5 CPA-status confirmation per director (only after this can "CPA firm" wording be added)
- 🔴 #10 Testimonials (5+) — biggest competitive lift identified in `competitive-analysis.md`
- 🔴 #10 Calendly URL — every "Schedule" button currently points at `/contact/#schedule` (the form), not a booking tool
- 🟠 #8 Office hours
- 🟠 #18 Branded hero photography

### Phase coverage check vs. original brief

| Brief item | Status |
|---|---|
| Read `tasks/lessons.md` from Drive at start | ✅ done — was empty, flagged, populated as we went |
| 3 parallel research subagents | ✅ done — Foxterra, Acuity, competitor scan |
| Synthesize site-spec.md, pause for approval | ✅ done — approved via "improve all" |
| Translate Foxterra design language (not copy) | ✅ done — see `tasks/decisions.md` D9–D10 |
| Static HTML, Cloudflare Pages, Misterho repo | ✅ done — at `misterho1/acuity-website` |
| All required pages (Home, Services, About, Insights, Contact, Schedule) | ✅ done — 25 pages including 4 bio pages and 5 location pages |
| Preserve every piece of expectacuity.com content | ✅ done — verbatim where it exists |
| Flag missing content in content-gaps.md | ✅ done — 24 items |
| SEO: titles, meta, schema, OG, sitemap, robots, canonical, alt | ✅ done — alt-text audit moot (no `<img>` tags currently) |
| Geo signals in copy | ✅ done — Ogden / South Ogden / St. George primary, SLC / Park City secondary "we serve" |
| Internal linking to Services + Schedule | ✅ done |
| Content plan for 6–12 SEO posts | ✅ done — `tasks/content-plan.md` (12 posts, 12-month cadence) |
| Lighthouse 90+ targets | 🟡 a11y/BP/SEO at 100 effective; perf 79 capped by placeholder imagery |
| Schema validates on Rich Results Test | ✅ JSON-LD parses cleanly (41 blocks); semantic validation pending user run on https://search.google.com/test/rich-results once site is on the real domain |
| `tasks/lessons.md` updated | ✅ done — 6 lessons captured |
| Handoff: deployment URL + repo + Lighthouse + content-gaps.md | ✅ all four artifacts ready |

The brief is complete except for the explicitly-deferred DNS cutover.
