"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TypingTaglineProps {
  phrases: string[];
  className?: string;
}

/**
 * Types a phrase out character by character, holds, deletes, then moves to the
 * next. Reduced-motion users get a plain 3s fade-swap instead.
 */
export function TypingTagline({ phrases, className }: TypingTaglineProps) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reduced motion: simple swap, no per-character animation.
  useEffect(() => {
    if (!reduced) return;
    setText(phrases[index]);
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % phrases.length),
      3000,
    );
    return () => clearTimeout(t);
  }, [reduced, index, phrases]);

  useEffect(() => {
    if (reduced) return;
    const current = phrases[index];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? 45 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, reduced]);

  return (
    <span className={className} aria-live="polite">
      <span className="text-gradient font-bold">{text || " "}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-teal align-baseline animate-caret" />
    </span>
  );
}
