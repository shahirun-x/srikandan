"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS, CLIENTS_INTRO } from "@/lib/constants";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

export function ClientsTrust() {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [reduced, count]);

  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark"
          >
            Trusted by Businesses Across Chennai
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-[2.75rem]"
          >
            <CountUpNumber value={150} suffix="+" /> Businesses Trust
            <br className="hidden sm:block" /> Sri Kandan Solutions
          </motion.h2>
          <motion.span variants={fadeUp} className="h-1 w-16 rounded-full bg-gold" />
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-slate-text"
          >
            {CLIENTS_INTRO}
          </motion.p>
        </motion.div>

        {/* right — carousel on mobile/tablet, stack on desktop */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* desktop: all three */}
          <div className="hidden flex-col gap-5 lg:flex">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name + t.role} data={t} />
            ))}
          </div>

          {/* mobile/tablet: one at a time */}
          <div className="lg:hidden">
            <div className="relative min-h-[19rem]">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard data={TESTIMONIALS[index]} />
              </motion.div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name + t.role}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-6 bg-teal" : "w-2 bg-navy/20",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:border-teal hover:text-teal"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:border-teal hover:text-teal"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
