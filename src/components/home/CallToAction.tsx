import type { Dict } from "@/lib/i18n";
import { brand } from "@/lib/brand";
import { Reveal } from "@/components/Reveal";
import { DotMatrix } from "@/components/DotMatrix";

export function CallToAction({ t }: { t: Dict }) {
  return (
    <section
      id="contact"
      className="theme-dark aurora-purple relative overflow-hidden py-20 md:py-40"
    >
      <DotMatrix className="absolute inset-0 h-full w-full" />
      <div className="page-grid relative z-10">
        <div className="col-span-12 mb-10 md:mb-14 flex items-baseline gap-4">
          <span className="section-label">{t.cta.label}</span>
        </div>

        <Reveal className="col-span-12 lg:col-span-9">
          <h2 className="headline-lg max-w-[16ch] text-text">
            {t.cta.heading}
          </h2>
        </Reveal>

        <div className="col-span-12 mt-8 md:mt-12 flex flex-col gap-8 md:col-span-7 lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="subhead !text-white/80">{t.cta.body}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href={`mailto:${brand.contactEmail}`}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-dark transition-colors hover:bg-white/90"
            >
              {t.cta.button}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
