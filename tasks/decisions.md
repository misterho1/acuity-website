# Decisions Log — Acuity Website

> Source-of-truth for choices made during build. Append-only. Each decision references the moment in the conversation it was confirmed.

## 2026-05-05 — Project setup

| # | Decision | Status |
|---|---|---|
| D1 | Local project path: `C:/Users/goho2/projects/acuity-website/` | confirmed |
| D2 | GitHub repo: `misterho1/acuity-website` (user said "Misterho" — actual authed account is `misterho1`) | confirmed + created |
| D3 | Domain: keep `expectacuity.com` | confirmed |
| D4 | Cloudflare account: existing (same as exclusiveut, mtnviewlandscapingutah) | confirmed |
| D5 | Build approach: tiny Node include script for shared partials | confirmed |
| D6 | `lessons.md` source-of-truth: local `tasks/lessons.md` (Drive copy is empty) | confirmed |

## 2026-05-05 — Phase 1 GATE (site-spec approval)

| # | Decision | Status |
|---|---|---|
| D7 | Geo strategy: **(a) Honest geo** — primary location pages for Ogden, South Ogden, St. George; secondary "we serve" pages for SLC + Park City | confirmed via "improve all" |
| D8 | IA: **(b) Client-type-first** — top nav `Business / Personal / About / Insights` + Schedule CTA | confirmed via "improve all" |
| D9 | Color accent: **deep navy `#0E3A5F`** (not forest green) | confirmed via "improve all" |
| D10 | Typography: **Fraunces (display) + Inter (eyebrow + body)** | confirmed via "improve all" |
| D11 | Differentiators in v1: inline Calendly, 24-hour SLA, deep team bios, named testimonials, tooling badges, homepage FAQ | confirmed via "improve all" |
| D12 | **CPA-claim safety rule**: do NOT use "CPA firm" wording or CPA designation badges anywhere on the site until per-director CPA status is confirmed by the user. The current site does not make CPA-firm claims; we mirror that. Use "tax & business advisors" and "accounting firm" branding (both verbatim from current site). Logged as content gap #3, #4, #5 in site-spec.md §7. | self-imposed, awaiting user override |
| D13 | Pricing transparency page: SKIP in v1 (only Dark Horse does it; misaligns with bespoke advisory positioning) | confirmed via "improve all" |
| D14 | Calculators + lead-magnet PDF: SKIP in v1 (deferred to v2) | confirmed via "improve all" |

## Decisions still pending user input
(see content-gaps.md once created in Phase 3)
