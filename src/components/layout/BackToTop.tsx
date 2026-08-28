"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function BackToTop() {
  const { scrollY } = useScrollProgress(400);
  const show = scrollY > 400;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          className="fixed bottom-[6.25rem] right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-colors hover:bg-teal sm:right-6"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
