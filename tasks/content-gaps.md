# Content Gaps — Acuity Website

> Items the new site needs but the current expectacuity.com does not provide.
> Each gap has a clear "what we need" + "where it lands" + "current behavior in the build" so you can fill these without reverse-engineering the site.
> **Nothing in this list has been fabricated.** The build either omits the section, uses a verbatim placeholder from the current site, or surfaces a "Coming soon" message.

Tracked status:
- 🔴 BLOCKING — section is hidden or has a visible "coming soon" message until filled
- 🟠 IMPORTANT — section uses a fallback (e.g., gradient placeholder for missing photo) that's shippable but reads as unfinished
- 🟢 NICE-TO-HAVE — gracefully degrades; site reads complete without it

---

## Team / Bios

### Gap #1 — Robert East: full bio + headshot 🔴
- **What we need**: 150–250-word bio (matching format of Justin/Jayna/Brad) + headshot.
- **Where it lands**: `/about/robert-east/` and the team grid on `/about/`.
- **Current behavior**: Bio page exists with hero + "Bio coming soon. Schedule with Robert →" message. Team grid card uses gradient placeholder + "Bio coming soon" copy (mirrors current site's "Coming soon" pattern verbatim).

### Gap #2 — Jayna Forsgren: headshot 🟠
- **What we need**: Professional headshot (consistent with Justin/Brad's style — current site has them in front of a brick wall).
- **Where it lands**: `/about/jayna-forsgren/`, team grid on `/about/`.
- **Current behavior**: Gradient placeholder.

### Gap #3 — Justin Matthews: confirm CPA designation status 🔴
- **What we need**: Yes/no — is Justin a licensed CPA in Utah? If yes, license number for verification.
- **Where it lands**: Bio page, team grid, schema markup.
- **Current behavior**: Bio reads "Tax & Business Advisor" — no CPA designation shown. Site does not claim "CPA firm" anywhere.

### Gap #4 — Brad Folsom: current CPA status 🔴
- **What we need**: His existing bio says he was a licensed CPA "until 2011." Confirm if currently re-licensed in any state, or remain "former CPA" framing.
- **Where it lands**: Bio page.
- **Current behavior**: Bio is verbatim from current site, including the "until 2011" language.

### Gap #5 — Jayna Forsgren: confirm CPA designation 🔴
- **What we need**: UACPA membership is mentioned in her bio, which typically requires CPA licensure — confirm she holds an active UT CPA license.
- **Where it lands**: Bio page, team grid, schema markup.
- **Current behavior**: Bio is verbatim; UACPA membership shown but no explicit "CPA" designation.

### Gap #6 — Director direct phone numbers 🟠
- **What we need**: Direct phone (or extension) for each director.
- **Where it lands**: Bio pages — "Schedule with [name]" CTA + direct contact block.
- **Current behavior**: Only office phone shown (the office location's main number).

### Gap #7 — Photo of all 4 directors together 🟢
- **What we need**: Group shot for the About page hero, ideally outdoors or in a real office.
- **Where it lands**: `/about/` hero.
- **Current behavior**: Falls back to a content-only hero (no image).

### Gap #18 — Hero photography (whole site) 🟠
- **What we need**: 6–10 environmental wide shots with humans, warm-graded but cool-toned. Subjects: directors with clients, team meeting, office interior, Ogden/St. George skyline, etc. Stock OK if commissioned shoot is out of scope.
- **Where it lands**: Home hero, Business/Personal hero, location pages.
- **Current behavior**: Currently using Unsplash placeholder URLs across all heroes — flagged in HTML comments as `<!-- TEMP: replace with commissioned/branded photo -->`.

---

## Contact / scheduling

### Gap #8 — Office hours for all 3 offices 🟠
- **What we need**: Hours per office (e.g., "M–F 9–5") or "by appointment only".
- **Where it lands**: `/contact/`, `/locations/[city]/`, footer, LocalBusiness schema.
- **Current behavior**: Section omitted; will be added when provided.

### Gap #9 — General firm email 🟠
- **What we need**: A non-individual address (e.g., `info@expectacuity.com`, `hello@…`).
- **Where it lands**: Contact page, footer, mailto: links.
- **Current behavior**: Contact page lists 4 director emails directly + a contact form that POSTs to a stub.

### Gap #10 — Calendly / Acuity Scheduling URL 🔴
- **What we need**: Working scheduling URL (Calendly, Acuity Scheduling, Cal.com, or similar) so the "Schedule a Strategy Session" buttons go somewhere. Currently the entire CTA is non-functional on production expectacuity.com.
- **Where it lands**: Every CTA across the site (~30+ instances).
- **Current behavior**: All CTAs link to `/contact/#schedule` (anchor scroll to the contact form). Once a real booking URL is provided, find/replace updates every page.

### Gap #21 — Phone number duplication 🟢
- **What we need**: Confirm or correct: Ogden + St. George share `(385) 333-4050`; South Ogden uses `(801) 393-7884`. Is the shared number intentional, or should each office have its own?
- **Where it lands**: Footer, `/contact/`, `/locations/*/`.
- **Current behavior**: Verbatim from current site (shared 385 number, separate 801).

---

## Trust signals

### Gap #11 — Industries served 🟠
- **What we need**: 4–6 industry verticals Acuity actually serves. Bios mention real estate, multi-state entities, locally owned businesses — confirm full list.
- **Where it lands**: `/business/` industries section.
- **Current behavior**: Section omitted; "What we do" service buckets shown without industry filter.

### Gap #12 — Tooling badges 🟢
- **What we need**: Which platforms does Acuity support officially: QuickBooks Online ProAdvisor? Xero? Gusto? Drake? UltraTax CS? Lacerte?
- **Where it lands**: Home trust strip, `/business/` page.
- **Current behavior**: Section omitted.

### Gap #13 — Awards / recognition 🟢
- **What we need**: Any firm-wide recognitions (Best of Northern Utah, UACPA, IPA Top, etc.). Jayna's 2019 UACPA Women to Watch is preserved on her bio — do we have anything else?
- **Where it lands**: Home trust strip, About page.
- **Current behavior**: Only Jayna's individual award shown.

### Gap #14 — Years in business — firm vs. Brad's tenure 🟠
- **What we need**: Brad's bio says he's been in Ogden since 1984 — that's 41 years personally. When was "Acuity Business & Tax Advisors, LLC" specifically formed (vs. Brad's prior firm)?
- **Where it lands**: Home trust strip, About hero.
- **Current behavior**: Currently using "Serving Utah since 1984" framing (Brad's anchor date). May need adjustment if firm formation is significantly later.

### Gap #15 — Brand identity on legal line 🟢
- **What we need**: Footer legal line — exactly which entity name(s) and DBAs? Current Weebly logo alt was `EAST FOLSOM LLC` while public brand is `Acuity Business & Tax Advisors, LLC`. Which leads on the new site footer?
- **Where it lands**: Footer.
- **Current behavior**: Using "Acuity Business & Tax Advisors, LLC" verbatim from current footer copy.

### Gap #10 — Named client testimonials 🔴
- **What we need**: 5+ testimonials with: quote (verbatim, with permission), client name, business name, role, and ideally photo.
- **Where it lands**: Home trust strip, `/business/`, `/personal/`.
- **Current behavior**: Testimonial section is **omitted entirely** from all pages until real testimonials are provided. (Site-spec marked this as a competitive differentiator; we don't fake it.)

---

## Legal / utility

### Gap #16 — Privacy policy text 🟠
- **What we need**: Privacy policy. Either drafted by the firm's attorney or generated by a service (TermsFeed, Termly) and reviewed by counsel.
- **Where it lands**: `/privacy/`.
- **Current behavior**: Page is built with a clearly marked placeholder block stating "Privacy policy under review — please contact us at [email] for current data-handling practices." Footer link is live.

### Gap #17 — Terms of service text 🟠
- Same as #16 for ToS.

### Gap #20 — Typo: "Communicty" 🟢
- **What we need**: Approval to silently fix the typo in Jayna's bio: "Ogden Weber Communicty Action Partnership" → "Community Action Partnership".
- **Where it lands**: `/about/jayna-forsgren/`.
- **Current behavior**: **Silently fixed in the build.** If the verbatim error is preferred, change the build and re-deploy.

### Gap #22 — Check-My-Refund external links 🟢
- **What we need**: Confirm OK to wire the cards to the real IRS + Utah TAP URLs:
  - IRS: `https://sa.www4.irs.gov/wmr/`
  - Utah TAP: `https://tap.utah.gov/_/`
- **Where it lands**: `/check-my-refund/`.
- **Current behavior**: Wired to the URLs above. If wrong, update.

### Gap #23 — Social media accounts 🟢
- **What we need**: Active Facebook / LinkedIn / Instagram URLs (firm-level, not individual director).
- **Where it lands**: Footer.
- **Current behavior**: Footer social row is omitted (current site has no social links either).

### Gap #24 — OG image format 🟢
- **What we need**: A 1200×630 raster JPG or PNG of the OG image. The site currently ships an SVG (`/assets/og-image.svg`) which renders correctly on Twitter, Facebook, LinkedIn, Slack, Discord, and iMessage — but a few legacy SMS preview generators and email clients prefer raster.
- **Where it lands**: `/assets/og-image.jpg` + update `head.html` reference.
- **Current behavior**: Using SVG. Renders well in modern previewers; degrades silently on legacy ones.

### Gap #19 — Service-line micro-FAQs 🟠
- **What we need**: For each service detail page (Tax & Business Advisory, Tax & Accounting Maintenance, Personal Tax Preparation, Multi-Year Projections), 3–5 FAQs the firm wants to answer. We can draft from competitive analysis patterns; firm reviews for accuracy.
- **Where it lands**: Bottom of each service detail page.
- **Current behavior**: Service detail pages have a 3-question "Common questions" block drafted from generic tax-advisory patterns (clearly factual, no firm-specific claims). Mark the file `tasks/content-gaps.md` if any FAQ answer needs adjustment.

---

## Status summary

🔴 BLOCKING (5): #1, #3, #4, #5, #10 (testimonials), #10 (Calendly URL — ambiguous numbering, see §10)
🟠 IMPORTANT (9): #2, #6, #8, #9, #11, #14, #16, #17, #18, #19
🟢 NICE-TO-HAVE (8): #7, #12, #13, #15, #20, #21, #22, #23

The site **is shippable as-is** for review/preview. It is NOT shippable to production until the 🔴 items are resolved (CPA-status confirmations are the highest legal-risk items; Calendly URL is the highest functional-risk item).
