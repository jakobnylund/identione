"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Symbol } from "./Symbol";

// Cell-division hover: on hover a small cell buds off the button's edge, drifts
// out, and scales up into the Identione symbol (the ring's hole opening as it
// grows reads as mitosis). Spring physics give the organic "pinch". Hover-only
// enhancement; reduced-motion / touch just render the plain button.
export function CellButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={href} className={className}>
        {children}
      </a>

      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 text-accent"
          style={{ marginTop: -18, marginRight: -14 }}
          initial={false}
          animate={
            hover
              ? { x: 30, y: -46, scale: 1, opacity: 1 }
              : { x: 0, y: 0, scale: 0.18, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 230, damping: 14 }}
        >
          <Symbol className="h-9 w-auto" />
        </motion.span>
      )}
    </span>
  );
}
