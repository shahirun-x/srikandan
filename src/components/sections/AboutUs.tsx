"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ABOUT } from "@/lib/constants";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";

const FLOAT_STATS = [
  { value: "10+", label: "Years delivering" },
  { value: "500+", label: "Clients served" },
  { value: "6", label: "Industries" },
];

export function AboutUs() {
  return (
    <section id="about" className="scroll-mt-24 bg-light-gray py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <SectionTitle
            eyebrow="About Us"
            title="Your single accountable IT partner"
            align="left"
          />
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-slate-text"
          >
            {ABOUT.paragraph}
          </motion.p>

          <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-5">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-navy/10 bg-white p-4 shadow-card transition-all duration-300 hover:shadow-lift sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal sm:h-11 sm:w-11">
                <Eye className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy sm:mt-4 sm:text-base">
                Our Vision
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-text sm:text-sm">
                {ABOUT.vision}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-navy/10 bg-white p-4 shadow-card transition-all duration-300 hover:shadow-lift sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark sm:h-11 sm:w-11">
                <Target className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-heading text-sm font-bold text-navy sm:mt-4 sm:text-base">
                Our Mission
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-text sm:text-sm">
                {ABOUT.mission}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* decorative visual */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          aria-hidden
        >
          <div className="absolute left-0 top-6 h-64 w-64 rounded-[3rem] bg-teal/25" />
          <div className="absolute bottom-0 right-2 h-52 w-52 rounded-full bg-gold/25" />
          <div className="absolute right-8 top-0 h-40 w-40 rounded-3xl border-2 border-navy/15" />
          <div className="absolute inset-10 rounded-[2.5rem] bg-navy shadow-lift" />
          <div className="absolute inset-0 flex flex-col justify-center gap-4 p-14">
            {FLOAT_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-4 rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur ${
                  i === 1 ? "translate-x-8" : ""
                }`}
              >
                <span className="font-heading text-2xl font-extrabold text-teal">
                  {s.value}
                </span>
                <span className="text-sm font-semibold text-navy">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
