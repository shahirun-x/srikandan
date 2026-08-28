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
    <section id={id} className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionTitle eyebrow="What guides us" title="Our Core Values" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CORE_VALUES.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-transparent transition-colors duration-300 group-hover:bg-gold" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-text">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
