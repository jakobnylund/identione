# Identione — Website Content & Build Brief

> **For Claude Code.** This is the complete content and design specification for the new Identione marketing website. Build the site from this document. Every section below contains finished copy in **English (EN)** and **Swedish (SV)**, plus the design system and technical recommendations.

---

## 0. The single most important instruction

The website's job is **not to explain Identione**. Its job is to make the visitor *rethink what identity is*.

When a visitor leaves the site, they should not think *"Now I understand the product."* They should think:

> *"I've never thought about identity this way before — and I want to know more."*

Curiosity over comprehension. Perspective over features. Why over how.

**The Litmus Test** — apply to every sentence before it ships:
> *Does this help the customer understand the problem, or does it help a competitor understand our solution?* If it primarily helps the competitor, rewrite or remove it.

**Never reveal on the public site:** internal architecture, the attribute model, PKI design, offline strategy, passport-based origin identification, Open Banking plans, integration principles, future product strategy, or any concrete technical implementation. Those belong in sales meetings and demos — not the website.

---

## 1. Brand foundation

**What Identione is (internal framing — do not state this literally on the site):** a company redefining how identity works. Not a new BankID. Not a new login system. Not a PropTech company. A new way of understanding identity itself.

**Core philosophy:**
- Identity isn't a card.
- Identity isn't a personal-ID number.
- Identity isn't even static.
- Identity is **context**. What the world needs to know about you changes with the situation.
- Therefore technology should adapt to the person — not the person to the technology.

**Mission (for About copy):** to give identity a fresh start — building for a world where trust moves with people, not with documents or isolated systems.

**Messages we like to reinforce:**
- Identity should adapt to people.
- Context matters.
- Trust should follow the person.
- The world has changed. Identity hasn't.
- Every organization is defined by the people who move through it.
- Identity isn't a document. It's context.

**Tone:** Visionary · Intelligent · Calm · Premium · Human · Trustworthy · Forward-looking — and a little mysterious.
**Never:** salesy · loud · technically boastful · over-explanatory.

**Guiding stars (ordering principle for the whole site):**
1. Show problems before solutions.
2. Show consequences before features.
3. Tell *why* before *how*.
4. Inspire before informing.
5. Build trust before understanding.

---

## 2. Site structure

A single-page scroll site (one route) with anchored navigation, plus a contact action. No separate industry/vertical pages at launch.

```
Header (logo + minimal nav + CTA)
1. Hero
2. The Problem
3. Our Perspective
4. Imagine If
5. Built Around People
6. Where It Matters
7. About Identione
8. Call To Action
Footer
```

Navigation labels (EN): Perspective · People · About · Contact
Navigation labels (SV): Perspektiv · Människor · Om oss · Kontakt

Language switch: EN / SV toggle in the header, top-right. Default to English; persist choice.

---

## 3. Section-by-section content

Each section gives **Purpose** (intent, not for display), then finished **EN** and **SV** copy.

### Section 1 — Hero

**Purpose:** Immediately challenge the visitor's assumptions. No features. Introduce a new perspective.

**EN**
- Headline: **Identity should adapt to your world. Not the other way around.**
- Supporting text: The world has changed. People move between organizations, relationships and responsibilities every day. Yet most identity systems still treat them as if they were static. We believe it's time to rethink identity.
- CTA button: **Discover our perspective**
- *(Alternative headline if a shorter one is needed: "The Future of Identity — On Your Terms.")*

**SV**
- Rubrik: **Identitet borde anpassa sig efter din värld. Inte tvärtom.**
- Brödtext: Världen har förändrats. Människor rör sig mellan organisationer, relationer och ansvar varje dag. Ändå behandlar de flesta identitetssystem dem som om de vore statiska. Vi tror att det är dags att tänka om kring identitet.
- CTA-knapp: **Upptäck vårt perspektiv**
- *(Alternativ rubrik: "Framtidens identitet — på dina villkor.")*

### Section 2 — The Problem

**Purpose:** Make the visitor question today's model. No competitors named, no technical comparisons. Use reflective questions.

**EN**
- Reflective questions (display as a sequence, e.g. one per line or revealed on scroll):
  - Are you the same person at work as you are at home?
  - Is your driver's license the most important thing about you when you enter your office?
  - Should your identity be defined by a number — or by the situation you're in?
- Closing statement (emphasized): **The problem isn't that today's systems are digital. The problem is that they still think analog.**

**SV**
- Reflekterande frågor:
  - Är du samma person på jobbet som du är hemma?
  - Är ditt körkort det viktigaste med dig när du kliver in på ditt kontor?
  - Borde din identitet definieras av ett nummer — eller av situationen du befinner dig i?
- Avslutande mening (betonad): **Problemet är inte att dagens system är digitala. Problemet är att de fortfarande tänker analogt.**

### Section 3 — Our Perspective

**Purpose:** Present the philosophy without revealing implementation.

**EN**
- Headline: **Identity isn't a document. It's context.**
- Body: We believe identity is fluid. What matters about you changes depending on where you are, who you're interacting with and what you're trying to achieve. The digital world shouldn't force people into rigid definitions. Technology should adapt to reality — not the other way around.

**SV**
- Rubrik: **Identitet är inte ett dokument. Det är sammanhang.**
- Brödtext: Vi tror att identitet är föränderlig. Det som är viktigt om dig förändras beroende på var du är, vem du möter och vad du försöker uppnå. Den digitala världen borde inte tvinga in människor i rigida definitioner. Tekniken borde anpassa sig efter verkligheten — inte tvärtom.

### Section 4 — Imagine If

**Purpose:** Show outcomes instead of features. No explanations — only possibilities. Render as cards.

**EN** (four cards)
- Imagine entering a building without worrying about keys.
- Imagine proving exactly what matters — and nothing more.
- Imagine onboarding international talent in minutes instead of weeks.
- Imagine trust following the person instead of staying inside disconnected systems.

**SV** (fyra kort)
- Tänk dig att kliva in i en byggnad utan att tänka på nycklar.
- Tänk dig att bevisa exakt det som spelar roll — och inget mer.
- Tänk dig att introducera internationell kompetens på minuter istället för veckor.
- Tänk dig att förtroendet följer personen istället för att stanna kvar i osammanhängande system.

### Section 5 — Built Around People

**Purpose:** Speak directly to organizations without locking into one industry.

**EN**
- Headline: **Every organization is defined by the people who move through it.**
- Supporting list (display as a rhythmic list): Employees. Contractors. Visitors. Partners. Customers. Temporary staff.
- Line: Every interaction begins with trust. Identity should make that trust effortless.
- Key statement (large, emphasized): **One trusted identity for everyone who enters your organization.**

**SV**
- Rubrik: **Varje organisation definieras av människorna som rör sig genom den.**
- Stödjande lista: Anställda. Entreprenörer. Besökare. Partners. Kunder. Tillfällig personal.
- Mening: Varje möte börjar med förtroende. Identitet borde göra det förtroendet enkelt.
- Nyckelmening (stor, betonad): **En betrodd identitet för alla som kliver in i din organisation.**

### Section 6 — Where It Matters

**Purpose:** Hint at use cases without exposing strategy. Three conceptual cards. **No mention of NFC, PKI, or any technical implementation.**

**EN** (three cards)
- **Workforce** — Help people move securely between digital and physical environments.
- **Visitors** — Create seamless experiences without unnecessary friction.
- **Access** — Build trust from the first interaction to the final doorway.

**SV** (tre kort)
- **Arbetsstyrka** — Hjälp människor att röra sig tryggt mellan digitala och fysiska miljöer.
- **Besökare** — Skapa sömlösa upplevelser utan onödig friktion.
- **Tillträde** — Bygg förtroende från första mötet till sista dörren.

### Section 7 — About Identione

**Purpose:** Humanize the company. Explain motivation, not technology.

**EN**
- Headline: **Identity deserves a fresh start.**
- Body: Identione exists because we believe identity deserves a fresh start. We are building for a world where trust moves with people — not with documents or isolated systems. Our ambition is not simply to improve today's solutions. It's to rethink the foundation they were built upon.

**SV**
- Rubrik: **Identitet förtjänar en nystart.**
- Brödtext: Identione finns för att vi tror att identitet förtjänar en nystart. Vi bygger för en värld där förtroende följer människor — inte dokument eller isolerade system. Vår ambition är inte bara att förbättra dagens lösningar. Den är att tänka om kring grunden de byggdes på.

### Section 8 — Call To Action

**Purpose:** Invite a conversation. Some things are better experienced than explained.

**EN**
- Headline: **Curious? Let's start a conversation.**
- Supporting text: Some things are better experienced than explained. If you'd like to explore how this perspective could apply to your organization, we'd love to talk.
- Button: **Book a conversation** *(or "Get in touch")*

**SV**
- Rubrik: **Nyfiken? Låt oss börja ett samtal.**
- Brödtext: Vissa saker upplevs bättre än de förklaras. Om du vill utforska hur det här perspektivet kan appliceras på din organisation pratar vi gärna.
- Knapp: **Boka ett samtal** *(eller "Hör av dig")*

### Footer

- Logo (white/light version on dark background).
- Tagline line (optional): *Identity, redefined.* / *Identitet, omdefinierad.*
- Contact email: **effe@identione.com**
- Site: **identione.se**
- Address: Turgatan 49, 931 65 Skellefteå, Sweden
- Minimal links: Perspective · People · About · Contact (anchor links)
- Copyright: © Identione [current year]

---

## 4. Design system

### Color palette
Inspired by the northern lights — fluid, ever-changing, unified. Use deep purples/navy as the dominant brand environment with blue as the accent, and generous use of gradients/depth.

| Name | HEX | Role |
|---|---|---|
| Identione Black | `#13132D` | Primary background / dark base |
| Dark Purple | `#1F143C` | Background depth, gradients |
| Warm Purple | `#3B0A7B` | Gradient midtone, accents |
| Identione Blue | `#1A61F9` | Primary accent, CTAs, links, highlights |
| Light Grey | `#EDF2F8` | Light sections, surfaces |
| White | `#FFFFFF` | Text on dark, light backgrounds |

> Suggested usage: lead with a dark, premium environment (Identione Black → Dark Purple → Warm Purple gradients), aurora-like gradient washes for hero and section transitions, Identione Blue for interactive elements, and Light Grey/White breathing-room sections to vary rhythm. Keep it calm and spacious — premium, not busy.

### Typography
- **Primary typeface — Safiro (Medium only):** headlines and large display text only. Strong visual statement.
- **Secondary typeface — Inter:** everything else (body, UI, captions). Weights: Light, Regular (primary body), Medium, Bold, Black — use heavier weights selectively.
- *(If Safiro is unavailable to Claude Code, use a close premium alternative for headlines, e.g. a refined serif/grotesque, and flag it. Inter is freely available via Google Fonts.)*

**Type hierarchy:**
- Headline Large — Inter Medium (or Safiro), 100% line-height, -25 tracking.
- Headline Small — Inter Regular, 110% line-height, -10 tracking.
- Subheadline — Inter Regular, 120% line-height, -5 tracking.
- Body — Inter Regular, 120% line-height, 0 tracking.
- Maintain at least a ~200% size difference between headline and body for clear hierarchy. Fewer sizes = stronger impression.

### Logo
- Assets in the project folder: `identione-logo.png` / `identione-logo.pdf` (primary), `identione-black-logo.png` / `identione-black-logo.pdf` (black version).
- Use the light/primary logo on dark backgrounds; the black logo on light backgrounds.
- Give the logo clear space; never crowd it.

### Art direction — read this carefully

The single biggest risk is that this becomes a **generic, centered-text SaaS template** — the kind of "AI-slop" landing page where every section is a centered headline, a centered paragraph, and three identical centered cards on a flat background. **Do not build that.** If a section looks like it could belong to any startup, redo it.

**The target feel:** premium, deep-tech, intelligent — but *accessible* and human, not cold or intimidating. Think editorial / Swiss design: a confident, visible grid; strong typographic hierarchy; asymmetry and intentional whitespace; restraint.

**Layout principles (Swiss / editorial):**
- **Build on a real grid.** Use a 12-column grid as the structural backbone and let content sit on it deliberately — span columns unevenly, break the grid intentionally for emphasis. The grid should be *felt*, not hidden.
- **Asymmetry over centering.** Default to left-aligned and off-center compositions. Avoid stacking everything down the center axis. Use the grid to place a headline in columns 1–6 and supporting text in columns 8–11, etc.
- **Typography as the hero.** Large, confident Safiro headlines doing the heavy lifting. Dramatic scale contrast between display type and body. Tight tracking on big type. Let type and whitespace carry sections rather than decoration.
- **Editorial details:** thin hairline rules/dividers, small index numbers or labels (e.g. "01 — The Problem"), a baseline-aligned feel, generous and *uneven* margins. Borrow from print layout, not from template galleries.
- **Vary section rhythm.** Each section should have a distinct composition — alternate dark/light environments, full-bleed vs. inset, text-left vs. text-right. No two consecutive sections should share the same layout pattern.
- **Cards (sections 4 & 6):** avoid the identical-3-up-centered-card cliché. Stagger them, vary sizes, place them on the grid asymmetrically, or treat them as an editorial list with strong numbering rather than boxed cards.

**Surface & finish:**
- Aurora-inspired gradients used with restraint — deep, atmospheric backgrounds (Identione Black → Dark Purple → Warm Purple), not rainbow noise. Subtle grain/noise texture can add premium depth on dark surfaces.
- Identione Blue used sparingly as a precise accent, not a flood.
- Generous negative space is a feature, not emptiness.

**Motion:** subtle, slow scroll-reveals (fade/rise, slight parallax on grid elements). Calm and deliberate, never bouncy or flashy. Respect `prefers-reduced-motion`.

**Imagery (if used):** abstract, atmospheric, human-centered. Never stock-photo "tech" clichés, no glowing circuit boards, no padlock/shield/fingerprint icons, no system diagrams.

**Hard "do nots":**
- ❌ Everything centered down the middle.
- ❌ Three identical evenly-spaced cards in a row as the default pattern.
- ❌ Flat single-color sections with a centered headline + subhead + button, repeated.
- ❌ Generic rounded-corner "feature card" look.
- ❌ Emoji icons or default icon-library glyphs as decoration.

Mobile-first and fully responsive — but the grid character must survive on desktop where it has room to breathe.

**Reference vocabulary for Claude Code:** Swiss/International Typographic Style, editorial/magazine layout, deep-tech premium (think the restraint of Linear / Vercel / Stripe-level craft, but darker and more atmospheric), confident asymmetric grids.

---

## 5. Technical recommendations

These are recommendations — Claude Code may adapt, but keep it simple, fast, and easy to host.

- **Framework:** Next.js (App Router) with React + TypeScript. Static-export friendly for simple hosting; good i18n support.
- **Styling:** Tailwind CSS, with the palette above defined as theme tokens (CSS variables / Tailwind config).
- **Internationalization:** Build EN + SV from a single content source. Recommended: a typed content object keyed by locale (e.g. `content.en`, `content.sv`) so copy stays in one place and the language toggle swaps the active locale. Persist the user's choice (localStorage) and respect it on return. If using Next.js routing-based i18n (`/en`, `/sv`), that's fine too — keep the copy centralized regardless.
- **Animation:** Framer Motion (or CSS-only) for scroll-reveals. Keep it subtle.
- **Fonts:** Inter via Google Fonts / `next/font`. Self-host Safiro if licensed; otherwise substitute and flag.
- **Performance & SEO:** static generation, optimized images, semantic HTML, meta tags + Open Graph (use the perspective-driven messaging, not technical copy), proper `lang` attributes per locale.
- **Accessibility:** WCAG AA — sufficient contrast (mind text on dark purple), keyboard-navigable, focus states, reduced-motion support.
- **Hosting:** Vercel or Netlify (static-friendly). Domain: identione.se.
- **Forms:** the CTA can open an email (`mailto:effe@identione.com`) or a lightweight contact form (e.g. Formspree/Netlify Forms) — keep it minimal; no account creation, no friction.

### Content source of truth
Put all copy in one structured file (e.g. `content.ts`) shaped roughly like:

```ts
export const content = {
  en: { hero: { headline, body, cta }, problem: { questions: [], closing }, /* ... */ },
  sv: { hero: { headline, body, cta }, problem: { questions: [], closing }, /* ... */ },
}
```

All strings already exist in Section 3 above — lift them directly.

---

## 6. Communication rules (apply throughout)

**Always talk about:** people · trust · context · movement · relationships · organizations · the future.

**Always avoid (on the public site):** technical architecture · attribute terminology · PKI · passport onboarding · offline technology · Open Banking · system diagrams · detailed product descriptions · implementation details.

**Golden rule:** every sentence should make the visitor more curious — not more informed.

**Final emotional outcome:** the visitor leaves with one realization — *maybe identity has been misunderstood all along.* If that thought stays with them after they close the browser, the website has succeeded.
