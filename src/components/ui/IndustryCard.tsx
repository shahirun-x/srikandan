"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/motion";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export function IndustryCard({
  name,
  description,
  icon: Icon,
  image,
}: IndustryCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lift"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 300px, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="relative -mt-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-teal shadow-lift ring-4 ring-white transition-colors duration-300 group-hover:text-gold">
          <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-bold text-navy">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-text">{description}</p>
      </div>
    </motion.article>
  );
}
