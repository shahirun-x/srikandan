import type { Metadata } from "next";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-white px-4 text-center">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <Logo />
        <p className="font-heading text-7xl font-extrabold text-teal">404</p>
        <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-slate-text">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Button href="/" size="lg">
          Go Home
        </Button>
      </div>
    </main>
  );
}
