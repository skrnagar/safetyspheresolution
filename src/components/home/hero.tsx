"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { heroSlides } from "@/content/site-content";
import { Button } from "@/components/ui/button";

const SLIDE_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, index]);

  const slide = heroSlides[index];

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    goTo(index + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      className="relative min-h-[min(88svh,760px)] overflow-hidden bg-brand-navy text-white sm:min-h-[min(90vh,860px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Safety Sphere Solution highlights"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              quality={65}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#07152f]/92 via-[#0b1f45]/90 to-[#0b1f45]/96 sm:bg-gradient-to-r sm:from-[#07152f]/96 sm:via-[#0b1f45]/84 sm:to-[#0b1f45]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,57,70,0.26),transparent_42%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[min(88svh,760px)] max-w-7xl flex-col justify-end px-4 pb-11 pt-24 sm:min-h-[min(90vh,860px)] sm:justify-center sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-white xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Safety Sphere Solution
        </p>

        <div className="relative mt-4 min-h-[11.5rem] sm:mt-6 sm:min-h-[12.5rem] md:min-h-[13.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red sm:text-xs">
                {slide.eyebrow}
              </p>
              <h1 className="mt-2 max-w-3xl font-sans text-lg font-semibold leading-snug tracking-tight text-white sm:mt-3 sm:text-2xl md:text-3xl lg:text-[2.15rem] lg:leading-tight">
                {slide.title}
              </h1>
              <p
                data-speakable
                className="mt-3 max-w-xl text-sm leading-relaxed text-white/78 sm:mt-4 sm:text-base md:text-lg"
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${slide.id}-cta`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
            >
              <Button asChild size="lg" className="h-12 w-full sm:w-auto">
                <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="light" className="h-12 w-full sm:w-auto">
                <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 sm:mt-14">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {heroSlides.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${item.label} slide`}
                  aria-current={active ? "true" : undefined}
                  className={`group relative flex min-h-10 items-center gap-2 rounded-full px-2 py-2 transition-colors ${
                    active ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`relative block h-1.5 overflow-hidden rounded-full bg-white/30 ${
                      active ? "w-10 sm:w-12" : "w-3.5"
                    }`}
                  >
                    {active && !reduceMotion ? (
                      <motion.span
                        key={`progress-${index}`}
                        className="absolute inset-y-0 left-0 bg-brand-red"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: SLIDE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    ) : null}
                    {active && reduceMotion ? (
                      <span className="absolute inset-0 bg-brand-red" />
                    ) : null}
                  </span>
                  <span
                    className={`hidden text-[11px] font-medium tracking-wide sm:inline ${
                      active ? "text-white" : "text-white/55"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
