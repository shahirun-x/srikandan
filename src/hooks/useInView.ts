"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  /** Fraction of the element visible before it counts as "in view". */
  threshold?: number;
  /** Margin around the root, e.g. "-80px" to trigger a little early/late. */
  rootMargin?: string;
  /** Fire only the first time the element enters the viewport. */
  once?: boolean;
}

/**
 * Lightweight IntersectionObserver hook. Returns a ref to attach and a boolean
 * that flips true when the element is on screen.
 */
export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
