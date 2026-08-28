import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-heading tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white shadow-[0_10px_30px_-8px_rgb(75_191_180_/_0.7)] hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgb(75_191_180_/_0.75)]",
  outline:
    "border-2 border-navy/15 text-navy hover:border-teal hover:text-teal hover:-translate-y-0.5",
  ghost: "text-navy hover:bg-navy/5",
  white:
    "bg-white text-navy shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const external = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
