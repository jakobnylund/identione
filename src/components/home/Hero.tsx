import type { Dict } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { Symbol } from "@/components/Symbol";

export function Hero({ t }: { t: Dict }) {
  return (
    <section
      id="top"
      className="theme-dark relative flex min-h-[100dvh] items-center overflow-hidden bg-dark"
    >
      {/* Portrait base, gradient video screened over it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <HeroVideo />
      {/* Legibility scrim over the blend, darkest where the copy sits. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(19,19,45,0.88) 0%, rgba(19,19,45,0.55) 45%, rgba(19,19,45,0.20) 100%)",
        }}
      />

      <div className="page-grid relative w-full pb-24 pt-32">
        <div className="col-span-12 lg:col-span-11">
          <Reveal>
            <h1 className="headline-xl max-w-[18ch] text-white">
              {t.hero.line1}{" "}
              <span className="text-white/55">{t.hero.line2}</span>
            </h1>
          </Reveal>
        </div>

        <div className="col-span-12 mt-12 flex flex-col gap-8 md:col-span-7 lg:col-span-5">
          <Reveal delay={0.12}>
            <p className="subhead !text-white/80">{t.hero.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#perspective"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              {t.hero.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Brand mark, bottom-right corner. */}
      <Symbol className="pointer-events-none absolute bottom-8 right-8 h-14 w-auto text-white/20 md:bottom-10 md:right-12 md:h-20" />
    </section>
  );
}
