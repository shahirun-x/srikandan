import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageHero } from "@/components/ui/PageHero";
import { IndustriesDetail } from "@/components/sections/IndustriesDetail";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/constants";

const DESCRIPTION =
  "Industry-specific IT solutions from Sri Kandan Solutions — tailored packages for startups, retail, education, healthcare, manufacturing and corporate offices in Chennai and Tamil Nadu.";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: "Industries We Serve · Sri Kandan Solutions",
    description: DESCRIPTION,
    url: `${SITE_URL}/industries`,
    type: "website",
    images: [{ url: "/logo_jpg.jpeg", width: 432, height: 432, alt: "Sri Kandan Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Industries We Serve · Sri Kandan Solutions",
    description: DESCRIPTION,
    images: ["/logo_jpg.jpeg"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Industries We Serve"
          subtitle="We bring sector-specific knowledge to every engagement — from compliance needs to budget realities."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
          ]}
        />
        <IndustriesDetail />
        <CTASection
          title="Looking for solutions built for your sector?"
          subtitle="Let's map the right products and services to your industry's needs."
          secondaryLabel="Contact Us"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
