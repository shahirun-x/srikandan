"use client";

import { useEffect, useState } from "react";

/**
 * Watches the given section ids and returns the id currently dominating the
 * viewport, for nav-link highlighting.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        let best = active;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (bestRatio > 0) setActive(best);
      },
      { threshold: [0.1, 0.25, 0.5, 0.75], rootMargin: "-30% 0px -40% 0px" },
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return active;
}
