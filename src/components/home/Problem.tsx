import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Problem({ t }: { t: Dict }) {
  return (
    <section id="problem" className="bg-surface py-20 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 mb-10 md:mb-14 flex items-baseline gap-4">
          <span className="section-label">{t.problem.label}</span>
        </div>

        {/* Three questions side by side. Each builds in: the top hairline draws
            from the left, then the question rises just behind it, left to right. */}
        <ol className="col-span-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
          {t.problem.questions.map((q, i) => (
            <li key={i}>
              <Reveal variant="line" delay={i * 0.15} className="hairline" />
              <Reveal
                as="p"
                delay={i * 0.15 + 0.15}
                className="headline-sm mt-6 text-text"
              >
                {q}
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Closing statement — left-anchored like every other block. */}
        <Reveal className="col-span-12 mt-12 md:mt-20 lg:col-span-8">
          <p className="headline-lg text-text">{t.problem.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
