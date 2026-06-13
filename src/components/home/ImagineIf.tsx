"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/lib/i18n";

// Imagine If: full-screen statements that scroll normally over a fixed (sticky)
// backdrop which crossfades people2 -> people. The page scroll-snaps gently to
// each statement (proximity), so it settles on a readable card and there are no
// dimmed in-between states to overshoot into. Reduced-motion → static list.
export function ImagineIf({ t }: { t: Dict }) {
  const reduce = useReducedMotion();
  const cards = t.imagine.cards;
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // people2 overlay fades out around the middle, revealing the people base.
  const overlayOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  if (reduce) {
    return (
      <section
        id="imagine"
        className="theme-dark relative overflow-hidden py-20 md:py-40"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/people2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#13132D]/45" />
        <div className="page-contain relative text-center">
          <ul className="flex flex-col gap-12">
            {cards.map((card, i) => (
              <li key={i}>
                <p className="headline-lg mx-auto max-w-[20ch] text-text">
                  {card}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="imagine" className="theme-dark relative">
      {/* Fixed crossfading backdrop. people = base (always painted), people2
          fades out on top to reveal it. */}
      <div className="pointer-events-none sticky top-0 z-0 h-[100svh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/people.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/people2.jpg"
          alt=""
          aria-hidden="true"
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#13132D]/45" />
      </div>

      {/* Statements scroll over the fixed backdrop, one per screen, snapping. */}
      <div className="relative z-10 -mt-[100svh]">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex min-h-[100svh] snap-center items-center justify-center px-6"
          >
            <Reveal>
              <p className="headline-lg mx-auto max-w-[20ch] text-center text-text">
                {card}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
