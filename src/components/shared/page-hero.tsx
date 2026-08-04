import { AnimateIn } from "@/components/shared/animate-in";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
              {description}
            </p>
          ) : null}
        </AnimateIn>
      </div>
    </section>
  );
}
