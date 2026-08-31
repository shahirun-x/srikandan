"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, viewportOnce } from "@/lib/motion";

const stepVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="How we work"
          title="A clear path from problem to platform"
          description="Every engagement follows the same disciplined process — so you always know what happens next."
        />

        <motion.ol
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 grid gap-8 sm:mt-16 lg:grid-cols-4 lg:gap-6"
        >
          {/* desktop connecting line */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-teal/10 via-teal/40 to-teal/10 lg:block"
          />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            const notLast = i < PROCESS_STEPS.length - 1;
            return (
              <motion.li
                key={step.title}
                variants={stepVariant}
                className="relative flex gap-4 lg:flex-col lg:gap-4 lg:text-center"
              >
                {/* mobile vertical connector, centred on the number circle */}
                {notLast && (
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-12 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-teal/40 to-teal/5 lg:hidden"
                  />
                )}

                <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white font-heading text-sm font-extrabold text-gold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex-1 rounded-xl border border-navy/10 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-card lg:mt-2 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:hover:shadow-none">
                  <span className="mb-3 hidden justify-center lg:flex">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                    </span>
                  </span>
                  <h3 className="font-heading text-base font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
