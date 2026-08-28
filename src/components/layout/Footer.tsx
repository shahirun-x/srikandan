import Link from "next/link";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";
import { FOOTER_SERVICES, COMPANY } from "@/lib/constants";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedinIcon },
  { label: "WhatsApp", href: COMPANY.whatsapp, icon: WhatsappIcon },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container className="grid gap-10 py-14 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed">
            A premier IT system integration company in Chennai, delivering reliable
            products and end-to-end services that drive efficiency, innovation and
            growth.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h3>
          <ul className="mt-5 flex flex-col gap-1 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Services
          </h3>
          <ul className="mt-5 flex flex-col gap-1 text-sm">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-teal"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
            Contact
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" />
              <span className="flex flex-col gap-1">
                <a
                  href={COMPANY.phonePrimaryHref}
                  className="inline-flex min-h-[36px] items-center text-base hover:text-teal"
                >
                  {COMPANY.phonePrimary}
                </a>
                <a
                  href={COMPANY.phoneSecondaryHref}
                  className="inline-flex min-h-[36px] items-center text-base hover:text-teal"
                >
                  {COMPANY.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex min-h-[36px] items-center break-all text-base hover:text-teal"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" />
              <a
                href={COMPANY.websiteHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[36px] items-center hover:text-teal"
              >
                {COMPANY.website}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-xs text-white/50">
          © 2024 Sri Kandan Solutions. All Rights Reserved.
        </Container>
      </div>
    </footer>
  );
}
