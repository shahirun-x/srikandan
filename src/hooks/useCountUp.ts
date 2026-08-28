"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Counts from 0 up to `target` over `duration` ms once `start` becomes true.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (reduced) {
      setValue(target);
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, start, duration, reduced]);

  return value;
}
