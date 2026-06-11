import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/types";

// Placeholder privacy page — content TBD.
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  return (
    <section className="min-h-[100dvh]">
      <div className="page-grid min-h-screen items-center pt-14">
        <div className="col-span-12 md:col-span-8">
          <h1 className="headline-lg">
            {rawLocale === "sv" ? "Integritet" : "Privacy"}
          </h1>
          <p className="mt-6 text-text-muted">
            {rawLocale === "sv" ? "Innehåll kommer." : "Content coming soon."}
          </p>
        </div>
      </div>
    </section>
  );
}
