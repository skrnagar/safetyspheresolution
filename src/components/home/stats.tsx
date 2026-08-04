"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/content/site-content";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const count = useCountUp(value, active && !reduceMotion);
  const display = reduceMotion ? value : count;

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-semibold text-white md:text-5xl">
        {display}
        <span className="text-brand-red">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-brand-navy py-14">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(230,57,70,0.18),transparent_40%,rgba(255,255,255,0.05))]" />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} active={inView} />
        ))}
      </div>
    </section>
  );
}
