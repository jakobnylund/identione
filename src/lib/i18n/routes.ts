import { LOCALES, isLocale, type Locale } from "./types";

// Logical route keys → per-locale slug segments.
// Slug is everything after `/{locale}/`. Empty string = home.
// Add new pages here as content lands.
export const routes = {
  home: { en: "", sv: "" },
  privacy: { en: "privacy", sv: "integritet" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export function localizedHref(key: RouteKey, locale: Locale): string {
  const slug = routes[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

// Translate the path so that a /{locale}/<slug> URL becomes its equivalent in
// the next locale. Used by the LocaleSwitcher so language flips don't 404 on
// localized slugs (e.g. /sv/integritet → /en/privacy).
//
// Strategy: strip the locale prefix, look up which route key matches the
// remaining slug in *any* locale, then re-emit using `next`. If we can't find
// a match (unknown / future route), keep the slug as-is and just swap prefix.
export function translatePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}`;

  const maybeLocale = segments[0];
  const hadLocale = isLocale(maybeLocale);
  const rest = hadLocale ? segments.slice(1) : segments;

  if (rest.length === 0) return `/${next}`;

  const firstSlug = rest[0];
  for (const key of Object.keys(routes) as RouteKey[]) {
    const slugs = routes[key];
    for (const loc of LOCALES) {
      if (slugs[loc] === firstSlug) {
        const nextSlug = slugs[next];
        const tail = rest.slice(1).join("/");
        const base = nextSlug ? `/${next}/${nextSlug}` : `/${next}`;
        return tail ? `${base}/${tail}` : base;
      }
    }
  }

  return `/${next}/${rest.join("/")}`;
}
