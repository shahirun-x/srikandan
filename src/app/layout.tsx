import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { RevealFailsafe } from "@/components/layout/RevealFailsafe";
import { PageLoader } from "@/components/layout/PageLoader";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { COMPANY } from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.srikandan.in";
const DESCRIPTION =
  "Sri Kandan Solutions is a premier IT system integration company in Chennai, delivering reliable IT products and comprehensive services across cloud, networking, security and managed IT.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sri Kandan Solutions — Advanced IT Solutions in Chennai",
    template: "%s · Sri Kandan Solutions",
  },
  description: DESCRIPTION,
  keywords: [
    "IT system integration Chennai",
    "managed IT services",
    "cloud solutions",
    "networking solutions",
    "cybersecurity services",
    "IT products",
    "Sri Kandan Solutions",
  ],
  authors: [{ name: "Sri Kandan Solutions" }],
  alternates: { canonical: SITE_URL },
  icons: {
    apple: "/logo_jpg.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sri Kandan Solutions",
    title: "Sri Kandan Solutions — Advanced IT Solutions in Chennai",
    description: DESCRIPTION,
    images: [{ url: "/logo_jpg.jpeg", width: 432, height: 432, alt: "Sri Kandan Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Sri Kandan Solutions — Advanced IT Solutions in Chennai",
    description: DESCRIPTION,
    images: ["/logo_jpg.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sri Kandan Solutions",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+91-94450-48855",
  email: COMPANY.email,
  image: `${SITE_URL}/logo_jpg.jpeg`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New No.64, Kothaval Chavadi Street, Saidapet",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [COMPANY.whatsapp],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <PageLoader />
          <ToastProvider>{children}</ToastProvider>
          <CookieConsent />
          <RevealFailsafe />
        </MotionProvider>
      </body>
    </html>
  );
}
