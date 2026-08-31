import Image from "next/image";
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
        "flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:p-10",
        className,
      )}
    >
      <StarRating rating={data.rating} />

      <blockquote className="mt-5 flex-1 text-lg italic leading-relaxed text-white/90 lg:text-xl">
        &ldquo;{data.quote}&rdquo;
      </blockquote>

      <div className="my-6 h-px bg-white/10" />

      <figcaption className="flex items-center gap-3">
        <Image
          src={data.avatar}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border-2 border-[#E8A838]/30 object-cover"
        />
        <div>
          <p className="font-semibold text-white">{data.name}</p>
          <p className="text-sm text-gray-400">{data.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
