"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { FAQS, SITE_URL } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
  url: `${SITE_URL}/#faq`,
};

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-light-gray py-16 sm:py-24 lg:py-28">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="Good to know" title="Frequently Asked Questions" />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-col gap-3 sm:mt-14"
        >
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white transition-colors hover:bg-teal/[0.03]"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-heading text-sm font-bold text-navy sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-teal bg-teal text-white" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                {/* CSS grid-rows collapse — smooth, and never leaves content
                    stranded if JS/animation is interrupted */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-text sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
