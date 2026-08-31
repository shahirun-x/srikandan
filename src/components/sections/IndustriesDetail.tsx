"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES, INDUSTRY_SOLUTIONS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function IndustriesDetail() {
  return (
    <div className="bg-white">
      {INDUSTRIES.map((industry, i) => {
        const Icon = industry.icon;
        const solutions = INDUSTRY_SOLUTIONS[industry.name] ?? [];
        return (
          <section
            key={industry.name}
            className={`py-16 sm:py-20 lg:py-24 ${
              i % 2 === 1 ? "bg-light-gray" : "bg-white"
            }`}
          >
            <Container>
              <motion.div
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14"
              >
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-teal">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
                    {industry.name}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-text">
                    {industry.description}
                  </p>
                  <Button href="/#contact" size="md" className="mt-2 w-full sm:w-fit">
                    Get Industry-Specific Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.ul
                  variants={fadeUp}
                  className="grid gap-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:grid-cols-2 sm:p-7"
                >
                  {solutions.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-text">
                        {s}
                      </span>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
