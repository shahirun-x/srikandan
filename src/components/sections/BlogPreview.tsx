"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const TAG_STYLES: Record<string, string> = {
  teal: "bg-teal/10 text-teal-dark",
  navy: "bg-navy/10 text-navy",
  gold: "bg-gold/15 text-gold-dark",
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
      </Container>

      {/* mobile: horizontal snap scroll · md+: 3-column grid */}
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mt-14 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group flex h-full min-w-[280px] shrink-0 snap-center flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift md:min-w-0 md:shrink"
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide ${
                  TAG_STYLES[post.categoryColor] ?? TAG_STYLES.teal
                }`}
              >
                {post.category}
              </span>
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
