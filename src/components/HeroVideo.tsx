"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Brand gradient video, blended over the hero portrait with `mix-blend-screen`
// so the aurora gradient lifts out of the dark photo. Autoplays muted/looped/
// inline. Sets muted imperatively + play() for reliable iOS autoplay. Honours
// prefers-reduced-motion by showing only the still poster.
export function HeroVideo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => {});
  }, []);

  if (reduce) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
      />
    );
  }

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/identione-gradient.mp4" type="video/mp4" />
    </video>
  );
}
