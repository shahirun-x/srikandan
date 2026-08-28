"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { TEAM } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Team() {
  return (
    <section className="bg-light-gray py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="The people"
          title="Meet Our Expert Team"
          description="Named roles now — real photos and bios can be added as the client is ready."
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
              className="flex flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white p-7 text-center shadow-card"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal/10 text-teal">
                <UserRound className="h-10 w-10" strokeWidth={1.4} aria-hidden />
              </span>
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
