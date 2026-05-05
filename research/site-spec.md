# Acuity Business & Tax Advisors — Site Specification

**Synthesized from:** `design-language.md` (Foxterra), `current-content.md` (expectacuity.com), `competitive-analysis.md` (6 Utah CPAs)
**Date:** 2026-05-05
**Status:** AWAITING USER APPROVAL before Phase 2 (design system build).

---

## 1. Executive summary

Acuity is a 40+ year Utah tax & accounting firm (Brad Folsom in Ogden since 1984) operating from **Ogden, South Ogden, and St. George** — *not* Salt Lake City proper. The current expectacuity.com site is brochureware on Weebly with a 2019 copyright, no working scheduling CTA, no testimonials, no service-specific pages, no blog, and a placeholder bio for one of four directors.

The rebuild has three orthogonal jobs:

1. **Preserve & polish** every piece of real content from expectacuity.com (services, bios, contact info, value props). Verbatim where possible.
2. **Fix structural gaps** competitors have already solved: working scheduling CTA, deep team bios, testimonials, service pages, FAQ, blog scaffolding, schema/SEO, real alt text, privacy/terms.
3. **Translate** Foxterra's design *language* (single-accent + warm-neutral + 1px architecture + serif/caps-sans/body-sans triad) into a tax-advisory-appropriate palette and font set.

We have one fast-mover advantage that costs nothing: **zero of six top-ranking Utah CPA competitors embed inline scheduling.** Wiring Calendly directly onto Home + Contact ships us past everyone on conversion path friction.

---

## 2. Critical decisions needed from user (BEFORE Phase 2)

These are not preferences — they are blocking. I'm flagging each so you can answer in one pass.

### 2A. Geo strategy mismatch
Your brief targets **Salt Lake City, Park City, Provo, Draper, Lehi, Sandy**. Acuity's actual offices are in **Ogden, South Ogden, and St. George**. Zero overlap.

Three options:
- **(a) Honest geo** — primary geo is Ogden + Weber County + Washington County (St. George). Add SLC as a secondary "we serve all of Utah remotely" page. Aligns with reality, weaker SLC SEO.
- **(b) Aspirational geo** — open a virtual SLC presence (Google Voice number + virtual office), build a SLC location page, target SLC keywords. Riskier — Google penalizes thin local pages.
- **(c) Statewide** — drop city-specific targeting, optimize for "Utah" + "tax advisor near me" + "Northern Utah." Safer, less per-city long-tail traffic.

**Recommendation:** (a) Honest geo. Build location pages for **Ogden, South Ogden, St. George** (real offices) plus secondary pages for **Salt Lake City, Park City, Layton, Logan** as "we serve" pages explicitly framed as remote-friendly. This matches reality and matches what 4/6 competitors do.

### 2B. Credentials verification
The bios in `current-content.md` are ambiguous on CPA status:
- **Brad Folsom**: "31-year licensed CPA … now concentrates exclusively on areas of taxation and consulting" — suggests **not currently a licensed CPA**. Confirm.
- **Justin Matthews**: BS Accounting + Master of Accountancy. **No CPA designation listed** in current bio. Is he a CPA?
- **Jayna Forsgren**: Master of Professional Accountancy in Tax + UACPA member + 2019 UACPA Women to Watch. UACPA membership *probably* implies CPA, but not stated outright. Confirm.
- **Robert East**: bio is literally "Coming soon." Need full bio + headshot.

If anyone is **not** a CPA, the firm cannot legally advertise "CPA firm" on the site. Need confirmation per person before we write any badge/credential markup.

### 2C. Brand-identity ambiguity
Current logo alt text is `EAST FOLSOM LLC`. Site brand is `Acuity Business & Tax Advisors, LLC`. Which name leads on the new site, and what does the footer legal line say?

### 2D. Information architecture choice
Two valid IA models on page-1 competitors:
- **(a) Service-type-first** — "What we do" is the entry, services are top-level (current Acuity pattern, also Haynie/Tanner/Squire/CMP).
- **(b) Client-type-first** — "Business" / "Personal" is the entry, services nest underneath (Dark Horse). Strongest for SMB+individual mix.

**Recommendation:** (b) Client-type-first, since Acuity's bios mention serving "small business owners and individuals" and the firm's positioning is SMB-focused. Two top-level nav items + 3–4 services per side.

### 2E. Lead-capture mechanism
Three sub-decisions:
- **Scheduling tool**: Calendly, Acuity Scheduling (cute name match), Cal.com, or a simple email form that creates a Total Brokerage task? Per memory you already use Total Brokerage for transaction automation in real estate — does Acuity-the-firm use a CRM I should integrate with?
- **General contact email** (currently missing from site): `info@expectacuity.com`? `hello@…`? Or keep individual director emails as the path?
- **Office hours**: missing from site. Confirm and supply.

### 2F. Differentiators to commit to
Ranked by ROI from the competitive scan. Confirm which we ship in v1:
- [ ] Inline Calendly scheduling on Home + Contact (**zero competitors have this** — fastest fast-mover win)
- [ ] 24- or 48-hour response SLA stated on Contact (only CMP does this — costs nothing)
- [ ] Deep team bios w/ specialties + education + direct phone (only Dark Horse + CMP do this well)
- [ ] 5+ named testimonials with photos (only CMP has this — Acuity currently has zero)
- [ ] Tooling badges (QBO ProAdvisor, Xero, Gusto) — depends on what Acuity actually uses
- [ ] Homepage FAQ (5–8 questions, FAQPage schema)
- [ ] One downloadable lead magnet (e.g. "Utah small-business tax checklist" PDF)
- [ ] 2–3 calculators (S-corp savings, refund estimator)
- [ ] Pricing transparency page — **risky** (only Dark Horse does it; misaligns with bespoke advisory positioning)

### 2G. Domain
Locked to `expectacuity.com` per Phase 0. Confirm DNS is in your Cloudflare account and you can point the CNAME yourself.

---

## 3. Information architecture

Assumes 2D-(b) client-type-first. If you choose 2D-(a) instead, swap the top-level nav.

### 3.1 Top nav (4 items + 1 utility)

```
[Logo: Acuity]      Business    Personal    About    Insights    [Schedule a Strategy Session]
```

Plus a utility row in the header: phone numbers (3 offices) + Client Login link.

### 3.2 Page list & URL structure

| URL | Page | Purpose |
|---|---|---|
| `/` | Home | Pillars, proof, CTA, FAQ, scheduling embed |
| `/business/` | Business overview | Services for SMBs (advisory + maintenance) |
| `/business/tax-business-advisory/` | Service detail | Long-form, FAQ, embedded CTA |
| `/business/tax-accounting-maintenance/` | Service detail | Long-form, FAQ, embedded CTA |
| `/business/entity-structure/` | Service sub-detail | (optional v2 — see §6) |
| `/personal/` | Personal overview | Personal tax prep + planning |
| `/personal/tax-preparation/` | Service detail | |
| `/personal/multi-year-projections/` | Service detail | |
| `/about/` | About | History, passion, team grid |
| `/about/justin-matthews/` | Bio | Deep bio (Dark Horse pattern) |
| `/about/robert-east/` | Bio | (pending content) |
| `/about/jayna-forsgren/` | Bio | |
| `/about/brad-folsom/` | Bio | |
| `/insights/` | Blog index | Empty list at launch, SEO-ready |
| `/contact/` | Contact | 3 offices + form + Calendly + SLA |
| `/locations/ogden/` | Location | Office detail + map + city-specific signals |
| `/locations/south-ogden/` | Location | |
| `/locations/st-george/` | Location | |
| `/locations/salt-lake-city/` | Location | "We serve" remote-friendly page |
| `/locations/park-city/` | Location | "We serve" remote-friendly page |
| `/client-login/` | Login | Single page (consolidate the two existing duplicate logins) |
| `/make-a-payment/` | Payment | PayPal redirect (existing flow) |
| `/check-my-refund/` | Refunds | Wire to real IRS + Utah TAP URLs (currently broken) |
| `/privacy/` | Privacy policy | (pending content) |
| `/terms/` | Terms | (pending content) |
| `/sitemap.xml` | — | |
| `/robots.txt` | — | |

**Total pages at launch:** ~22 (vs. current 8). Most net-new pages are bio pages, location pages, and a privacy/terms set.

### 3.3 Footer

Three columns:
- **Acuity** — short firm description (verbatim from current footer)
- **Locations** — three office addresses + phones + hours
- **Resources** — Insights, Make a Payment, Check My Refund, Client Login, Privacy, Terms

Plus social row (if accounts exist — currently none linked) + © 2026 line + AccountingService schema NAP block.

---

## 4. Page-by-page content plan

Every block is sourced. Tags:
- `[VERBATIM]` — copy taken word-for-word from current-content.md
- `[ADAPT]` — restructured from existing copy without changing meaning
- `[NEW]` — new content; if marked `[NEW: gap]`, it's a content gap requiring user input
- `[DESIGN]` — non-copy element (image slot, component) requiring decision/asset

### 4.1 Home (`/`)

| # | Section | Source | Content notes |
|---|---|---|---|
| 1 | Hero | `[ADAPT]` | H1: "Tax and accounting for smart business owners" (verbatim, currently H2 — promote to H1). Subhead: condense from "Proactive Planning" + "Empowering you to make smarter business decisions" intros. CTA: "Schedule a Strategy Session" wired to Calendly. Hero image: human-present, warm-graded, environmental wide shot of a director with a client (`[NEW: gap]` photo). |
| 2 | Three pillars | `[VERBATIM]` | Proactive Planning / Tax / Accounting — full body copy verbatim from home page. Replace the icon-style decorations with real photography or restrained iconography. |
| 3 | Trust strip | `[NEW: gap]` | "40+ years serving Utah families and businesses" + 3–5 testimonial cards (need source) + tooling badges (need confirmation). |
| 4 | Closing band | `[VERBATIM]` | "A good accountant should never cost you money out of pocket. Our proven tax strategies save you taxes year after year." |
| 5 | FAQ | `[NEW]` | 5–8 questions: "When should I hire a tax advisor vs. just a tax preparer?" "Do you only work with Utah businesses?" "What does a strategy session cover?" etc. (drafts in Phase 3, FAQPage schema in Phase 4). |
| 6 | CTA + Calendly embed | `[NEW]` | Inline Calendly + 24-hour response SLA + 3 office phones. |
| 7 | Footer | (see §3.3) | |

### 4.2 Business (`/business/`)

| # | Section | Source | |
|---|---|---|---|
| 1 | Hero | `[ADAPT]` | H1: "Tax and business advisory for Utah small business owners" — pulled from current "What we do" hero. |
| 2 | Service grid | `[VERBATIM]` | Two cards: "Tax & Business Advisory" + "Tax & Accounting Maintenance". Use exact group descriptions from current site. Each card → its own service-detail page. |
| 3 | Industries served | `[NEW: gap]` | 4–6 industries Acuity actually serves. Pulling from director bios: real estate, multi-state entities, locally owned businesses. **Need user input** on which industries to feature. |
| 4 | Process | `[NEW]` | 3-step: (1) Strategy session → (2) Plan → (3) Ongoing maintenance. Adapted from existing "Proactive Planning" + "Maintenance" copy. |
| 5 | Trust + testimonial | (per §4.1.3) | |
| 6 | CTA | | |

### 4.3 Service detail pages (`/business/tax-business-advisory/`, etc.)

For each of the **two service buckets** (Tax & Business Advisory / Tax & Accounting Maintenance), one long-form page with:

- Hero (H1 = service name + city qualifier where natural, e.g. "Tax & Business Advisory for Utah Business Owners")
- `[VERBATIM]` group description from current site
- `[NEW]` "What's included" — turn the bullet lists from current-content.md into individual sub-sections with 1-paragraph descriptions per item:
  - Tax & Business Advisory: Entity Structure Planning, Business Income Strategies, Business Operations and Documentation, Accounting System Configuration, Cashflow Planning, Company Fringe Benefits, Education Savings Plans and Income Shifting, Independent Contractor Management & Reporting, Rental Property Operations
  - Tax & Accounting Maintenance: Monitor Current-Year Tax Plan, Multi-Year Tax Projections, Up-To-Date Accounting Records, Business Tax Preparation, Personal Tax Preparation, Payroll Processing and Tax Reporting, Phone Calls, Meetings, Accounting Software Assistance
  - **Note**: I will NOT fabricate per-item descriptions. Each will be 2–3 sentences and clearly factual ("Entity Structure Planning helps you choose between LLC, S-corp, and C-corp structures based on tax exposure and operational fit"). Anything that requires firm-specific claims (pricing, deliverables) gets flagged in `content-gaps.md`.
- Service-specific FAQ (3–5 questions)
- CTA

### 4.4 Personal (`/personal/`)

Personal is currently underdeveloped on expectacuity.com — only items like "Personal Tax Preparation" appear in the maintenance bullets. Plan:

- Hero
- Two service cards: "Personal Tax Preparation" + "Multi-Year Tax Projections" (more if we add Estate/Education planning per `[NEW: gap]` confirmation)
- Trust strip
- CTA

### 4.5 About (`/about/`)

| # | Section | Source | |
|---|---|---|---|
| 1 | Hero | `[VERBATIM]` | H1: "Who we are." |
| 2 | History | `[VERBATIM]` | Full "Our History" section. |
| 3 | Passion | `[VERBATIM]` | Full "Our Passion" section. |
| 4 | Team grid | `[VERBATIM]` for Justin/Jayna/Brad bios; `[NEW: gap]` for Robert East. **TODO**: silently fix "Communicty" typo in Jayna's bio? — needs user call. |
| 5 | Each director links to a `/about/[name]/` deep bio page (Dark Horse pattern: photo, full bio, specialties, education, direct phone, direct email) |
| 6 | CTA | | |

### 4.6 Bio pages (`/about/[name]/`)

Per Dark Horse pattern. Required fields:
- Photo (`[NEW: gap]` — Robert East, Jayna)
- Name + title(s)
- Office location
- Direct email (✓ have these)
- Direct phone (`[NEW: gap]`)
- Bio (verbatim where exists; `[NEW: gap]` for Robert)
- Specialties / industries served (`[NEW: gap]`)
- Education + credentials (✓ have for Justin/Jayna/Brad; `[NEW: gap]` for Robert)
- Personal/community (✓ have for Justin/Jayna/Brad)
- CTA: "Schedule with [name]"

### 4.7 Insights (`/insights/`)

Empty list at launch + a "More posts coming soon" message. Phase 4 produces `content-plan.md` with 6–12 post outlines for SEO.

### 4.8 Contact (`/contact/`)

| # | Section | Source | |
|---|---|---|---|
| 1 | Hero | `[VERBATIM]` | H1 + subhead from current Contact page. |
| 2 | 3 office cards | `[VERBATIM]` | Address + phone + hours (`[NEW: gap]` hours). |
| 3 | Calendly embed | `[NEW]` | Inline scheduling. |
| 4 | Contact form | `[NEW]` | Name / email / phone / topic / message — POSTs to a Cloudflare Worker (or Formspree). |
| 5 | 24-hour response SLA | `[NEW]` | "We respond to every inquiry within 24 hours." |
| 6 | Director list | `[VERBATIM]` | The four directors with their direct emails, linked to their bio pages. |

### 4.9 Locations (`/locations/[city]/`)

For each location page:
- H1: "Tax & Accounting Services in [City], Utah"
- Office address + phone (real offices) OR remote-friendly framing (SLC, Park City)
- Embedded GBP map (real offices)
- City-specific signals: testimonials from that city if available; community involvement (Brad's Ogden Union Station Foundation work, Jayna's UACPA work)
- LocalBusiness schema with NAP

---

## 5. Translated design tokens (Acuity)

These tokens preserve Foxterra's *contrast logic, restraint, type-pairing roles, 1px architecture, and editorial pacing* while swapping the warm-residential palette for a cool, finance-appropriate one.

### 5.1 Colors

| Acuity token | Value | Role | Foxterra equivalent |
|---|---|---|---|
| `--color-paper` | `#F7F8FA` | Page background, reverse-text | `#F8F7F2` (warm paper → cool paper) |
| `--color-ink` | `#1F2A37` | Primary text, dark fills | `#343332` (warm charcoal → slate ink) |
| `--color-accent` | `#0E3A5F` | Single accent — links, hover, key CTAs | `#C5A47E` (brass → deep navy) |
| `--color-accent-hover` | `#0A2B47` | Accent hover state | (derived) |
| `--color-mute` | `#5A6573` | Secondary text, captions | `#90938B` (sage → slate-mute) |
| `--color-rule` | `#D8DCE2` | 1px borders, dividers | (derived) |
| `--color-overlay` | `#1F2A37CC` | Hero image overlay (80% opacity slate ink) | `#000000A8` (black 66%) |

**Logic preserved:**
- Single chromatic accent (one navy, no rainbow)
- Cool-neutral envelope (paper + ink + mute all on a slate axis)
- Primary contrast `#1F2A37` on `#F7F8FA` ≈ 14.2:1 — well above WCAG AAA, mirrors Foxterra's 11.8:1
- Reverse-pair available (paper text on ink fill) — same restraint move

**Logic swapped:**
- Warm → cool axis (yellow-paper / brown-charcoal / brass-tan → blue-paper / slate-ink / navy-accent)
- Translates "established hospitality" → "established advisory"

**Open call:** if you'd prefer **forest green** (`#1F4A3D`) over deep navy as the accent, that's an equally defensible translation. Both read as "premium professional services." Navy is more conservative; forest is slightly more distinctive.

### 5.2 Typography

| Acuity token | Stack | Role | Foxterra equivalent |
|---|---|---|---|
| `--font-display` | `"Fraunces", "Source Serif Pro", Georgia, serif` | Hero / section headlines | Blacker Pro Display |
| `--font-eyebrow` | `"Inter", system-ui, sans-serif` (uppercase, +0.08em tracking) | Eyebrows, labels, button text, nav | Engravers Gothic |
| `--font-body` | `"Inter", system-ui, sans-serif` | Body copy, lists, FAQ | Open Sans |

**Why these specifically:**
- **Fraunces** is open-source (Google Fonts), variable, and at the *tighter* optical sizes reads as a modern editorial serif — close to GT Sectra's confidence without the license cost. Stays at weight 400 like Foxterra's display (we keep that rule — "the serif does the work").
- **Inter** is the cleanest free geometric humanist sans available, renders numerals well (critical for a tax firm — fractions and dollar amounts everywhere), and works for both UPPERCASE-tracked eyebrows and body. One font family, two roles, smaller font payload than Foxterra's three-font approach.

**Single deviation from Foxterra logic:** they use 3 distinct font families (display serif + caps sans + body sans). We collapse to 2 (display serif + Inter). This is more performance-friendly and doesn't lose the typographic *role allocation* since we still distinguish caps-tracked Inter from body Inter.

### 5.3 Type scale (resolved)

| Element | Font | Size (desktop) | Mobile | Weight | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|---|
| Hero H1 | Display | 60px | 36px | 400 | 1.1 | 0.01em | — |
| Section H2 | Display | 40px | 28px | 400 | 1.15 | 0.01em | — |
| Subsection H3 | Display | 28px | 22px | 400 | 1.2 | 0.01em | — |
| Eyebrow / button | Inter | 14px | 14px | 600 | 1.4 | 0.08em | uppercase |
| Body lead | Inter | 20px | 18px | 400 | 1.5 | — | — |
| Body | Inter | 16px | 16px | 400 | 1.55 | — | — |
| Small / caption | Inter | 14px | 14px | 400 | 1.5 | — | — |

**Logic preserved:** display weight stays at 400 (Foxterra rule); display line-height stays tight at 1.1; eyebrow stays uppercase + tracked.
**Logic swapped:** body line-height moves from Foxterra's 1.4 (print-dense) to 1.55 (web-readable for finance copy with numbers). Tax content needs to be scannable, not editorial.

### 5.4 Spacing rhythm

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Tightest — icon gap |
| `--space-2` | 8px | Inline element gap |
| `--space-3` | 16px | Paragraph spacing |
| `--space-4` | 24px | Component internal padding |
| `--space-5` | 40px | Card padding, button h-padding |
| `--space-6` | 60px | Inter-section spacing (mobile) |
| `--space-7` | 80px | Inter-section spacing (desktop) |
| `--space-8` | 120px | Hero / pillar spacing (desktop) |
| `--container` | 1140px | Max content width (Foxterra-locked) |
| `--container-narrow` | 720px | Editorial copy column |

**Logic preserved:** 4px base unit; 1140px container; 40–80px section rhythm; constrained inner copy columns.

### 5.5 Components

```
Button:
  font: Inter 14px / 600 / uppercase / 0.08em letter-spacing
  padding: 14px 32px
  border: 1px solid currentColor
  border-radius: 0   ← preserved from Foxterra (architectural feel)
  background: transparent (default = ghost)
  hover: background var(--color-ink) at 8% opacity wash + accent text color

Card:
  border: 1px solid var(--color-rule)
  border-radius: 0
  padding: var(--space-5)
  background: var(--color-paper)
  no shadow, no hover-lift

Input:
  border: 1px solid var(--color-rule)
  border-radius: 0
  padding: 12px 16px
  font: Inter 16px
  focus: border-color var(--color-accent)
```

**Logic preserved:** 0px corners, 1px borders, no shadows, ghost-button as default.

---

## 6. Phasing — what ships in v1 vs v2

### v1 (Phase 3 build, this engagement)
- All 22 pages listed in §3.2 EXCEPT individual sub-service pages (Entity Structure Planning, Cashflow Planning, etc.) — those are anchor sections inside the two service-detail pages, not separate URLs.
- Two service-detail pages (Tax & Business Advisory, Tax & Accounting Maintenance) with anchor-section per item
- All four bio pages
- Five location pages (3 real offices + SLC + Park City)
- Insights index (empty)
- Contact + Calendly embed
- Privacy + Terms (placeholder if not provided)

### v2 (post-handoff, optional)
- Individual sub-service pages (e.g. `/business/cashflow-planning/`) — only worth building if Acuity wants to compete on long-tail SEO ("cashflow planning Ogden Utah"). Each needs 600+ words of original content, which is a content-writing project.
- Calculators (S-corp savings, refund estimator) — utility content, real engineering.
- Lead-magnet PDF — content + design.
- Industry pages (real estate, construction, etc.) — content + IA expansion.

---

## 7. Content gaps for `content-gaps.md` (Phase 3)

Surfaced now so you can fill in parallel with Phase 2/3. **None of these will be fabricated** — each becomes either filled-by-user, sourced-from-existing-content, or page-section omitted.

Numbered for tracking:

1. Robert East: full bio + headshot + direct phone
2. Jayna Forsgren: headshot
3. Justin Matthews: confirm CPA designation status
4. Brad Folsom: confirm CPA designation status (currently licensed?)
5. Jayna Forsgren: confirm CPA designation
6. Director direct phone numbers (currently only emails are listed)
7. Office hours for all 3 offices
8. General firm email (info@expectacuity.com or similar)
9. Calendly / Acuity Scheduling URL
10. 5+ named client testimonials (quote + name + business + role + photo)
11. Industries served (4–6 verticals to feature on Business page)
12. Tooling badges to display (QBO ProAdvisor? Xero partner? Gusto? Drake? UltraTax?)
13. Awards / recognition (any Best of Northern Utah, UACPA recognitions firm-wide?)
14. Years in business — confirmable from Brad's bio (1984 = 41 years), but is this an Acuity claim or a Brad claim?
15. Brand-identity: lead with "Acuity Business & Tax Advisors, LLC" and footer-line "EAST FOLSOM LLC dba Acuity Business & Tax Advisors, LLC"? Or different?
16. Privacy policy text (or use a generator + review)
17. Terms of service text (or use a generator + review)
18. Photo of all 4 directors together for hero / About hero (currently no team-shot)
19. Hero photography — environmental wide shots with humans, warm-graded but cool-toned. Source: stock (Unsplash/Pexels) or commission a shoot? `[NEW]`
20. "Communicty" typo in Jayna's bio — silently fix, or preserve verbatim? (recommend silently fix)
21. Phone number duplication: Ogden + St. George share `(385) 333-4050`. Confirm or correct.
22. Check-My-Refund cards: real IRS link is `https://sa.www4.irs.gov/wmr/`; Utah TAP refund tracker is `https://tap.utah.gov/_/`. Confirm OK to use these.
23. Social media accounts (Facebook / LinkedIn / Instagram?) — currently none linked.
24. Service-line specific micro-FAQs (3–5 per service detail page) — drafted by us, reviewed by you for accuracy.

---

## 8. Self-review checklist

I ran this spec back through the user's brief:

- [x] Translates Foxterra's design *language*, not its identity
- [x] Preserves verbatim content from expectacuity.com where it exists
- [x] Flags every fabrication-candidate to `content-gaps.md` instead of inventing
- [x] Adopts patterns from competitors, no copy lifted
- [x] Geo-targeting realistic to Acuity's actual office footprint (with user choice point)
- [x] All required pages from brief are listed (Home, Services, About/Team, Insights, Contact, Schedule)
- [x] Plan covers Phase 4 SEO scope (titles, schema, sitemap, OG, alt text, geo, Lighthouse) — implementation in Phase 4, no design tokens needed
- [x] No copyright issue — design tokens are derived values, no copy from competitor sites quoted
- [x] One critical regulatory flag raised (CPA verification) before any "CPA firm" claim is made on the rebuild

---

## 9. What I need from you to enter Phase 2

Reply to §2 (A through G). Once those are answered, I:
1. Update `content-gaps.md` with anything new from your responses
2. Build `tokens.css` per §5
3. Render a sample hero + service card with the tokens
4. Show the side-by-side comparison vs. Foxterra hero (the vibe-check gate)
5. Wait for your token approval before Phase 3 page build

If you want to short-circuit and approve all my recommendations as-is (honest geo, client-type-first IA, navy accent, Fraunces+Inter, all six differentiators on the v1 list), say so and I'll proceed.
