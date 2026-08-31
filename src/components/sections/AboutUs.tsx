"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ABOUT } from "@/lib/constants";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";

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

        {/* workspace image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-2xl border-2 border-gold/40" />
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-teal/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-navy/10 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
              alt="Sri Kandan Solutions team collaborating in the office"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-navy px-5 py-3.5 shadow-lift">
            <span className="font-heading text-2xl font-extrabold text-teal">
              10+
            </span>
            <span className="text-xs font-semibold leading-tight text-white/75">
              years of
              <br />
              hands-on delivery
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
