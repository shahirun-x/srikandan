import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageHero } from "@/components/ui/PageHero";
import { AboutUs } from "@/components/sections/AboutUs";
import { CoreValues } from "@/components/sections/CoreValues";
import { Journey } from "@/components/sections/Journey";
import { Team } from "@/components/sections/Team";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/constants";

const TITLE = "About Sri Kandan Solutions";
const DESCRIPTION =
  "Learn about Sri Kandan Solutions — a Chennai-based IT system integration company serving 150+ businesses across Tamil Nadu with products, cloud, networking, security and managed services.";

export const metadata: Metadata = {
  title: "About Us",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${TITLE} · Sri Kandan Solutions`,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: "/logo_jpg.jpeg", width: 432, height: 432, alt: "Sri Kandan Solutions" }],
  },
  twitter: {
    card: "summary",
    title: `${TITLE} · Sri Kandan Solutions`,
    description: DESCRIPTION,
    images: ["/logo_jpg.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About Sri Kandan Solutions"
          subtitle="A premier IT system integration company in Chennai, simplifying technology adoption for businesses across Tamil Nadu."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
          ]}
        />
        <AboutUs />
        <CoreValues id="about-values" />
        <Journey />
        <Team />
        <CTASection
          title="Want to know if we're the right fit?"
          subtitle="Have a conversation with our team — no obligation, no jargon."
          secondaryLabel="Contact Us"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
