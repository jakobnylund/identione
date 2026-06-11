"use client";

import { useReducedMotion } from "framer-motion";

// Muted, looping, inline background/panel video. Honours prefers-reduced-motion
// by rendering only the still poster.
export function LoopVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
