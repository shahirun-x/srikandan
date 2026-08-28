import { Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function TestimonialCard({
  data,
  className,
}: {
  data: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-teal/30" aria-hidden />
        <StarRating rating={data.rating} />
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-text sm:text-base">
        “{data.quote}”
      </blockquote>
      <figcaption className="border-t border-navy/10 pt-4">
        <span className="block font-heading text-sm font-bold text-navy">
          {data.name}
        </span>
        <span className="block text-xs text-slate-text">{data.role}</span>
      </figcaption>
    </figure>
  );
}
