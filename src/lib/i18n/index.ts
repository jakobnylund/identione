import { en, type Dict } from "./dictionaries/en";
import { sv } from "./dictionaries/sv";
import { DEFAULT_LOCALE, type Locale } from "./types";

const dicts: Record<Locale, Dict> = { sv, en };

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? dicts[DEFAULT_LOCALE];
}

export type { Dict, Locale };
export { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, LOCALES } from "./types";
