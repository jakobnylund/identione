import { notFound } from "next/navigation";
import { getServerDict } from "@/lib/i18n/server";
import { brand } from "@/lib/brand";
import { isLocale } from "@/lib/i18n/types";

// Placeholder contact page — structure only.
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const { t } = getServerDict(rawLocale);

  return (
    <section className="min-h-[100dvh]">
      <div className="page-grid min-h-screen items-center pt-14">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <h1 className="headline-lg">{t.cta.heading}</h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted">{t.cta.body}</p>
          <a
            href={`mailto:${brand.contactEmail}`}
            className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            {t.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
