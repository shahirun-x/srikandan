"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { JOURNEY } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Journey() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="Our Journey" title="How we got here" align="left" />

        <motion.ol
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 flex flex-col gap-8 sm:mt-14"
        >
          <span
            aria-hidden
            className="absolute bottom-4 left-[0.9375rem] top-2 w-0.5 bg-gradient-to-b from-teal via-teal/40 to-teal/5"
          />
          {JOURNEY.map((m, i) => (
            <motion.li key={m.title} variants={fadeUp} className="relative flex gap-5">
              <span className="relative z-10 mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white font-heading text-xs font-extrabold text-gold">
                {i + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-slate-text">
                {m.title}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
