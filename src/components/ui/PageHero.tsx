import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/constants";

export interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}

/**
 * Inner-page banner: teal→navy gradient, breadcrumb trail, single H1, and the
 * matching BreadcrumbList structured data.
 */
export function PageHero({ title, subtitle, crumbs }: PageHeroProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-dark to-navy pb-14 pt-28 text-white sm:pb-20 sm:pt-32">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top,white,transparent_75%)]" />
      <Container className="relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs font-semibold text-white/70 sm:text-sm">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  {last ? (
                    <span className="text-white" aria-current="page">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  )}
                  {!last && <ChevronRight className="h-3.5 w-3.5 text-white/40" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
