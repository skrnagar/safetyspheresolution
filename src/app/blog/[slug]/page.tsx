import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/site-content";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [post.category, "Industrial Safety", "EHS India"],
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        id="article-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd id="article-schema" data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.date} · ${post.readTime} read`}
      />
      <article className="py-16 md:py-20" itemScope itemType="https://schema.org/Article">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="datePublished" content={post.date} />
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg leading-relaxed text-slate-700" itemProp="description">
            {post.excerpt}
          </p>
          <p className="mt-6 leading-relaxed text-slate-600" itemProp="articleBody">
            Safety Sphere Solution supports organizations with practical Fire
            Safety, EHS, ESG, and Digital Safety programs. This article is part
            of our knowledge series for industrial leaders seeking stronger
            compliance, safer operations, and technology-enabled risk control.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            For site-specific guidance—Fire NOC readiness, LOTO implementation,
            safety audits, or AI monitoring—speak with our consultants for a
            free consultation.
          </p>
          <div className="mt-10 not-prose">
            <Button asChild>
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
