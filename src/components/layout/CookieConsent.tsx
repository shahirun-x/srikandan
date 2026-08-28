"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const STORAGE_KEY = "sk-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked — stay hidden */
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-navy/10 bg-white/95 backdrop-blur-lg"
          role="region"
          aria-label="Cookie consent"
        >
          <Container className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between sm:py-4">
            <p className="text-center text-sm text-slate-text sm:text-left">
              We use cookies to enhance your browsing experience.
            </p>
            <div className="flex w-full gap-3 sm:w-auto">
              <button
                type="button"
                onClick={() => decide("declined")}
                className="flex-1 rounded-full border-2 border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy/30 sm:flex-none"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="flex-1 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark sm:flex-none"
              >
                Accept
              </button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
