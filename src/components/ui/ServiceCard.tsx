"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Show the "Learn more" affordance (hidden on the dedicated services page). */
  showLearnMore?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  showLearnMore = true,
}: ServiceCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-navy/10 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:bg-teal hover:shadow-lift"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </span>
      <h3 className="font-heading text-lg font-bold text-navy transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-slate-text transition-colors duration-300 group-hover:text-white/90">
        {description}
      </p>
      {showLearnMore && (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark transition-colors duration-300 group-hover:text-white">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      )}
    </motion.article>
  );
}
