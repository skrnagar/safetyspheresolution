import Link from "next/link";
import { blogPosts } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { JsonLd, breadcrumbSchema } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog — Fire Safety, EHS & Digital Safety Insights",
  description:
    "Practical articles on Fire NOC, LOTO implementation, AI safety monitoring, and industrial EHS best practices from Safety Sphere Solution.",
  path: "/blog",
  keywords: [
    "Fire Safety Blog India",
    "EHS Best Practices",
    "LOTO Implementation Guide",
  ],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        id="blog-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
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
              className="border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                {post.category}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold text-brand-navy">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs text-slate-500">
                <time dateTime={post.date}>{post.date}</time> · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
