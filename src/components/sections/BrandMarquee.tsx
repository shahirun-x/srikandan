"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { BRAND_MARQUEE_ROW_1, BRAND_MARQUEE_ROW_2 } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

function Chip({ name }: { name: string }) {
  return (
    <span className="mx-2 inline-flex flex-shrink-0 items-center rounded-xl border border-navy/10 bg-white px-5 py-3 font-heading text-sm font-bold text-slate-text shadow-sm sm:text-base">
      {name}
    </span>
  );
}

function Row({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  // Duplicated once so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-viewport relative overflow-hidden py-2">
      <div
        className={`marquee-track ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((name, i) => (
          <Chip key={`${name}-${i}`} name={name} />
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-light-gray to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-light-gray to-transparent sm:w-24" />
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="overflow-hidden bg-light-gray py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Vendor partnerships"
          title="Featured Products & Brands"
          description="We source, license and support solutions from the industry's most trusted names."
        />
      </Container>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 flex flex-col gap-4 sm:mt-14"
      >
        <Row items={BRAND_MARQUEE_ROW_1} direction="left" />
        <Row items={BRAND_MARQUEE_ROW_2} direction="right" />
      </motion.div>
    </section>
  );
}
