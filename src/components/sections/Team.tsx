"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { TEAM } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Team() {
  return (
    <section className="bg-light-gray py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="The people"
          title="Meet Our Expert Team"
          description="Representative photos and role titles — real names and bios can be swapped in whenever the client is ready."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-teal/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={`${member.name} at Sri Kandan Solutions`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-text">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
