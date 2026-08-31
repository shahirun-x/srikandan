"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const DOTS = Array.from({ length: 18 }, (_, i) => i);

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to Transform Your IT Infrastructure?",
  subtitle = "Get in touch with us today for a free consultation.",
  primaryLabel = "Call Now",
  primaryHref = COMPANY.phonePrimaryHref,
  secondaryLabel = "Send a Message",
  secondaryHref = "/#contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-teal via-teal-dark to-navy" />
      {/* floating dots — CSS only */}
      <div className="absolute inset-0" aria-hidden>
        {DOTS.map((d) => (
          <span
            key={d}
            className="absolute rounded-full bg-white/15 animate-float-medium"
            style={{
              width: `${6 + (d % 4) * 4}px`,
              height: `${6 + (d % 4) * 4}px`,
              left: `${(d * 53) % 100}%`,
              top: `${(d * 37) % 100}%`,
              animationDelay: `${(d % 6) * 0.5}s`,
              animationDuration: `${4 + (d % 5)}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.75rem]"
        >
          {title}
        </motion.h2>
        <motion.p variants={fadeUp} className="max-w-xl text-base text-white/85 sm:text-lg">
          {subtitle}
        </motion.p>
        <motion.div variants={fadeUp} className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href={primaryHref} variant="white" size="lg" className="w-full sm:w-auto">
            <Phone className="h-4 w-4" /> {primaryLabel}
          </Button>
          <Button
            href={secondaryHref}
            size="lg"
            variant="outline"
            className="w-full border-white/60 text-white hover:border-white hover:text-white sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" /> {secondaryLabel}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
