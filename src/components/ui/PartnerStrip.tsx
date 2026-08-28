import { cn } from "@/lib/cn";

interface PartnerStripProps {
  label: string;
  names: string[];
  className?: string;
}

/**
 * Credibility strip of vendor wordmarks. These are plain styled text, not real
 * brand logos — an accurate, low-risk way to signal vendor breadth.
 */
export function PartnerStrip({ label, names, className }: PartnerStripProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-text/70">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-4 sm:gap-x-10">
        {names.map((name) => (
          <span
            key={name}
            className="font-heading text-lg font-extrabold tracking-tight text-navy/35 grayscale transition-all duration-300 hover:text-navy/60 sm:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
