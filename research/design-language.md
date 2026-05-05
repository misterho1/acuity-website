# foxterradesign.com — Design Language Extraction

> A system-level read of foxterradesign.com (luxury landscape design firm) for use as a reference when designing a new Utah tax advisory brand. **Nothing in this document is to be copied verbatim.** This describes the design *system* — colour logic, type pairing, spacing rhythm, section pacing — so we can translate the *thinking* into a different brand.

---

## Method

1. Fetched the homepage (`/`), `/our-process/`, and `/about-us/` for analysis.
2. WebFetch on the rendered pages strips `<head>` and inline CSS — so I used the Apify **`apify/beautifulsoup-scraper`** Actor with a custom `pageFunction` to enumerate every `<link rel="stylesheet">` href on each page.
3. The site is built on **WordPress + Elementor Pro** with the **Hello Elementor** parent theme. The real design tokens live in three files:
   - `/wp-content/uploads/elementor/css/post-19.css` — the global Elementor "Kit" (site-wide CSS variables)
   - Per-page generated stylesheets (`post-10751.css` for home, `post-15258.css` for about, `post-8696.css` for process) — these resolve the kit variables into concrete element rules
   - `/wp-content/uploads/elementor/google-fonts/*.css` — webfont declarations
4. Fetched those files individually with WebFetch and parsed the raw CSS for tokens.

All colour hex codes, font sizes, padding values and font-family stacks below are pulled from the actual stylesheet — not eyeballed from screenshots.

---

## 1. Colour tokens

The Elementor Kit (`.elementor-kit-19`) declares the following CSS custom properties. These are the canonical site palette:

| Token (variable name) | Value | Role |
|---|---|---|
| `--e-global-color-primary` | `#000000` | Pure black — overlays, dark fills, primary "anchor" colour |
| `--e-global-color-secondary` | `#54595F` | Cool mid-grey — Elementor default, rarely surfaces in actual UI |
| `--e-global-color-text` | `#000000` | Body text default (overridden per-page) |
| `--e-global-color-accent` | `#C5A47E` | **Warm tan / brass** — the brand accent. Hover states, gold details |
| `--e-global-color-369a159` | `#F8F7F2` | **Warm off-white / paper** — primary background and reverse-text colour |
| `--e-global-color-86bbb41` | `#343332` | **Soft charcoal** (warm-leaning, not pure black) — primary text on light, primary fill behind reverse cards |
| `--e-global-color-603219a` | `#90938B` | Sage / olive grey — secondary surface, header bar fill |
| `--e-global-color-ce8fe85` | `#F8F7F2` | Duplicate of paper — confirmed |
| `--e-global-color-a98e91a` | `#FFFFFF00` | Transparent white — used as button background where the border carries the shape |

**Body background is `#F8F7F2`** (set directly on `.elementor-kit-19`).

### Patterns observed

- **Single accent, single warm-neutral palette.** There is one chromatic colour in the system: the brass `#C5A47E`. Everything else is a neutral. This is a deliberate luxury restraint move — colour is used as punctuation, not as a system.
- **The neutrals are warm.** `#F8F7F2` (paper) is biased yellow; `#343332` is a brown-leaning charcoal, not the slate-cool blacks you'd see in tech/SaaS. `#90938B` is olive-grey. The palette would feel coherent on a hand-thrown ceramic mug — it would feel wrong on a fintech dashboard.
- **High-contrast pair, not high-saturation.** Primary text contrast is `#343332` on `#F8F7F2` ≈ **11.8:1 contrast ratio** (well above WCAG AAA). Reverse pairings put `#F8F7F2` text on `#343332` for the same ratio. They get readability without ever leaving the warm-neutral envelope.
- **Transparent backgrounds + 1px borders** do a lot of work. The "ghost button" pattern uses `#FFFFFF00` (transparent) + a 1px border in the text colour. Background overlays on hero images use `var(--e-global-color-primary)` (pure black) at `--overlay-opacity:0.66`.
- **No semantic colour set** (no defined link/error/success). Links inherit text colour and indicate state via underline animation, not colour shift.

---

## 2. Typography

### Fonts loaded

| Font | Source | Role |
|---|---|---|
| **Blacker Pro Display** | Self-hosted (no Google Fonts entry — likely Adobe Fonts / typekit, also seen as `psfournier-std-grand` via an `!important` override on `h1–h5`) | **Primary display serif.** All hero headings, section titles. |
| **Engravers Gothic Regular** | Self-hosted `.woff2` at `/wp-content/uploads/2023/09/engravers_gothic_regular-webfont.woff2` | **Secondary display.** All-caps eyebrows, button labels, navigation, small section labels |
| **Open Sans** | Google Fonts (full 100–900 weights loaded) | **Body sans.** Paragraph copy, descriptive text, FAQ bodies |
| **Montserrat** | Google Fonts (100–900, italic + normal) | Loaded but minor usage — Elementor Kit lists it as `--e-global-typography-primary-font-family` though concrete elements override to Blacker Pro |
| **Poppins, Roboto** | Google Fonts | Loaded as fallbacks but largely vestigial — Elementor defaults that the kit didn't strip |

**The actual visible system is a 3-font pairing: Blacker Pro Display (display serif) / Engravers Gothic (caps sans) / Open Sans (body sans).** Montserrat/Poppins/Roboto are loaded but barely used.

### Type scale (resolved values from per-page CSS)

| Element | Font | Size | Weight | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| Hero H1 (process page) | Blacker Pro Display | **60px** | 400 | 1.1em | 0.01em | capitalize |
| Section H2 (default) | Blacker Pro Display | **40px** | 400 | 1.1em | 0.01em | capitalize |
| Subsection H3 | Blacker Pro Display | **32px** | 400 | 1.1em | 0.01em | capitalize |
| Mobile H1 (≤1024px) | Blacker Pro Display | 30px | 400 | 1.1em | — | capitalize |
| Mobile H1 (≤767px) | Blacker Pro Display | 26px | 400 | 1.1em | — | capitalize |
| Eyebrow / nav / button label | Engravers Gothic Regular | **18–20px** | 400 | — | 0.01em | **uppercase** |
| Body lead | Open Sans | 20px | 400 | 1.4em | — | none |
| Body default | Open Sans | 16px | 400 | 1.4em | — | none |
| Body small (mobile) | Open Sans | 15px / 14px | 400 | 1.4em | — | none |

### Patterns observed

- **Type scale is roughly 1.5x major.** 60 → 40 → 32 → 20 → 16. Not a strict modular scale — 60→40 is 1.5x, 40→32 is 1.25x, 32→20 is 1.6x, 20→16 is 1.25x. They're picking aesthetic breakpoints, not running a formula.
- **Display weight stays at 400.** Even hero text is regular weight. The serif is doing the work — they don't pile weight on top of weight. This is a confident-restraint tell: bold serifs at large sizes feel shouty, regular weight at 60px feels editorial.
- **Body line-height is tight at 1.4.** Most contemporary body sets at 1.5–1.7. 1.4 reads denser, more print-like. Pairs with the editorial serif.
- **Display line-height is *very* tight at 1.1em.** Headings stack with almost no air — they read as a unified mass, not as individual lines. Common in luxury and architecture brands.
- **Letter-spacing is positive (+0.01em) on display.** Counterintuitive — display sizes usually go negative tracking. Foxterra's +0.01em on Blacker Pro Display gives the serif a slightly looser, calmer feel. Worth keeping for an advisory brand.
- **Eyebrows are uppercase Engravers Gothic** — a thin, condensed-feeling caps font. The contrast with the broad serif is the signature pairing. Acts as a structural marker before each major heading.
- **Capitalisation, not all-caps, on the serif.** Display headings use `text-transform: capitalize` so they read as Title Case. The all-caps treatment is reserved for the small Engravers labels.

---

## 3. Spacing rhythm

### Resolved values from per-page CSS

| Token | Value | Where |
|---|---|---|
| Container max-width (Elementor section-boxed) | **1140px** | global |
| Hero section padding (desktop) | `40px` top/bottom/left/right | per-section override |
| Mid-section padding (desktop) | `50px` top/bottom · `40px` sides | content sections |
| Modal container padding | `80px` desktop / `60px` tablet / `60px 20px` mobile | popups |
| Inner card padding | `20px` all sides | testimonial / step cards |
| Button padding | `14px 40px` (some `14px 44px`, one outlier `14px 14px`) | all CTAs |
| Hero min-height | `600–698px` | viewport-anchoring hero |
| Image content max-width | `1000px`, `400px`, `356px`, `320px`, `260px` | varies per slot |

### Patterns observed

- **The base unit looks like 4px** (everything is 14, 20, 40, 60, 80 — all divisible by 4). 8px is the more visible pulse (20, 40, 80 are all multiples).
- **Section vertical rhythm is 40–80px**, not the 100–160px you see in marketing-heavy SaaS sites. They keep sections closer together — the imagery does the breathing, not the whitespace.
- **Container is 1140px** — narrower than the modern 1200/1280 default. Combined with 40px side padding, content lives in ~1060px of usable width on a 1280px screen. Reads more like a magazine page than a landing page.
- **Inner content is often capped at 400–500px width** even inside the wider container. Hero copy blocks are constrained to keep line lengths editorial (~50–65 characters per line for body, ~6–8 words per line for display).
- **No CSS grid system surfaces.** Layouts are Elementor flex containers with explicit widths, not a 12-column grid. The result reads more "art-directed" than systematic.

---

## 4. Buttons & interactive elements

### Resolved button spec

```
font-family:   "Engravers Gothic Regular", Sans-serif
font-size:     18–20px
text-transform: uppercase
letter-spacing: ~0.01em (inherited)
padding:       14px 40px (vertical 14px, horizontal 40–44px)
border-style:  solid
border-width:  1px (all four sides)
border-radius: 0  ← sharp corners, no rounding anywhere
```

### Variants seen

- **Ghost / outline button (primary pattern):** `background: #FFFFFF00` (transparent), 1px border in the text colour, text in the same colour. Hover: `background-color: #F8F7F233` (paper at ~20% opacity wash). This is the dominant CTA style and it works on both light and dark backgrounds without modification — the same component flips by inheriting context colour.
- **Filled button (secondary):** background fill in `var(--e-global-color-86bbb41)` (charcoal) with light text. Same border-radius, same padding, same uppercase Engravers font.
- **Text/menu link:** Inherits text colour. Underline appears via `transform: scaleX()` animation on hover (custom CSS not in the kit) — the underline draws from one side, doesn't fade in.
- **No "rounded pill" buttons. No drop-shadows. No gradients. No icons-in-buttons by default.** Shape language is rectilinear and hard.

### Patterns observed

- **0px border-radius is the loudest single decision.** In 2025 most consumer/SaaS sites use 6–12px radius. Foxterra's hard 90° corners give every CTA an architectural, almost-stone-cut feel. It's the one rule you'd break first if translating to a friendlier brand.
- **Borders > fills.** The default CTA is outline, not solid. Communicates "premium / considered" rather than "click me / urgent".
- **Hover states are subtle.** A 20% opacity wash, no scale, no shadow lift. Restraint.

---

## 5. Photography & imagery

(Qualitative — not extractable from CSS but observed across page layouts and image slot dimensions in the per-page stylesheets.)

### Colour grading
Imagery is **warm-graded, mid-saturation, mid-contrast**. Greens lean toward olive rather than emerald; water shots are turquoise-lifted but not Caribbean-electric. Highlights aren't blown out and shadows aren't crushed — there's information in both ends. The grading sits comfortably with the warm `#F8F7F2` page background, which means images never feel "pasted on" — the page itself acts like a paper mat the photo is printed on.

### Subject matter framing
**Wide-establishing first, intimate-detail second.** The hero pattern is a wide-angle, full-bleed environmental shot — the entire backyard, not a detail. Inner sections then zoom to material/feature details (a fire feature, a sunken seating area). Humans are largely absent from the imagery — the spaces are presented as objects of contemplation, not as activity-stages. When humans appear, they're in the testimonial section as headshots, sized small.

### Aspect ratios
Hero containers run roughly **16:9 to 21:9** full-bleed. Step-card images cap at `height:400px` with `object-fit:cover` — these are landscape rectangles, not square. There are no 1:1 Instagram-grid square crops anywhere in the system.

### Treatment over imagery
- Heroes carry a `var(--e-global-color-primary)` (pure black) overlay at **0.29–0.66 opacity** to hold text contrast. The overlay is solid black, not a gradient — they don't fade the overlay from top to bottom.
- Text on imagery is always in the paper colour `#F8F7F2`, not pure white — keeps it warm and prevents glare against the warm-graded photos.
- No coloured washes, no duotone, no filter effects. Imagery is presented straight.
- Before/after sliders are present (the Elementor "twentytwenty" plugin is loaded) — used in the portfolio to show transformation.

---

## 6. Section pacing

### Typical page rhythm (synthesised from `/`, `/our-process/`, `/about-us/`)

1. **Hero:** Full-bleed environmental image + ~0.4 black overlay + small constrained copy block (~400px wide) anchored left or centre, with one ghost CTA. Min-height 600–700px.
2. **Mission / value statement:** Text-only block, narrow column, paper background. Acts as a palate cleanser.
3. **Process / what-we-do:** Numbered or stepped sequence. Image-and-text pairs, often **alternating left-right** between phases. Each step gets its own contextual CTA — no waiting until the end.
4. **Proof / testimonials:** Card grid or carousel. Headshots small, quote bodies in Open Sans, attribution in Engravers Gothic caps. Six cards is the default density.
5. **FAQ:** Accordion stack. Toggles open with a 0.34s ease, icon rotates 90° on active. Lets density live without overwhelming.
6. **Final CTA section:** Often a dual-CTA (primary action + secondary "see portfolio" link), sometimes set against a contrasting `#90938B` (sage) or charcoal background to mark "you're at the bottom".
7. **Footer:** Newsletter capture, location list, secondary nav.

### Cadence observations

- **Imagery breathes first.** The hero gives the visual a full screen before any dense copy arrives. Modern SaaS pattern is "headline → 3 value props → CTA" inside the first viewport — Foxterra refuses that, lets the photo carry the first beat alone.
- **CTAs are scattered, not gated.** Every major section has its own CTA. The page never feels like it's saving up — there's always an exit ramp to "book a consultation".
- **Proof comes mid-page, not below the fold of the hero.** They earn the testimonials by walking you through the process first.
- **8–10 sections per page is normal.** This is editorial pacing, not landing-page pacing. The page is long because the pitch is considered, not short because the pitch is punchy.

---

## 7. Visual hierarchy patterns

- **Emphasis is built with size and font-pairing, not colour.** A section title is large + serif + warm-charcoal. The surrounding labels are small + caps + sans + same warm-charcoal. The colour stays constant — the *shape* of the type changes.
- **The serif/sans pairing is allocated by role:** Display serif (Blacker Pro) = aspirational, slow-reading content (headlines, pull quotes). Caps sans (Engravers Gothic) = structural / functional (eyebrows, buttons, nav). Body sans (Open Sans) = utilitarian density (paragraphs, FAQ answers).
- **Whitespace is asymmetrically distributed.** Constrained copy columns (~400px) inside a 1140px container mean there's *more* whitespace than content on a typical row. The luxury signal isn't generous padding between sections — it's generous emptiness *within* sections.
- **Capitalisation does the work of weight.** Display text is Title Case. Functional labels are ALL CAPS. There's no Bold/SemiBold ladder — the rhythm comes from caps vs. mixed-case alternation.
- **Borders and 1px lines as structural devices.** Step cards, info boxes, and buttons all use 1px solid borders (often `var(--e-global-color-86bbb41)` charcoal) instead of fills or shadows. The system is drawn, not stacked.

### Signature moves to flag

- **Oversized timeline/duration callouts** in the process page (e.g., a "3–4 weeks" set in display serif) act as visual punctuation.
- **Before/after sliders** in portfolio for transformation storytelling.
- **Engravers Gothic caps eyebrow over Blacker Pro serif headline** is the single most-repeated typographic pattern on the site. It's the visual mnemonic.
- **Hard 0px corners + 1px borders + warm neutrals** is the look. None of the three would be the same brand without the other two.

---

## 8. Translation guidance — what to keep, what to swap for a Utah tax advisory

This site sells a $200K+ luxury lifestyle product. A tax advisory firm sells trust, precision, and longevity. Some of the system translates directly; some would actively undermine the new brand.

- **KEEP the contrast logic, swap the temperature.** The "single accent + warm-paper neutral + warm-charcoal text" structure is gold for advisory work — restrained, considered, premium. But **drop the brass tan and the olive sage** — those read as residential/hospitality. Replace the accent with a deep navy or forest green; replace the warm `#F8F7F2` paper with a cooler near-white (e.g. `#F7F8F9` or `#FAFAFA`); replace the warm charcoal `#343332` with a slate `#1F2933` or `#222831`. Same *logic*, finance-appropriate temperature.
- **KEEP the serif/caps-sans/body-sans triad, swap the specific fonts.** Blacker Pro Display + Engravers Gothic is a hospitality pairing — it belongs on a hotel brochure. For tax advisory, swap the serif to something that reads competent and modern-classical (e.g. **Tiempos Headline**, **GT Sectra**, **Source Serif**, or free alternatives like **Fraunces** at a tighter optical size). Swap Engravers Gothic for a cleaner geometric caps sans (e.g. **Inter** or **GT America** at uppercase + tracking, or free **Manrope**). Keep Open Sans or upgrade to **Inter** for body — more legible at small sizes than Open Sans for numbers and tables.
- **KEEP the 0px-corner / 1px-border architecture if you want to feel "established firm."** Sharp corners read as serious, institutional, considered. They're already used by firms like Sullivan & Cromwell, Wachtell, McKinsey. **Don't soften them to 6–8px** unless the firm wants to feel like a startup-friendly boutique — at which point, 4px is the smallest you should go.
- **DROP the editorial pacing — at least partially.** Foxterra's 8–10 long sections work because the product is aspirational and emotional. A tax advisory site should let visitors find "What we do / Who we work with / How to start" inside the first scroll. Keep the imagery-leads-first hero, but cut the FAQ-stack-plus-process-stack-plus-testimonial-grid-plus-newsletter pattern down to ~5 sections.
- **DROP the "human-absent imagery."** Foxterra can show empty backyards because the empty backyard *is* the product. A tax advisory firm sells the people doing the work. Imagery should foreground humans — the advisor team, clients in their environments — graded the same way (warm, mid-contrast, environmental wide shots over staged headshots) but with people present.

---

## Reference files (for follow-up)

- Global kit: `https://foxterradesign.com/wp-content/uploads/elementor/css/post-19.css`
- Homepage kit-resolved: `https://foxterradesign.com/wp-content/uploads/elementor/css/post-10751.css`
- About page: `https://foxterradesign.com/wp-content/uploads/elementor/css/post-15258.css`
- Process page: `https://foxterradesign.com/wp-content/uploads/elementor/css/post-8696.css`
- Header template: `https://foxterradesign.com/wp-content/uploads/elementor/css/post-8183.css`
