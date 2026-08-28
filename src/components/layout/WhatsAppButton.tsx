"use client";

import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { COMPANY } from "@/lib/constants";

/**
 * Floating WhatsApp CTA. Sits above the back-to-top button (which offsets
 * itself when this is present). Expands to a label on hover / focus.
 */
export function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsappChat}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-4 z-40 inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg transition-all duration-300 hover:pr-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:right-6"
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[10rem] group-focus-visible:ml-2 group-focus-visible:max-w-[10rem]">
        Chat with us
      </span>
    </a>
  );
}
