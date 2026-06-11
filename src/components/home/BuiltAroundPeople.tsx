import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { LoopVideo } from "@/components/LoopVideo";

// Split composition: the people-copy on the left, an ethereal silhouette video
// on the right, then the trust statement full-width below.
export function BuiltAroundPeople({ t }: { t: Dict }) {
  return (
    <section id="people" className="theme-dark aurora py-20 md:py-40">
      <div className="page-grid">
        <div className="col-span-12 mb-10 md:mb-14 flex items-baseline gap-4">
          <span className="section-label">{t.people.label}</span>
        </div>

        {/* Left: copy */}
        <Reveal className="col-span-12 lg:col-span-5 lg:self-center">
          <h2 className="headline-lg text-text">{t.people.headline}</h2>
          <p className="subhead mt-8 max-w-md">{t.people.line}</p>

          <ul className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-3">
            {t.people.roles.map((role) => (
              <li
                key={role}
                className="font-display text-base tracking-tight text-text/90"
              >
                {role}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: ethereal silhouette video */}
        <Reveal
          variant="clip"
          delay={0.1}
          className="col-span-12 mt-8 md:mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:self-center"
        >
          <LoopVideo
            src="/silhouette.mp4"
            poster="/silhouette-poster.jpg"
            className="aspect-[16/10] w-full object-cover ring-1 ring-border [filter:hue-rotate(-25deg)_saturate(0.95)]"
          />
        </Reveal>

        {/* Key statement — full width, the emotional anchor. */}
        <Reveal className="col-span-12 mt-14 md:mt-24 lg:col-span-9">
          <p className="headline-lg max-w-[20ch] text-white/55">
            {t.people.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
