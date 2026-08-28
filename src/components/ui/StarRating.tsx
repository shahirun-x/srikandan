import { cn } from "@/lib/cn";

interface StarRatingProps {
  rating: number;
  className?: string;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill={filled ? "var(--color-gold)" : "none"}
      stroke="var(--color-gold)"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85z" />
    </svg>
  );
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}
