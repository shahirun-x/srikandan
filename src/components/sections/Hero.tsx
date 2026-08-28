"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  ShieldCheck,
  Network,
  Code2,
  Database,
  Headphones,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { TypingTagline } from "@/components/ui/TypingTagline";
import { PartnerStrip } from "@/components/ui/PartnerStrip";
import {
  HERO_STATS,
  COMPANY,
  ROTATING_TAGLINES,
  PARTNER_WORDMARKS,
} from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

const TILES = [
  { icon: Server, label: "Servers", delay: "0s", spin: "animate-float-slow" },
  { icon: Cloud, label: "Cloud", delay: "0.6s", spin: "animate-float-medium" },
  { icon: ShieldCheck, label: "Security", delay: "1.1s", spin: "animate-float-slow" },
  { icon: Network, label: "Network", delay: "0.3s", spin: "animate-float-medium" },
  { icon: Code2, label: "Software", delay: "0.9s", spin: "animate-float-slow" },
  { icon: Database, label: "Storage", delay: "1.4s", spin: "animate-float-medium" },
  { icon: Wrench, label: "Managed", delay: "0.5s", spin: "animate-float-medium" },
  { icon: Headphones, label: "Support", delay: "1.2s", spin: "animate-float-slow" },
];

function Tile({
  Icon,
  label,
  delay,
  spin,
  teal,
}: {
  Icon: typeof Server;
  label: string;
  delay: string;
  spin: string;
  teal: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-navy/10 bg-white/80 p-2 shadow-card backdrop-blur sm:p-3 ${spin} ${
        teal ? "text-teal" : "text-gold-dark"
      }`}
      style={{ animationDelay: delay }}
    >
      <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
      <span className="text-[0.6rem] font-semibold text-slate-text sm:text-[0.65rem]">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] scroll-mt-24 flex-col justify-center overflow-hidden bg-white pb-10 pt-32 md:min-h-screen md:pt-28"
    >
      {/* background */}
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full sm:h-[36rem] sm:w-[36rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(75,191,180,0.28) 0%, rgba(75,191,180,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 h-[24rem] w-[24rem] rounded-full sm:h-[30rem] sm:w-[30rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,56,0.16) 0%, rgba(232,168,56,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-5 sm:gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-teal-dark sm:text-xs sm:tracking-[0.18em]"
          >
            IT System Integration · Chennai
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Empowering Businesses with{" "}
            <span className="text-gradient">Advanced IT Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base font-semibold text-navy/80 sm:text-lg"
          >
            Expertise in{" "}
            <TypingTagline phrases={ROTATING_TAGLINES} className="inline-flex" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm leading-relaxed text-slate-text sm:text-base"
          >
            Delivering reliable IT products and comprehensive services that drive
            efficiency, innovation and growth.
          </motion.p>

          <motion.div variants={fadeUp} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button href="/#services" size="lg" className="w-full sm:w-auto">
              Our Services
            </Button>
            <Button href="/#contact" size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-4 grid w-full grid-cols-2 gap-x-4 gap-y-5 border-t border-navy/10 pt-6 sm:mt-6 sm:gap-x-6 sm:gap-y-6 sm:pt-8 lg:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate-text sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* animated tech grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[17rem] sm:max-w-sm lg:max-w-md"
          aria-hidden
        >
          <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-teal/10 via-transparent to-gold/10" />
          <div className="absolute inset-0 rounded-[2.5rem] border border-navy/10" />
          <div className="grid h-full grid-cols-3 grid-rows-3 gap-3 p-6 sm:gap-4 sm:p-8">
            {TILES.slice(0, 4).map(({ icon: Icon, label, delay, spin }, i) => (
              <Tile key={label} Icon={Icon} label={label} delay={delay} spin={spin} teal={i % 2 === 0} />
            ))}
            <div className="flex items-center justify-center rounded-2xl bg-navy text-white shadow-lift">
              <span className="font-heading text-xl font-extrabold sm:text-2xl">SK</span>
            </div>
            {TILES.slice(4).map(({ icon: Icon, label, delay, spin }, i) => (
              <Tile key={label} Icon={Icon} label={label} delay={delay} spin={spin} teal={i % 2 === 1} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* trusted partners strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:mt-16 lg:px-8"
      >
        <div className="border-t border-navy/10 pt-6">
          <PartnerStrip
            label="Trusted Technology Partners"
            names={PARTNER_WORDMARKS}
          />
        </div>
      </motion.div>

      <a
        href={COMPANY.phonePrimaryHref}
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-4 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Call {COMPANY.phonePrimary}
      </a>
    </section>
  );
}
