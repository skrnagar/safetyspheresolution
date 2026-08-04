"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello Safety Sphere Solution, I would like a free consultation."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
