import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";
import { SITE_URL } from "@/lib/constants";

const DESCRIPTION =
  "Contact Sri Kandan Solutions in Saidapet, Chennai — call +91 94450 48855 or send a message for a free IT consultation.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact · Sri Kandan Solutions",
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: "/logo_jpg.jpeg", width: 432, height: 432, alt: "Sri Kandan Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Contact · Sri Kandan Solutions",
    description: DESCRIPTION,
    images: ["/logo_jpg.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Let's talk about your IT"
          subtitle="Tell us what you're planning. We'll get back to you with a clear, practical next step."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
