import { AnimateIn } from "@/components/shared/animate-in";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-12 text-white sm:py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.28),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          {eyebrow ? (
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red sm:mb-3 sm:text-[11px]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-display text-[1.85rem] font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base md:text-lg">
              {description}
            </p>
          ) : null}
        </AnimateIn>
      </div>
    </section>
  );
}
