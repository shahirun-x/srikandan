"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface CountUpNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: CountUpNumberProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, threshold: 0.4 });
  const display = useCountUp(value, inView);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
