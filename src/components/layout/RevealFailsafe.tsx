"use client";

import { useEffect } from "react";

/**
 * Safety net for scroll-reveal animations. They are a progressive enhancement,
 * but if Framer Motion is slow to boot, throws, or has its rAF loop throttled,
 * elements can be stranded at their `initial` opacity:0. This watches for any
 * element that is *in the viewport* yet still fully transparent and reveals it.
 * Elements below the fold are left alone so their entrance animation still runs.
 */
export function RevealFailsafe() {
  useEffect(() => {
    let last = 0;

    const sweep = () => {
      last = Date.now();
      const vh = window.innerHeight;
      const candidates = document.querySelectorAll<HTMLElement>(
        'main [style*="opacity: 0"], main [style*="opacity:0"]',
      );
      candidates.forEach((el) => {
        const r = el.getBoundingClientRect();
        const inView = r.top < vh * 0.92 && r.bottom > 0;
        if (inView) {
          el.style.opacity = "1";
          if (el.style.transform && el.style.transform !== "none") {
            el.style.transform = "none";
          }
        }
      });
    };

    // Throttled directly (no rAF, which can be frozen in non-visible tabs).
    const onScroll = () => {
      if (Date.now() - last > 150) sweep();
    };

    // After any interaction (tab switch, accordion, carousel) content may be
    // freshly mounted at opacity:0 — sweep again shortly after.
    const onClick = () => {
      window.setTimeout(sweep, 450);
      window.setTimeout(sweep, 900);
    };

    // A few early sweeps catch above-the-fold content even before any scroll.
    const timers = [400, 1200, 2500, 4500].map((d) =>
      window.setTimeout(sweep, d),
    );
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("click", onClick);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
