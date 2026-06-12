"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import type { Dict } from "@/lib/i18n";

// Imagine If: a dreamy, centered, pinned sequence over a photographic backdrop.
// people is the always-painted BASE; people2 is an overlay that fades OUT to
// reveal it. Putting the final image as the base means the end state survives
// the sticky un-pin layer repaint (which otherwise dropped the overlay and
// flashed the base back). Desktop scrubs the fade on scroll (soft); mobile uses
// a hysteresis threshold + timed fade so address-bar resizes can't bounce it.
// Statements are scroll-scrubbed and dropped once past (display:none).
export function ImagineIf({ t }: { t: Dict }) {
  const reduce = useReducedMotion();
  const cards = t.imagine.cards;
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Pan the backdrop with scroll: vertically on desktop, horizontally on mobile.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0vw", "-50vw"]);
  // people2 overlay fades OUT mid-scroll, revealing the people base beneath.
  const overlayOpacity = useTransform(scrollYProgress, [0.42, 0.6], [1, 0]);
  // "More to scroll" hint fades away as the section nears its end.
  const hintOpacity = useTransform(scrollYProgress, [0.82, 0.96], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [pastMid, setPastMid] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Hysteresis so jitter around the midpoint (mobile address-bar resize) can't
  // flip the fade back and forth.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPastMid((p) => (v > 0.55 ? true : v < 0.45 ? false : p));
  });

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

  const imgClass = isMobile
    ? "absolute inset-y-0 left-0 h-full w-[150vw] max-w-none object-cover"
    : "absolute inset-x-0 top-0 h-[150vh] w-full object-cover";
  const pan = isMobile ? { x: bgX } : { y: bgY };
  // people2 overlay: scrubbed fade-out on desktop, timed + hysteresis on mobile.
  const overlayProps = isMobile
    ? {
        style: pan,
        animate: { opacity: pastMid ? 0 : 1 },
        transition: { duration: 0.7, ease: "easeInOut" as const },
      }
    : { style: { ...pan, opacity: overlayOpacity } };

  return (
    <section
      ref={ref}
      id="imagine"
      className="theme-dark relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Base = people (the final image, always painted). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/people.jpg"
          alt=""
          aria-hidden="true"
          style={pan}
          className={imgClass}
        />
        {/* Overlay = people2, fades out to reveal people. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src="/people2.jpg"
          alt=""
          aria-hidden="true"
          {...overlayProps}
          className={imgClass}
        />
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

        {/* Hint that there is more to scroll within this pinned section. */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-10 z-20 flex justify-center text-white/55"
        >
          <span className="scroll-hint">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </motion.div>
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
