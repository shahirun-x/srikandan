"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const HOME_SECTION_IDS = [
  "home",
  "about",
  "process",
  "services",
  "industries",
  "why-us",
  "contact",
];

export function Navbar() {
  const { scrollY, scrolled } = useScrollProgress(80);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(isHome ? HOME_SECTION_IDS : []);
  const [open, setOpen] = useState(false);

  const atTop = scrollY < 8;

  // Lock body scroll while the mobile menu overlay is open.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  // Close the menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return isHome && activeSection === href.slice(2);
    }
    if (href === "/") return isHome && (activeSection === "home" || atTop);
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* announcement bar — only while at the very top of the page */}
      <div
        className={cn(
          "overflow-hidden bg-teal text-white transition-all duration-300 ease-out",
          atTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs font-medium sm:px-6 lg:px-8">
          <a
            href={COMPANY.phonePrimaryHref}
            className="inline-flex min-h-[24px] items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span>Call us: {COMPANY.phonePrimary}</span>
          </a>
          <span className="hidden text-white/40 sm:inline">|</span>
          <a
            href={`mailto:${COMPANY.email}`}
            className="hidden min-h-[24px] items-center gap-1.5 transition-opacity hover:opacity-80 sm:inline-flex"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            <span>{COMPANY.email}</span>
          </a>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-navy/10 bg-white/80 shadow-[0_4px_20px_-8px_rgb(10_22_40_/_0.15)] backdrop-blur-lg"
            : "border-b border-transparent bg-white/60 backdrop-blur-md",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
            scrolled ? "h-16" : "h-20",
          )}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Sri Kandan Solutions — home"
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      active ? "text-teal-dark" : "text-navy/70 hover:text-navy",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href="/#contact" size="md">
              Get In Touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 bg-white/70 text-navy lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* mobile menu overlay — CSS transitions so it stays reliable regardless
          of rAF throttling or reduced-motion preferences */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 text-navy"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-300 ease-out",
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-[48px] items-center rounded-xl px-4 text-lg font-bold transition-colors",
                    isActive(link.href)
                      ? "bg-teal/10 text-teal-dark"
                      : "text-navy hover:bg-light-gray",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button
              href="/#contact"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Get In Touch
            </Button>
            <a
              href={COMPANY.phonePrimaryHref}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-6 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" /> {COMPANY.phonePrimary}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
