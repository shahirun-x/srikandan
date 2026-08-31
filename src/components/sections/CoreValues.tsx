"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { CORE_VALUES } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface CoreValuesProps {
  id?: string;
}

export function CoreValues({ id = "values" }: CoreValuesProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle eyebrow="What guides us" title="Our Core Values" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4"
        >
          {CORE_VALUES.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift sm:gap-4 sm:p-7"
            >
              <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-transparent transition-colors duration-300 group-hover:bg-gold" />
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
                {title}
              </h3>
              <p className="text-[0.8rem] leading-relaxed text-slate-text sm:text-sm">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
