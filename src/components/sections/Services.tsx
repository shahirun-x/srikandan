"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SERVICE_TABS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(SERVICE_TABS[0].id);
  const activeTab = SERVICE_TABS.find((t) => t.id === active) ?? SERVICE_TABS[0];

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format"
        alt=""
        loading="lazy"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full object-cover opacity-[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div
        className="pointer-events-none absolute right-0 top-32 h-96 w-96 max-w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(75,191,180,0.12) 0%, rgba(75,191,180,0) 70%)",
        }}
      />
      <Container className="relative">
        <SectionTitle
          eyebrow="What we deliver"
          title="Our Products & Services"
          description="One partner across hardware, services and software — specified, deployed and supported."
        />

        {/* tabs — horizontally scrollable on mobile */}
        <div className="mt-10 sm:mt-12">
          <div
            role="tablist"
            aria-label="Service categories"
            className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:justify-center sm:px-0"
          >
            <div className="inline-flex flex-shrink-0 gap-1 rounded-full border border-navy/10 bg-light-gray p-1.5">
              {SERVICE_TABS.map((tab) => {
                const selected = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActive(tab.id)}
                    className={cn(
                      "relative flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:px-5",
                      selected ? "text-white" : "text-navy/70 hover:text-navy",
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="service-tab"
                        className="absolute inset-0 rounded-full bg-teal"
                        transition={{ type: "spring", stiffness: 360, damping: 32 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {tab.label}
                      {tab.badge && (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide",
                            selected
                              ? "bg-white/20 text-white"
                              : "bg-gold/20 text-gold-dark",
                          )}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-medium text-slate-text">
          {activeTab.blurb}
        </p>

        <motion.div
          key={activeTab.id}
          id={`panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.id}`}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, staggerChildren: 0.07 },
            },
          }}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3"
        >
          {activeTab.items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
