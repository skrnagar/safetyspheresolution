import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/content/site-content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/contact",
    "/blog",
    "/careers",
    "/faq",
    "/downloads",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
