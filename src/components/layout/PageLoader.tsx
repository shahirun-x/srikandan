"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";

const SESSION_KEY = "sk-loaded";

/**
 * One-time splash on first load of a session. The fade-out is a pure CSS
 * animation (`.page-loader`); we only use JS to (a) skip it on subsequent
 * navigations within the session and (b) unmount once it has finished.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage blocked — just show it once */
    }
    if (seen) {
      setSkip(true);
      setDone(true);
    }
  }, []);

  if (done && skip) return null;
  if (done) return null;

  return (
    <div
      ref={ref}
      className="page-loader fixed inset-0 z-[100] flex items-center justify-center bg-white"
      onAnimationEnd={() => setDone(true)}
      aria-hidden
    >
      <div className="animate-float-medium">
        <Logo />
      </div>
    </div>
  );
}
