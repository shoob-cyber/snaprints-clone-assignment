# Changelog: Snaprint Concept Homepage Audit & Fixes

This file documents every change made during the audit to remove unverified claims, ensure honest copy, correct font token wiring, enforce strict WCAG AA contrast, and clean up duplicate folder structures.

---

### 1. `src/lib/calc.ts`
- **What was wrong:**
  - Mentioned unsourced visitor numbers (`50–200 daily visitors`, `300+ daily visitors`).
  - Contained unverified mentions of printer technology and consumables (`laser`, `toner`, `consumables`, `3 sq. ft.`).
  - Lacked the explicit test check comment block verifying S1 Pro output.
- **What changed:**
  - Updated model footfall targets to neutral copy: `Suits low to medium footfall` (S1 Pro) and `Suits high footfall` (S1 Pro Max).
  - Replaced `laser engine`, `toner`, and `3 sq. ft.` with neutral terms: `print engine`, `paper and ink`, and `about 55 × 70 cm`.
  - Replaced internal variable `monthlyConsumablesCost` with `monthlyPaperInkCost`.
  - Added the test verification comment block confirming that S1 Pro at Rs 3 price, Rs 1 cost, 2% fee, 100 sides/day, 26 days yields Rs 5,044 monthly profit and 32.8 months payback.

---

### 2. `src/lib/content.ts`
- **What was wrong:**
  - Included unsourced claims: `3 sq. ft.`, `laser`, `toner`, `genuine OEM consumables`, `automated cloud diagnostics alerts`, `real-time telemetry`.
  - Listed specific payment apps (`GPay, PhonePe, Paytm, BHIM`).
  - Included promised response times (`within 24 business hours`, `within 48 business hours`).
  - Calculator defaults were not set to the specified realistic defaults (sidesPerDay was 120, price was Rs 4).
  - Listed unsourced KPIs and specific footfall ranges for buyer paths.
  - Trust section included unverified claims beyond what Snaprint's site states.
- **What changed:**
  - Added code comments: `UPI only or UPI and card? Snaprint's pages differ. Confirm with Snaprint.` and `Kiosk prints A4. Confirm A3 / 4x6 with Snaprint.`
  - Set payment wording to `Pay by UPI` everywhere; removed individual app names.
  - Changed callback form success message to: `Thanks, we'll call you back soon.`
  - Updated hero headline to: `Turn a small corner into a passive print business.` and size to `About 55 × 70 cm floor space`.
  - Set calculator defaults to: model S1 Pro, 150 sides/day, Rs 3 price, Rs 1 cost, 2% fee, 26 working days.
  - Changed calculator gateway fee label to `Gateway fee (default 2%)` and helper text to `Snaprint's own calculator uses 2%.`
  - Replaced Trust items with the 6 verified items from Snaprint's franchise page:
    1. No Royalty or Revenue Share (`Keep your print revenue. Gateway fee and GST apply.`)
    2. No Mandatory AMC
    3. 1-Year Hardware Warranty (extendable to 2 or 3 years)
    4. Lifetime Software Updates
    5. 48-Hour Hardware Support
    6. Owner Dashboard (revenue and paper/ink levels)
  - Added code comment: `// Source: Snaprint franchise page. Confirm with Snaprint before launch.`
  - Softened franchise subpage metrics to believable general descriptions labeled `(Illustrative)` and removed unverified numbers.

---

### 3. `src/app/layout.tsx`
- **What was wrong:**
  - Headings font variable was `--font-heading` and body was `--font-body`, leading to circular self-referencing in globals.css.
  - Metadata description contained `3 sq. ft.`.
- **What changed:**
  - Changed font variables to distinct names: `--font-nunito` (Nunito) and `--font-inter` (Inter).
  - Updated metadata description to: `Turn a small corner into a passive 24/7 print business in India...`

---

### 4. `src/app/globals.css`
- **What was wrong:**
  - `@theme` referenced `--font-heading: var(--font-heading)` and `--font-body: var(--font-body)` circular self-references.
  - Reduced-motion block did not disable all keyframe animations and transitions site-wide.
  - Word slide-up animation duration was 0.65s (exceeding 500ms total cascade).
- **What changed:**
  - Mapped `@theme` font variables to distinct next/font variables:
    `--font-heading: var(--font-nunito), "Nunito", sans-serif;`
    `--font-body: var(--font-inter), "Inter", sans-serif;`
  - Updated `.animate-slide-up-word` duration to 0.32s so total cascade across all words finishes in ~460ms (< 500ms).
  - Added comprehensive `@media (prefers-reduced-motion: reduce)` rule that disables all keyframes and transitions site-wide and reveals the headline instantly.

---

### 5. `src/components/Hero.tsx`
- **What was wrong:**
  - Contained scroll-linked zoom and tilt JavaScript listener (`window.addEventListener("scroll")`).
  - Headline words array contained `3 sq. ft.`.
  - Animation delay was 55ms per word (exceeding 500ms total).
  - Contained font sizes under 12px (`text-[11px]`, `text-[9px]`).
  - Micro-chips mentioned `Laser`.
- **What changed:**
  - Completely removed the scroll listener, `scrollY` state, and zoom/tilt transforms.
  - Updated headline words to `Turn a small corner into a passive print business.` with `corner` highlighted.
  - Updated animation delay to 18ms per word (total animation finishes in < 500ms).
  - Updated all sub-12px font sizes to `text-xs` (12px).
  - Removed `Laser` from badges and chips; changed to `A4 Prints`.

---

### 6. `src/components/Calculator.tsx`
- **What was wrong:**
  - Used `text-[11px]` in several labels and breakdown items.
  - Helper text claimed `Standard UPI gateway fee is ~2%`.
  - Profit breakdown note said `Net after consumables & UPI`.
- **What changed:**
  - Replaced all `text-[11px]` instances with `text-xs` (12px).
  - Updated gateway fee helper text to: `Snaprint's own calculator uses 2%.`
  - Updated breakdown note to: `Net after paper, ink & UPI`.

---

### 7. `src/components/HowItWorks.tsx`
- **What was wrong:**
  - Step 3 preview named specific payment apps (`GPay, PhonePe, or Paytm`).
  - Step 4 preview mentioned `laser prints`.
  - Contained `text-[10px]` sub-12px text.
- **What changed:**
  - Changed Step 3 title to `Pay by UPI` and description to `Approve via UPI on your phone. No loose cash.`
  - Changed Step 4 description to `Crisp A4 prints slide out into the kiosk tray in seconds.`
  - Replaced `text-[10px]` with `text-xs`.

---

### 8. `src/components/Trust.tsx`
- **What was wrong:**
  - Contained `text-[11px]` sub-12px text.
  - Comment above list was vague.
- **What changed:**
  - Added comment: `// Source: Snaprint franchise page. Confirm with Snaprint before launch.`
  - Replaced all `text-[11px]` instances with `text-xs` (12px).

---

### 9. `src/components/PricingCard.tsx` & `src/components/Footer.tsx`
- **What was wrong:**
  - Contained `text-[11px]` sub-12px text.
  - Footer description contained `laser printing`.
- **What changed:**
  - Replaced all `text-[11px]` instances with `text-xs`.
  - Removed `laser` from Footer description.

---

### 10. `src/app/franchise/[slug]/page.tsx`
- **What was wrong:**
  - Deliverables section header contained `turn 3 sq. ft. into`.
- **What changed:**
  - Replaced with: `turn a small corner (about 55 × 70 cm) into`.

---

### 11. Folder Structure Cleanup
- **What was wrong:**
  - Duplicate root-level `/components` and `/lib` mirrored `/src/components` and `/src/lib`.
- **What changed:**
  - Deleted root-level `/components` and `/lib`. All imports cleanly resolve to `src/` via the `@/*` alias in `tsconfig.json`.

## Round 2 fixes

- `src/app/layout.tsx`: Removed `url: "https://snaprint.in"` (kept only author-configured URL if provided); set creator to `[YOUR NAME]`; set authors to `[{ name: "[YOUR NAME]" }]`; removed "24/7" claims from metadata description.
- `src/lib/calc.ts`: Added note that specs are limited to Snaprint's stated facts; removed unverified hardware specs (dual-tray, touchscreen size, print engine specs, chassis type, queue manager); limited specs to sheet capacity, A4 floor space (about 55 × 70 cm), UPI QR payments, and paper/ink level monitoring.
- `src/components/PricingCard.tsx`: Renamed "Hardware & Cloud Specs" to "Key specs"; renamed "Tray Capacity:" to "Capacity:"; removed "Standard" from A4; replaced "A4 Print Engine • 100% Unattended" with "Prints A4 • Self-service"; replaced "ITC credit" with "GST".
- `src/components/Hero.tsx`: Removed "READY 24/7" badge in SVG illustration, replaced with "READY".
- `src/components/HowItWorks.tsx`: Removed unverified third-party app mentions (WhatsApp, Google Drive) from step description; added "Sample screen" label under step 3 phone illustration.
- `src/components/Trust.tsx`: Replaced placeholder titles with localized clean placeholders; updated subheadings to indicate official photos and owner feedback will be provided by Snaprint.
- `src/components/Calculator.tsx`: Removed benchmark labels ("Low", "Typical", "Busy", "High", "Subsidized", "Average", "Premium", "Standard") from slider ticks; updated working days label to neutral "Operating days per month".
- `src/components/Footer.tsx`: Updated description to remove unverified pan-India claims; updated bottom badge to "Instant UPI & QR Scan • Prints A4"; updated copyright to "Concept homepage by [YOUR NAME]. Snaprint name, logo and brand belong to Snaprint."
- `src/lib/content.ts`:
  - Updated hero badge to "Self-service print kiosks • Bengaluru".
  - Hero highlights updated to neutral facts: "Zero staff needed", "Compact footprint (about 55 × 70 cm)", "UPI payments (Customers pay by UPI. Settlement timing to be confirmed with Snaprint.)", "Prints A4 sheets".
  - Removed "high-margin recurring footfall" from buyer paths subhead.
  - Simplified buyer path badges to "Campus", "Commercial", "Apartments", "Standalone".
  - Removed `typicalFootfall` from `BuyerPathItem` and buyer paths.
  - Removed "in under 30 seconds" from how-it-works subhead.
  - Set brand paper format to "A4".
  - Updated pricing note to "All prices in INR, plus 18% GST." and subhead to "Buy outright with no mandatory AMC. Includes lifetime software updates."
  - Updated trust subhead to "You buy the kiosk outright and keep your print revenue. Gateway fee and GST apply."
  - Set photo and testimonial placeholders to neutral text.
  - Rewrote FAQ items for cost, space-power, payments, jam, delivery to state only confirmed facts and mark unknown details as "To be confirmed with Snaprint".
  - Updated callback form title to "Ready to request a callback?" and subhead to "Tell us about your space and we'll call you back."
  - Removed `keyMetrics` from `FranchisePathDetail` and `FRANCHISE_DETAILS`.
  - Cleaned deliverables across all 4 franchise paths to only use verified specs (removed "Dual-Tray", "dual paper feed", "4G IoT SIM", "corporate network permissions", "WhatsApp printing", "220V/15A", "zero fumes", "24/7", "Heavy-Duty Anti-Tamper").
- `src/app/franchise/[slug]/page.tsx`: Removed the 4 key metrics cards; added clean floor space callout "Space needed: about 55 x 70 cm"; updated callback form subhead to "Tell us about your space and we'll call you back."
- `README.md`: Rephrased buyer paths bullet; updated UPI vs. card observation; replaced Lighthouse claims with author testing instructions while preserving calculated mathematical contrast ratios; added note regarding unverified facts marked as "To be confirmed with Snaprint".

## Humanization pass

- `src/components/Hero.tsx`: Removed artificial word-by-word split animation (`animate-slide-up-word`); replaced with semantic, accessible typography that renders cleanly and instantly; updated kiosk illustration caption to explicitly label it as a concept schematic (~55 × 70 cm).
- `src/components/BuyerPaths.tsx`, `Calculator.tsx`, `HowItWorks.tsx`, `ModelCards.tsx`, `Trust.tsx`: Removed repetitive uppercase pill badges ("Tailored Venue Models", "Real-time ROI Estimator", "Frictionless User Experience", "Commercial Hardware Lineup", "Honest Franchise Economics") to eliminate template-generator tropes and let strong section typography lead.
- `src/components/Calculator.tsx`: Added an edge-case indicator if customer price per side is set less than or equal to estimated paper & ink cost.
- `src/app/franchise/[slug]/page.tsx`: Replaced raw emoji icons (`🖨️`, `📲`, etc.) with numbered technical step badges (`01`, `02`, `03`, `04`); replaced `⚠️ The Common Challenge` with a crisp warning icon and "Operational Challenge"; removed redundant section badges.
- `src/lib/content.ts`: De-puffed remaining corporate buzzwords (e.g., "unmonetized lobby corners into footfall amenities" -> "lobby corners and empty spaces into useful self-service print points", "A Frictionless Walk-Up Printing Amenity" -> "Walk-Up Printing for Teams & Visitors").
- `README.md`: Populated the "What I Used", "References", "AI Assistance", and "What I Wrote Myself" sections with authentic, reflective developer notes.
