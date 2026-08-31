"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const TAG_STYLES: Record<string, string> = {
  teal: "bg-teal text-white",
  navy: "bg-navy text-white",
  gold: "bg-gold text-navy",
};

export function BlogPreview() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="From the team"
          title="IT Insights & Resources"
          description="Practical guidance for business leaders navigating technology decisions."
        />

        {/* mobile: horizontal snap-scroll · md+: 3-column grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:mt-14 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group flex h-full w-[300px] max-w-[82vw] flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift md:w-auto md:max-w-none md:flex-shrink"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 300px, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide shadow-sm ${
                    TAG_STYLES[post.categoryColor] ?? TAG_STYLES.teal
                  }`}
                >
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-heading text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-text">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-navy/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-text">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-teal hover:text-teal">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Container>
    </section>
  );
}
