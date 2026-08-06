"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site-content";
import { siteConfig } from "@/lib/site";
import { cn, formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchDialog } from "@/components/layout/search-dialog";
import { BrandLogo } from "@/components/shared/brand-logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(
    "Services"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-slate-200/60 bg-white/90 backdrop-blur-md"
      )}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          className="group min-w-0 max-w-[58%] shrink sm:max-w-none"
          aria-label="Safety Sphere Solution home"
        >
          <BrandLogo priority className="h-8 sm:h-10 lg:h-11" />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            const hasChildren = "children" in item && item.children?.length;
            const isMega = "mega" in item && item.mega;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-brand-navy"
                  aria-expanded={openMenu === item.label}
                  onClick={() =>
                    setOpenMenu((v) => (v === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {openMenu === item.label ? (
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2",
                      isMega ? "w-[38rem]" : "w-64"
                    )}
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                      <div
                        className={cn(
                          "grid gap-1",
                          isMega
                            ? "max-h-[28rem] grid-cols-2 overflow-y-auto"
                            : "grid-cols-1"
                        )}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-lg px-3 py-2.5 transition hover:bg-slate-50"
                          >
                            <span className="block text-sm font-semibold text-brand-navy">
                              {child.label}
                            </span>
                            {"description" in child && child.description ? (
                              <span className="mt-0.5 block text-xs text-slate-500">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-2">
          <a
            href={formatPhoneHref(siteConfig.phone)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-navy hover:bg-slate-100 xl:hidden"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-5 w-5 text-brand-red" />
          </a>
          <div className="hidden sm:block">
            <SearchDialog />
          </div>
          <a
            href={formatPhoneHref(siteConfig.phone)}
            className="hidden items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-brand-navy hover:bg-slate-100 lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-brand-red" />
            {siteConfig.phone}
          </a>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get Consultation</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)+var(--safe-top))] z-50 flex flex-col border-t border-slate-200 bg-white xl:hidden">
          <nav
            className="flex-1 space-y-2 overflow-y-auto overscroll-contain px-3 py-4 pb-28"
            aria-label="Mobile"
          >
            {navigation.map((item) => {
              const hasChildren = "children" in item && item.children?.length;
              const expanded = mobileAccordion === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex min-h-12 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-base font-semibold text-brand-navy"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-xl border border-slate-200"
                >
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between px-4 text-left text-base font-semibold text-brand-navy"
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileAccordion((v) =>
                        v === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition",
                        expanded && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded ? (
                    <div className="space-y-1 border-t border-slate-100 bg-white px-2 py-2">
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-brand-red"
                      >
                        View all {item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-3 text-sm text-slate-700 active:bg-slate-50"
                        >
                          <span className="font-medium text-brand-navy">
                            {child.label}
                          </span>
                          {"description" in child && child.description ? (
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white p-3 pb-[max(0.75rem,var(--safe-bottom))]">
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="h-12">
                <a href={formatPhoneHref(siteConfig.phone)}>Call Now</a>
              </Button>
              <Button asChild className="h-12">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
