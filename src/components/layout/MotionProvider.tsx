"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global Framer Motion config. `reducedMotion="user"` makes every motion
 * component honour the OS "reduce motion" setting — transforms and layout
 * animation are skipped and elements snap to their final state — without having
 * to guard each animation by hand.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
