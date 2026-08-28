import { cn } from "@/lib/cn";

interface LogoProps {
  /** "dark" for light backgrounds (navy text), "light" for dark backgrounds (white text). */
  tone?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
}

/**
 * Vector recreation of the Sri Kandan Solutions mark: an "SK" monogram inside a
 * teal ring, with the wordmark alongside. Drawn in code so it stays crisp at any
 * size and adapts to light/dark navbars — the raster logo lives in /public for
 * favicon and social cards.
 */
export function Logo({ tone = "dark", className, showWordmark = true }: LogoProps) {
  const wordTop = tone === "dark" ? "#0A1628" : "#FFFFFF";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Sri Kandan Solutions"
        className="h-10 w-10 shrink-0"
      >
        <circle cx="32" cy="32" r="30" fill="#4BBFB4" />
        <circle
          cx="32"
          cy="32"
          r="23"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="120 24"
          transform="rotate(-45 32 32)"
        />
        {/* S */}
        <text
          x="24"
          y="41"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="26"
          fontWeight="800"
          fill="#FFFFFF"
        >
          S
        </text>
        {/* K */}
        <text
          x="41"
          y="41"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="26"
          fontWeight="800"
          fill="#E8A838"
        >
          K
        </text>
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-heading text-lg font-extrabold tracking-tight"
            style={{ color: wordTop }}
          >
            SRI KANDAN
          </span>
          <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.35em] text-gold">
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}
