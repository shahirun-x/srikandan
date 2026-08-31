"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS, CLIENTS_INTRO } from "@/lib/constants";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

const COUNT = TESTIMONIALS.length;
const INTERACTION_COOLDOWN = 5000;
const AUTO_INTERVAL = 5000;

export function ClientsTrust() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [manualHold, setManualHold] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const reduced = usePrefersReducedMotion();

  const registerInteraction = useCallback(() => {
    setManualHold(true);
    if (holdTimer.current) clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(
      () => setManualHold(false),
      INTERACTION_COOLDOWN,
    );
  }, []);

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + COUNT) % COUNT);
      registerInteraction();
    },
    [registerInteraction],
  );

  const jump = useCallback(
    (i: number) => {
      setIndex(i);
      registerInteraction();
    },
    [registerInteraction],
  );

  // Auto-rotate unless reduced-motion, hovered, or within the interaction cooldown.
  useEffect(() => {
    if (reduced || hovering || manualHold) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % COUNT), AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [reduced, hovering, manualHold]);

  useEffect(
    () => () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    },
    [],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <section className="scroll-mt-24 overflow-hidden bg-[#0A1628] py-16 text-white sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12">
        {/* left */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5 lg:col-span-2"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-[#4BBFB4]"
          >
            Trusted by Businesses Across Chennai
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight sm:text-4xl"
          >
            <CountUpNumber value={150} suffix="+" /> Businesses Trust Sri Kandan
            Solutions
          </motion.h2>
          <motion.span
            variants={fadeUp}
            className="h-1 w-12 rounded-full bg-[#E8A838]"
          />
          <motion.p
            variants={fadeUp}
            className="max-w-xl leading-relaxed text-gray-400"
          >
            {CLIENTS_INTRO}
          </motion.p>
        </motion.div>

        {/* right — single-card carousel on every breakpoint */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-3"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative mx-auto max-w-2xl sm:px-16">
            {/* arrows — desktop / tablet only, vertically centred on the card */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div key={index} className="animate-testimonial-in">
              <TestimonialCard data={TESTIMONIALS[index]} />
            </div>
          </div>

          {/* dot indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name + t.role}
                type="button"
                onClick={() => jump(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-[#E8A838]" : "w-2 bg-white/25",
                )}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
