"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { localizedHref } from "@/lib/i18n/routes";
import { LocaleSwitcher } from "./LocaleSwitcher";

// Dark, frosted header. `theme-dark` flips the token set to light text so the
// nav, locale switcher and borders read correctly on the dark bar. The real
// wordmark (white variant) sits top-left.
export function Header() {
  const { locale, t } = useLocale();
  const home = localizedHref("home", locale);

  const links = [
    { label: t.nav.perspective, href: `${home}#perspective` },
    { label: t.nav.people, href: `${home}#people` },
    { label: t.nav.about, href: `${home}#about` },
    { label: t.nav.contact, href: `${home}#contact` },
  ];

  return (
    <header className="theme-dark fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/70 backdrop-blur-md">
      <div className="page-contain flex h-14 items-center justify-between">
        <Link href={home} aria-label={t.brand.name} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/identione-wordmark-white.svg"
            alt={t.brand.name}
            className="h-3 w-auto md:h-[14px]"
          />
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-text-muted transition-colors hover:text-text"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
