import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/layout/BackToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";

// Below-fold sections are code-split so the initial payload stays lean.
const CoreValues = dynamic(() =>
  import("@/components/sections/CoreValues").then((m) => m.CoreValues),
);
const AboutUs = dynamic(() =>
  import("@/components/sections/AboutUs").then((m) => m.AboutUs),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services),
);
const BrandMarquee = dynamic(() =>
  import("@/components/sections/BrandMarquee").then((m) => m.default),
);
const Industries = dynamic(() =>
  import("@/components/sections/Industries").then((m) => m.Industries),
);
const ClientsTrust = dynamic(() =>
  import("@/components/sections/ClientsTrust").then((m) => m.ClientsTrust),
);
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((m) => m.default),
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection),
);
const Faq = dynamic(() => import("@/components/sections/Faq").then((m) => m.Faq));
const BlogPreview = dynamic(() =>
  import("@/components/sections/BlogPreview").then((m) => m.BlogPreview),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact),
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((m) => m.Footer),
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreValues />
        <AboutUs />
        <Process />
        <Services />
        <BrandMarquee />
        <Industries />
        {/* gray → navy (into the testimonials / why-us dark band) */}
        <div aria-hidden className="h-16 bg-gradient-to-b from-gray-50 to-[#0A1628]" />
        <ClientsTrust />
        <WhyChooseUs />
        {/* navy → teal (into the CTA gradient) */}
        <div aria-hidden className="h-12 bg-gradient-to-b from-[#0A1628] to-[#4BBFB4]" />
        <CTASection />
        {/* navy → gray (out of the CTA gradient) */}
        <div aria-hidden className="h-16 bg-gradient-to-b from-[#0A1628] to-gray-50" />
        <Faq />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
