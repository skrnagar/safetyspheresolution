"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { blogPosts, services } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const searchable = [
  ...services.map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`,
    type: "Service",
  })),
  ...blogPosts.map((p) => ({
    title: p.title,
    href: `/blog/${p.slug}`,
    type: "Blog",
  })),
  { title: "About Us", href: "/about", type: "Page" },
  { title: "Industries", href: "/industries", type: "Page" },
  { title: "Contact", href: "/contact", type: "Page" },
  { title: "Careers", href: "/careers", type: "Page" },
  { title: "FAQ", href: "/faq", type: "Page" },
  { title: "Downloads", href: "/downloads", type: "Page" },
];

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchable.slice(0, 8);
    return searchable.filter((item) => item.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open search"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-brand-navy/50 px-4 pt-[12vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0f1c35]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-slate-100 p-3 dark:border-white/10">
              <Search className="ml-1 h-4 w-4 text-slate-400" />
              <Input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, pages, articles..."
                className="border-0 shadow-none focus-visible:ring-0"
              />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ul className="max-h-80 overflow-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-6 text-center text-sm text-slate-500">
                  No results found.
                </li>
              ) : (
                results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <span className="font-medium text-brand-navy dark:text-white">
                        {item.title}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-slate-400">
                        {item.type}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
