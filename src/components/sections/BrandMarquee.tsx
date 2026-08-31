"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { BRAND_MARQUEE_ROW_1, BRAND_MARQUEE_ROW_2 } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/motion";

function Pill({ label }: { label: string }) {
  return (
    <span className="flex shrink-0 items-center whitespace-nowrap rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600">
      {label}
    </span>
  );
}

/**
 * One marquee row. The track holds the brand list twice; the second copy is
 * aria-hidden and exists only to make the -50% translate loop seamlessly.
 * Each copy carries a trailing gap (pr-4) so one copy width === 50% of the track.
 */
function Row({
  brands,
  direction,
}: {
  brands: string[];
  direction: "left" | "right";
}) {
  const anim =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className={`flex w-max ${anim}`}>
      <div className="marquee-copy flex shrink-0 items-center gap-4 pr-4">
        {brands.map((b) => (
          <Pill key={b} label={b} />
        ))}
      </div>
      <div
        className="marquee-copy marquee-dup flex shrink-0 items-center gap-4 pr-4"
        aria-hidden="true"
      >
        {brands.map((b) => (
          <Pill key={`dup-${b}`} label={b} />
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="overflow-hidden bg-light-gray py-16 sm:py-20 lg:py-24">
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
        className="marquee-pause marquee-mask mt-12 flex flex-col gap-4 overflow-hidden sm:mt-14"
      >
        <Row brands={BRAND_MARQUEE_ROW_1} direction="left" />
        <Row brands={BRAND_MARQUEE_ROW_2} direction="right" />
      </motion.div>
    </section>
  );
}
