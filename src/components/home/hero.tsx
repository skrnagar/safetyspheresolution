"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "@/content/site-content";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-[min(88svh,720px)] overflow-hidden bg-brand-navy text-white sm:min-h-[min(90vh,820px)]">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} industrial safety environment`}
              fill
              priority={index === 0}
              quality={65}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#07152f]/90 via-[#0b1f45]/88 to-[#0b1f45]/95 sm:bg-gradient-to-r sm:from-[#07152f]/96 sm:via-[#0b1f45]/82 sm:to-[#0b1f45]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,57,70,0.28),transparent_42%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[min(88svh,720px)] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[min(90vh,820px)] sm:justify-center sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-white xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Safety Sphere Solution
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-4 max-w-3xl font-sans text-lg font-semibold leading-snug tracking-tight text-white sm:mt-6 sm:text-2xl md:text-3xl"
        >
          360° Fire, EHS & Digital Safety Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          data-speakable
          className="mt-3 max-w-xl text-sm leading-relaxed text-white/78 sm:mt-5 sm:text-base md:text-lg"
        >
          Empowering Industries with Safer, Smarter and Sustainable Workplaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <Button asChild size="lg" className="h-12 w-full sm:w-auto">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="light" className="h-12 w-full sm:w-auto">
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs">
            {slide.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(i)}
                className={`min-h-8 min-w-8 rounded-full p-2 transition-all ${
                  i === index ? "bg-brand-red/20" : "bg-transparent"
                }`}
                aria-label={`Show ${item.title} background`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-brand-red" : "w-4 bg-white/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
