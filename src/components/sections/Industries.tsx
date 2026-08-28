"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { Container } from "@/components/ui/Container";
import { INDUSTRIES } from "@/lib/constants";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / INDUSTRIES.length;
    setActiveDot(Math.round(el.scrollLeft / cardWidth));
  };

  const scrollToCard = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / INDUSTRIES.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  return (
    <section
      id="industries"
      className="scroll-mt-24 bg-light-gray py-16 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="Sectors we know"
          title="Industries We Serve"
          description="Deep familiarity with the workflows, compliance needs and budgets of the sectors we work in."
        />

        {/* mobile: horizontal snap carousel · desktop: 3x2 grid */}
        <motion.div
          ref={trackRef}
          onScroll={onScroll}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="no-scrollbar snap-scroller -mx-4 mt-12 flex gap-5 overflow-x-auto px-4 pb-2 sm:mt-14 sm:gap-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="w-[78%] flex-shrink-0 sm:w-[46%] md:w-auto"
            >
              <IndustryCard {...industry} />
            </div>
          ))}
        </motion.div>

        {/* scroll indicator dots — mobile only */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {INDUSTRIES.map((industry, i) => (
            <button
              key={industry.name}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Go to ${industry.name}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === activeDot ? "w-6 bg-teal" : "w-2 bg-navy/20",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
