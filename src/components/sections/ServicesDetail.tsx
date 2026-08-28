"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICE_TABS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesDetail() {
  return (
    <>
      {SERVICE_TABS.map((tab, tabIndex) => (
        <section
          key={tab.id}
          id={tab.id}
          className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${
            tabIndex % 2 === 1 ? "bg-light-gray" : "bg-white"
          }`}
        >
          <Container>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">
                    {`0${tabIndex + 1}`}
                  </span>
                  {tab.badge && (
                    <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-gold-dark">
                      {tab.badge}
                    </span>
                  )}
                </span>
                <h2 className="text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl">
                  {tab.label}
                </h2>
                <span className="h-1 w-16 rounded-full bg-gold" />
                <p className="max-w-2xl text-base leading-relaxed text-slate-text">
                  {tab.blurb}
                </p>
              </motion.div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tab.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      variants={fadeUp}
                      className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="font-heading text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-slate-text">
                        {item.description}
                      </p>
                      <Button
                        href="/#contact"
                        variant="outline"
                        size="md"
                        className="w-full sm:w-auto"
                      >
                        Request Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>
      ))}
    </>
  );
}
