import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-[#132b57] to-brand-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(230,57,70,0.28),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
          Ready to Build a Safer Workplace?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 sm:mt-4 sm:text-base md:text-lg">
          Schedule Your Free Consultation Today.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button asChild size="lg" className="h-12 w-full sm:w-auto">
            <a href={formatPhoneHref(siteConfig.phone)}>Call Now</a>
          </Button>
          <Button asChild size="lg" variant="light" className="h-12 w-full sm:w-auto">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
