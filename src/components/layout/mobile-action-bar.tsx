"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";

export function MobileActionBar() {
  const whatsapp = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello Safety Sphere Solution, I would like a free consultation."
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
      <div
        className="mx-auto grid max-w-lg grid-cols-3 gap-2 px-3 pt-2"
        style={{ paddingBottom: "max(0.5rem, var(--safe-bottom))" }}
      >
        <a
          href={formatPhoneHref(siteConfig.phone)}
          className="inline-flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-brand-navy text-white"
        >
          <Phone className="h-4 w-4" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-[#25D366] text-white"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-brand-red text-white"
        >
          <span className="text-sm font-bold leading-none">Quote</span>
          <span className="text-[11px] font-semibold">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
