import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { DotMatrix } from "@/components/DotMatrix";

export function Perspective({ t }: { t: Dict }) {
  return (
    <section
      id="perspective"
      className="theme-dark aurora relative overflow-hidden py-28 md:py-40"
    >
      <DotMatrix className="absolute inset-0 h-full w-full" />
      <div className="page-grid relative z-10">
        <div className="col-span-12 mb-14 flex items-baseline gap-4">
          <span className="section-label">{t.perspective.label}</span>
        </div>

        {/* Headline carries the section; lead sentence in Identione Blue.
            Body stacked left underneath, aligned to the same column line. */}
        <Reveal className="col-span-12 lg:col-span-8">
          <h2 className="headline-xl text-text">
            {(() => {
              const [lead, ...rest] = t.perspective.headline.split(". ");
              return (
                <>
                  <span className="lead-accent">{lead}.</span>{" "}
                  {rest.join(". ")}
                </>
              );
            })()}
          </h2>
        </Reveal>

        <Reveal className="col-span-12 mt-10 lg:col-span-5" delay={0.12}>
          <p className="subhead">{t.perspective.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
