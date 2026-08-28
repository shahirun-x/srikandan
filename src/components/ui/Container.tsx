import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * The single source of truth for page gutters and max width. Uses the
 * px-4 / sm:px-6 / lg:px-8 rhythm so nothing ever touches the viewport edge.
 */
export function Container({ as: As = "div", className, children }: ContainerProps) {
  return (
    <As className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </As>
  );
}
