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
    <section className="relative min-h-[min(90vh,820px)] overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} industrial safety environment`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152f]/96 via-[#0b1f45]/82 to-[#0b1f45]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(230,57,70,0.28),transparent_42%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[min(90vh,820px)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Safety Sphere Solution
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-6 max-w-3xl font-sans text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl"
        >
          360° Fire, EHS & Digital Safety Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          data-speakable
          className="mt-5 max-w-xl text-base leading-relaxed text-white/78 md:text-lg"
        >
          Empowering Industries with Safer, Smarter and Sustainable Workplaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="light">
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            {slide.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-brand-red" : "w-5 bg-white/35"
                }`}
                aria-label={`Show ${item.title} background`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
