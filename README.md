# Identione — website

Marketing site for Identione. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · ogl.

Framework mirrors the `disruptiveventures-web` setup: locale-prefixed routing (`/en`, `/sv`), edge locale detection, typed i18n dictionaries, a dark "aurora" theme scope, and a 12-column page grid.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en (or /sv by geo/cookie)
npm run build
```

## Structure

```
src/
  proxy.ts                     locale detection + redirect (Next 16 middleware)
  app/
    globals.css                Identione design tokens + utility classes
    icon.svg                   favicon (placeholder mark)
    [locale]/
      layout.tsx               html shell, fonts, metadata, Header/Footer
      page.tsx                 home (placeholder hero)
      contact/page.tsx
      privacy/page.tsx
  components/                  Header, Footer, LocaleSwitcher
  lib/
    brand.ts                   static company facts (⚠ placeholders — confirm)
    i18n/                      types, routes, provider, dictionaries (en/sv)
public/
  logos/                       identione logo PNG/PDF (light + black)
  symbol.svg                   placeholder brandmark
  fonts/                       drop Safiro-Medium.woff2 here when licensed
brand/                         source brand material (guidelines, deck, docx)
```

## Brand tokens (`globals.css`)

Northern-lights palette: Identione Black `#13132D`, Dark Purple `#1F143C`, Warm
Purple `#3B0A7B`, Identione Blue `#1A61F9`, Light Grey `#EDF2F8`. Light theme is
default; `.theme-dark` scope flips surfaces to the dark aurora environment.

## Known follow-ups

- **Safiro** (primary display face) is licensed and not bundled. Headlines fall
  back to Inter until `public/fonts/Safiro-Medium.woff2` is added (`@font-face`
  is already wired in `globals.css`).
- **Logos** are PNG/PDF only — replace with SVG exports when available
  (`icon.svg` / `public/symbol.svg` are hand-drawn placeholders of the mark).
- **`src/lib/brand.ts`** contact/legal details are placeholders from the deck.
- Page sections (Hero → CTA) are stubs; build from the content brief.
```
