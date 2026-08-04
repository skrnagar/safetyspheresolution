import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Blog | Fire Safety, EHS & Digital Safety Insights",
  description:
    "Practical articles on Fire NOC, LOTO implementation, AI safety monitoring, and industrial EHS best practices.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights for safer, smarter operations"
        description="Guidance for plant leaders, EHS managers, and compliance teams."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                {post.category}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold text-brand-navy dark:text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs text-slate-500">
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
