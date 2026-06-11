import { notFound } from "next/navigation";
import { brand } from "@/lib/brand";
import { isLocale } from "@/lib/i18n/types";

// Concise, honest privacy notice for a static brochure site: no analytics, no
// tracking cookies, no forms. One functional cookie stores the language choice.
const content = {
  en: {
    title: "Privacy",
    intro: `This website is operated by ${brand.legalName} (org. no. ${brand.orgNumber}), ${brand.address}, ${brand.country}. We keep data collection to a minimum.`,
    sections: [
      {
        h: "What we collect",
        p: "Nothing about you is collected when you browse this site. There are no analytics, no tracking pixels, and no advertising cookies.",
      },
      {
        h: "Cookies",
        p: "We use a single functional cookie to remember your language choice (Swedish or English). It stores no personal data and is not used for tracking.",
      },
      {
        h: "Contact",
        p: `If you email us, we process your message and contact details only to reply to you. Reach us at ${brand.contactEmail}.`,
      },
      {
        h: "Your rights",
        p: `You may request access to, correction of, or deletion of any personal data we hold about you. Contact ${brand.contactEmail}.`,
      },
    ],
  },
  sv: {
    title: "Integritet",
    intro: `Den här webbplatsen drivs av ${brand.legalName} (org.nr ${brand.orgNumber}), ${brand.address}, ${brand.country}. Vi håller datainsamlingen till ett minimum.`,
    sections: [
      {
        h: "Vad vi samlar in",
        p: "Inget om dig samlas in när du besöker sidan. Det finns ingen analys, inga spårningspixlar och inga annonscookies.",
      },
      {
        h: "Cookies",
        p: "Vi använder en enda funktionell cookie för att komma ihåg ditt språkval (svenska eller engelska). Den lagrar inga personuppgifter och används inte för spårning.",
      },
      {
        h: "Kontakt",
        p: `Om du mejlar oss behandlar vi ditt meddelande och dina kontaktuppgifter enbart för att svara dig. Nå oss på ${brand.contactEmail}.`,
      },
      {
        h: "Dina rättigheter",
        p: `Du kan begära tillgång till, rättelse av eller radering av personuppgifter vi har om dig. Kontakta ${brand.contactEmail}.`,
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = content[rawLocale];

  return (
    <section className="theme-dark min-h-[100dvh] py-32 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="headline-lg text-text">{t.title}</h1>
          <p className="subhead mt-8 max-w-[60ch]">{t.intro}</p>

          <div className="mt-14 flex flex-col gap-10">
            {t.sections.map((s) => (
              <div key={s.h} className="border-t border-border pt-6">
                <h2 className="font-display text-xl tracking-tight text-text">
                  {s.h}
                </h2>
                <p className="mt-3 max-w-[60ch] text-text-muted">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
