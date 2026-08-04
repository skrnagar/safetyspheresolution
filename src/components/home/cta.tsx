import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-[#132b57] to-brand-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(230,57,70,0.28),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
          Ready to Build a Safer Workplace?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 md:text-lg">
          Schedule Your Free Consultation Today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={formatPhoneHref(siteConfig.phone)}>Call Now</a>
          </Button>
          <Button asChild size="lg" variant="light">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
