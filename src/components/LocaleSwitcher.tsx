"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LOCALES, type Locale } from "@/lib/i18n/types";

export function LocaleSwitcher() {
  const { locale, t, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 text-sm" aria-label={t.localeSwitcher.label}>
      {LOCALES.map((loc: Locale, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-text-faint">/</span>}
          <button
            type="button"
            onClick={() => setLocale(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "font-medium text-text"
                : "text-text-muted hover:text-text transition-colors"
            }
          >
            {t.localeSwitcher.short[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
