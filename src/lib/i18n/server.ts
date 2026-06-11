import { getDict } from "./index";
import type { Locale } from "./types";

export function getServerDict(locale: Locale) {
  return { locale, t: getDict(locale) };
}
