"use client";

import { useEffect, useState } from "react";

/**
 * Tracks vertical scroll. Returns the raw scrollY, a 0–1 progress value for the
 * whole document, and a `scrolled` flag that trips once past `offset` px.
 */
export function useScrollProgress(offset = 80) {
  const [state, setState] = useState({
    scrollY: 0,
    progress: 0,
    scrolled: false,
  });

  useEffect(() => {
    let last = 0;
    let scheduled = false;

    const update = () => {
      last = Date.now();
      scheduled = false;
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      setState({ scrollY, progress, scrolled: scrollY > offset });
    };

    // Run directly (throttled) so it never depends on requestAnimationFrame,
    // which browsers freeze for non-visible tabs; trail with one rAF pass for
    // a final accurate value.
    const onScroll = () => {
      if (Date.now() - last > 100) update();
      else if (!scheduled) {
        scheduled = true;
        if (typeof requestAnimationFrame === "function") {
          requestAnimationFrame(update);
        } else {
          setTimeout(update, 60);
        }
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset]);

  return state;
}
