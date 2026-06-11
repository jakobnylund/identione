"use client";

import { useReducedMotion } from "framer-motion";

// Brand gradient video, blended over the hero portrait with `mix-blend-screen`
// so the aurora gradient lifts out of the dark photo. Autoplays muted/looped/
// inline. Honours prefers-reduced-motion by showing only the still poster.
export function HeroVideo() {
  const reduce = useReducedMotion();

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
      className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
      autoPlay
      muted
      loop
      playsInline
      poster="/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/identione-gradient.mp4" type="video/mp4" />
    </video>
  );
}
