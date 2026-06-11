"use client";

import { useEffect, useRef } from "react";

// Interactive dot matrix — echoes the brand's dot-mapped identity motif. A faint
// grid of light-blue dots; near the pointer they brighten and grow, a soft glow
// that follows the cursor. Pointer tracking + rAF live outside React (canvas
// only, no per-frame state). Static single draw under reduced-motion or on
// touch / coarse pointers. rAF only runs while the section is on screen.
export function DotMatrix({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const interactive = fine && !reduce;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const gap = 26;
    const radius = 140;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = false;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          let r = 1;
          let a = 0.08;
          if (interactive) {
            const dist = Math.hypot(x - mouse.x, y - mouse.y);
            if (dist < radius) {
              const t = 1 - dist / radius;
              r = 1 + t * 2.6;
              a = 0.08 + t * 0.7;
            }
          }
          ctx.beginPath();
          ctx.fillStyle = `rgba(166, 196, 251, ${a})`;
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = () => {
      draw();
      if (visible) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      if (!visible || !interactive) draw();
    });
    ro.observe(parent);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && interactive) {
          raf = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    if (interactive) window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
