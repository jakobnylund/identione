import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { getServerDict } from "@/lib/i18n/server";
import { LOCALES, isLocale } from "@/lib/i18n/types";

// Body face (brand secondary). Display face = Space Grotesk as the licensed
// Safiro stand-in; swap when the Safiro files land.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const { t } = getServerDict(rawLocale);
  return {
    metadataBase: new URL("https://identione.com"),
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: {
      canonical: `/${rawLocale}`,
      languages: { en: "/en", sv: "/sv" },
    },
    openGraph: {
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
      type: "website",
      locale: t.metadata.ogLocale,
      images: ["/og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
      images: ["/og.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const { t } = getServerDict(locale);

  return (
    <html
      lang={t.metadata.htmlLang}
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        <a href="#main-content" className="sr-skip">
          {locale === "sv" ? "Hoppa till innehåll" : "Skip to content"}
        </a>
        {/* Single fixed grain overlay (perf-safe per 6.E) instead of per-section grain. */}
        <div className="grain-overlay" aria-hidden="true" />
        <LocaleProvider locale={locale}>
          <Header />
          <main id="main-content">{children}</main>
          <Footer locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
