import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_URL } from "@/lib/constants";

const DESCRIPTION =
  "Explore Sri Kandan Solutions' full range of IT products, IT services and software solutions — system integration, cloud, networking, managed IT, cybersecurity and more, delivered across Chennai.";

export const metadata: Metadata = {
  title: "Products & Services",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Products & Services · Sri Kandan Solutions",
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    type: "website",
    images: [{ url: "/logo_jpg.jpeg", width: 432, height: 432, alt: "Sri Kandan Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Products & Services · Sri Kandan Solutions",
    description: DESCRIPTION,
    images: ["/logo_jpg.jpeg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Our Products & Services"
          subtitle="One accountable partner across hardware, services and software — specified, deployed and supported."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />
        <ServicesDetail />
        <CTASection
          title="Need a Custom IT Solution? Let's Talk."
          subtitle="Tell us what you're planning and we'll come back with a clear, practical proposal."
          secondaryLabel="Send a Message"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
