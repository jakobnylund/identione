import Link from "next/link";
import { getServerDict } from "@/lib/i18n/server";
import { localizedHref } from "@/lib/i18n/routes";
import { brand } from "@/lib/brand";
import type { Locale } from "@/lib/i18n/types";

export function Footer({ locale }: { locale: Locale }) {
  const { t } = getServerDict(locale);
  const year = new Date().getFullYear();
  const home = localizedHref("home", locale);
  const sv = locale === "sv";

  const links = [
    { label: t.nav.perspective, href: `${home}#perspective` },
    { label: t.nav.people, href: `${home}#people` },
    { label: t.nav.about, href: `${home}#about` },
    { label: t.nav.contact, href: `${home}#contact` },
  ];

  return (
    <footer className="theme-dark aurora relative overflow-hidden">
      <div className="page-grid relative pt-24 pb-16">
        {/* Columns */}
        <nav className="col-span-6 md:col-span-3">
          <p className="section-label mb-5">{sv ? "Utforska" : "Explore"}</p>
          <ul className="flex flex-col gap-3">
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
        </nav>

        <div className="col-span-6 md:col-span-3 md:col-start-5">
          <p className="section-label mb-5">{sv ? "Kontakt" : "Contact"}</p>
          <ul className="flex flex-col gap-3 text-sm text-text-muted">
            <li>
              <a
                href={`mailto:${brand.contactEmail}`}
                className="transition-colors hover:text-text"
              >
                {brand.contactEmail}
              </a>
            </li>
            <li>
              <a
                href={brand.website}
                className="transition-colors hover:text-text"
              >
                {brand.website.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>

        <address className="col-span-12 mt-10 flex flex-col gap-5 not-italic md:col-span-3 md:col-start-9 md:mt-0">
          <p className="section-label">{sv ? "Kontor" : "Offices"}</p>
          {brand.offices.map((office) => (
            <p
              key={office.city}
              className="text-sm leading-relaxed text-text-muted"
            >
              <span className="text-text">{office.city}</span>
              <br />
              {office.lines.join(", ")}
            </p>
          ))}
        </address>
      </div>

      {/* Brand signature — the wordmark as a large left-aligned closing mark. */}
      <div className="page-contain relative pb-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/identione-wordmark-white.svg"
          alt={t.brand.name}
          className="h-auto w-full max-w-5xl"
        />
      </div>

      <div className="page-contain relative flex flex-col gap-2 border-t border-border py-6 text-xs text-text-faint md:flex-row md:items-center md:justify-between">
        <span>
          © {year} {brand.legalName} · {brand.orgNumber}. {t.footer.rights}
        </span>
        <Link
          href={localizedHref("privacy", locale)}
          className="transition-colors hover:text-text-muted"
        >
          {sv ? "Integritet" : "Privacy"}
        </Link>
      </div>
    </footer>
  );
}
