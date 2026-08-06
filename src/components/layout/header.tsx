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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="group min-w-0 shrink-0" aria-label="Safety Sphere Solution home">
          <BrandLogo priority className="" />
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
                          isMega ? "grid-cols-2 max-h-[28rem] overflow-y-auto" : "grid-cols-1"
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

        <div className="flex items-center gap-1 sm:gap-2">
          <SearchDialog />
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
            className="xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <nav
            className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-100"
              >
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-brand-navy"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <div className="border-t border-slate-100 px-2 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
