"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { WHY_US } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-16 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="The difference"
          title="Why Choose Sri Kandan Solutions?"
          tone="light"
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
        >
          {/* connecting line on desktop */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />
          {WHY_US.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="relative flex flex-col items-center gap-3 text-center"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-navy font-heading text-lg font-extrabold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
              <div className="mt-1 flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
                <span className="font-heading text-2xl font-extrabold text-teal-light">
                  <CountUpNumber
                    value={item.stat.value}
                    prefix={item.stat.prefix}
                    suffix={item.stat.suffix}
                  />
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  {item.stat.label}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
