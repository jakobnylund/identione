"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

// Progressive scroll-reveal. Content is visible by default (see globals.css):
// no-JS, SEO crawlers, deep-links and reduced-motion users all get the content
// immediately. Only when JS is active (html.js set pre-paint in layout) and
// motion is allowed does the item start hidden and transition in once observed.
//
// variant:
//   "rise" (default) — fade + translateY
//   "line"           — hairline draws in from the left (scaleX)
//   "clip"           — content wipes up behind a mask (clip-path)
type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "ul" | "ol" | "p";
  variant?: "rise" | "line" | "clip";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  variant = "rise",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`${className} ${visible ? "is-visible" : ""}`.trim()}
      style={{ ["--reveal-delay"]: `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
