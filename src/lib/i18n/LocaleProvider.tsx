"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDict, type Dict } from "./index";
import { translatePath } from "./routes";
import { LOCALE_COOKIE, LOCALES, type Locale } from "./types";

type Ctx = {
  locale: Locale;
  t: Dict;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (next: Locale) => {
      if (!LOCALES.includes(next) || next === locale) return;
      const oneYear = 60 * 60 * 24 * 365;
      document.cookie = `${LOCALE_COOKIE}=${next}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
      const target = translatePath(pathname ?? "/", next);
      router.push(target);
    },
    [locale, pathname, router],
  );

  const value = useMemo<Ctx>(
    () => ({ locale, t: getDict(locale), setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
