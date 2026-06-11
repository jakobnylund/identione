import { notFound } from "next/navigation";
import { getServerDict } from "@/lib/i18n/server";
import { isLocale } from "@/lib/i18n/types";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Perspective } from "@/components/home/Perspective";
import { ImagineIf } from "@/components/home/ImagineIf";
import { BuiltAroundPeople } from "@/components/home/BuiltAroundPeople";
import { WhereItMatters } from "@/components/home/WhereItMatters";
import { About } from "@/components/home/About";
import { CallToAction } from "@/components/home/CallToAction";

// Single-page scroll landing. Sections follow the brief's narrative arc:
// problem → perspective → possibility → people → relevance → company → invite.
// Environments alternate dark ⇄ light to vary the rhythm.
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const { t } = getServerDict(rawLocale);

  return (
    <>
      <Hero t={t} />
      <Problem t={t} />
      <Perspective t={t} />
      <ImagineIf t={t} />
      <BuiltAroundPeople t={t} />
      <WhereItMatters t={t} />
      <About t={t} />
      <CallToAction t={t} />
    </>
  );
}
