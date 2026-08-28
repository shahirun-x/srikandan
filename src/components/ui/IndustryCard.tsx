"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export function IndustryCard({ name, description, icon: Icon }: IndustryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full w-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lift sm:p-7"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-teal transition-colors duration-300 group-hover:text-gold">
        <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
        <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </span>
      <h3 className="font-heading text-lg font-bold text-navy">{name}</h3>
      <p className="text-sm leading-relaxed text-slate-text">{description}</p>
    </motion.article>
  );
}
