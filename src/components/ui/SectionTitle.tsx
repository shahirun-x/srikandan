"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "text-xs font-bold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-teal-dark" : "text-teal-light",
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-3xl font-extrabold leading-tight sm:text-4xl md:text-[2.75rem]",
          tone === "dark" ? "text-navy" : "text-white",
        )}
      >
        {title}
      </motion.h2>
      <motion.span
        variants={fadeUp}
        className={cn(
          "h-1 w-16 rounded-full bg-gold",
          isCenter ? "mx-auto" : "",
        )}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-slate-text" : "text-white/70",
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
