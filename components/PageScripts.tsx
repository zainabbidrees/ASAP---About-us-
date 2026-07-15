"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scripts ported from the original static page:
 *  - marks <html> with `js` so the reveal styles activate
 *  - reveal-on-scroll via IntersectionObserver (respects reduced motion)
 *  - logo images that fail to load show the typographic fallback
 *  - leader avatar images that fail to load are removed (initials show through)
 */
export default function PageScripts() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    // Logo fallback
    const markPending = (img: HTMLImageElement) => {
      const tile = img.closest(".logo-tile");
      if (tile) tile.classList.add("is-pending");
    };
    document.querySelectorAll<HTMLImageElement>(".logo-tile img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) markPending(img);
      else img.addEventListener("error", () => markPending(img), { once: true });
    });

    // Leader avatar fallback — remove broken image so the initials show
    document.querySelectorAll<HTMLImageElement>(".leader .avatar img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) img.remove();
      else img.addEventListener("error", () => img.remove(), { once: true });
    });

    // Reveal on scroll
    const targets = document.querySelectorAll(".reveal, .stagger");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  return null;
}
