import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

// Three conceptual areas as a clean, top-aligned three-column editorial list:
// index number, hairline, title, body. Grouped by border, not boxed cards.
export function WhereItMatters({ t }: { t: Dict }) {
  return (
    <section id="where" className="bg-surface py-28 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 mb-16 flex items-baseline gap-4">
          <span className="section-label">{t.where.label}</span>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {t.where.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="flex flex-col gap-5 border-t border-border pt-6">
                <h3 className="headline-sm text-text">{card.title}</h3>
                <p className="text-text-muted">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
