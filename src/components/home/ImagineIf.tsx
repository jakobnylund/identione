"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import type { Dict } from "@/lib/i18n";

// Imagine If as a dreamy, centered, pinned sequence over a photographic
// backdrop. The background pans vertically with scroll so the
// whole image is revealed across the section, behind the statements that fade
// through. Statements are scroll-scrubbed (nothing skipped) and dropped from
// render once past (display:none) so nothing ghosts. Reduced-motion → static.
export function ImagineIf({ t }: { t: Dict }) {
  const reduce = useReducedMotion();
  const cards = t.imagine.cards;
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Pan the backdrop with scroll: vertically on desktop, horizontally on mobile
  // (the wide image is cropped sideways on narrow viewports, so x reveals more).
  const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0vw", "-50vw"]);
  // Crossfade the backdrop from people2.jpg to people.jpg around mid-scroll.
  const bg2Opacity = useTransform(scrollYProgress, [0.42, 0.6], [0, 1]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
    <section
      ref={ref}
      id="imagine"
      className="theme-dark relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Photographic backdrop, panning with scroll; crossfades people2 -> people mid-scroll. */}
        {(() => {
          const imgClass = isMobile
            ? "absolute inset-y-0 left-0 h-full w-[150vw] max-w-none object-cover"
            : "absolute inset-x-0 top-0 h-[150vh] w-full object-cover";
          const pan = isMobile ? { x: bgX } : { y: bgY };
          return (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="/people2.jpg"
                alt=""
                aria-hidden="true"
                style={pan}
                className={imgClass}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="/people.jpg"
                alt=""
                aria-hidden="true"
                style={{ ...pan, opacity: bg2Opacity }}
                className={imgClass}
              />
            </>
          );
        })()}
        <div className="absolute inset-0 bg-[#13132D]/38" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center [isolation:isolate]">
          <div className="page-contain grid w-full place-items-center">
            {cards.map((card, i) => (
              <ImagineLine
                key={i}
                progress={scrollYProgress}
                index={i}
                total={cards.length}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagineLine({
  progress,
  index,
  total,
  card,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  card: string;
}) {
  const seg = 1 / total;
  const first = index === 0;
  const last = index === total - 1;
  const gap = seg * 0.12;
  const fade = seg * 0.26;
  const visStart = index * seg + (first ? 0 : gap);
  const visEnd = (index + 1) * seg - (last ? 0 : gap);
  const inEnd = visStart + fade;
  const outStart = visEnd - fade;

  const range = first
    ? [visStart, outStart, visEnd]
    : last
      ? [visStart, inEnd, visEnd]
      : [visStart, inEnd, outStart, visEnd];
  const opacityOut = first ? [1, 1, 0] : last ? [0, 1, 1] : [0, 1, 1, 0];
  const blurOut = first ? [0, 0, 12] : last ? [12, 0, 0] : [12, 0, 0, 12];
  const scaleOut = first
    ? [1, 1, 1.06]
    : last
      ? [1.06, 1, 1]
      : [1.06, 1, 1, 1.06];

  const opacity = useTransform(progress, range, opacityOut);
  const blur = useTransform(progress, range, blurOut);
  const scale = useTransform(progress, range, scaleOut);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const display = useTransform(opacity, (v) => (v < 0.015 ? "none" : "block"));

  return (
    <motion.p
      style={{
        opacity,
        scale,
        filter,
        display,
        gridArea: "1 / 1",
        willChange: "opacity, transform, filter",
        backfaceVisibility: "hidden",
      }}
      className="headline-lg pointer-events-none mx-auto max-w-[20ch] text-center text-text"
    >
      {card}
    </motion.p>
  );
}
