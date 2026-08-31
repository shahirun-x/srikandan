"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { WHY_US } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
      <Container className="relative">
        <SectionTitle
          eyebrow="The difference"
          title="Why Choose Sri Kandan Solutions?"
          tone="light"
        />

        <div className="relative mt-14 sm:mt-16">
          {/* connecting line — desktop only, sits behind the numbers */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[18px] z-0 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
          />

          <motion.ol
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-6 md:gap-x-6 lg:grid-cols-5"
          >
            {WHY_US.map((item, i) => {
              const last = i === WHY_US.length - 1;
              return (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className={cn(
                    "flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:col-start-auto",
                    // 4th & 5th centre themselves on the tablet 3+2 layout
                    i === 3 && "md:col-start-2",
                    last &&
                      "col-span-2 mx-auto max-w-[200px] md:col-start-4 md:max-w-none lg:col-span-1 lg:mx-0 lg:max-w-none",
                  )}
                >
                  <span className="relative z-10 flex h-9 items-center font-heading text-lg font-bold italic text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-heading text-sm font-bold text-white sm:text-base lg:mt-4">
                    {item.title}
                  </h3>

                  <p className="mt-2 hidden text-sm leading-relaxed text-gray-400 min-[400px]:block">
                    {item.description}
                  </p>

                  <div className="mt-4 flex w-full flex-col items-center rounded-xl border border-teal/30 bg-teal/15 px-3 py-2.5">
                    <span className="font-heading text-xl font-bold text-teal sm:text-2xl">
                      {item.stat.prefix ? (
                        <>
                          {item.stat.prefix}
                          {item.stat.value}
                          {item.stat.suffix}
                        </>
                      ) : (
                        <CountUpNumber
                          value={item.stat.value}
                          suffix={item.stat.suffix}
                        />
                      )}
                    </span>
                    <span className="mt-0.5 text-[0.65rem] uppercase tracking-wider text-gray-400 sm:text-xs">
                      {item.stat.label}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
