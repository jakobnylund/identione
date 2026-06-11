import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function About({ t }: { t: Dict }) {
  return (
    <section id="about" className="theme-dark py-20 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 mb-10 md:mb-14 flex items-baseline gap-4">
          <span className="section-label">{t.about.label}</span>
        </div>

        {/* Distinct from Perspective's stacked block: a clean two-column split,
            both columns anchored to the same top line (no floating offset). */}
        <Reveal className="col-span-12 lg:col-span-5">
          <h2 className="headline-lg text-text">{t.about.headline}</h2>
        </Reveal>

        <Reveal
          className="col-span-12 mt-10 lg:col-span-5 lg:col-start-7 lg:mt-0"
          delay={0.12}
        >
          <p className="subhead">{t.about.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
