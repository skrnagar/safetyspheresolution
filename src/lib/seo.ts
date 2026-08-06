import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = "/opengraph-image",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const allKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords])
  );

  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Industrial Safety Consulting",
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        en: url,
      },
    },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": "Nagpur, Raipur",
      "ai-content-declaration": "human-authored-business-content",
    },
  };
}

export const homeMetadata = buildMetadata({
  title: `${siteConfig.name} | Fire Safety, EHS & Digital Safety Consultant India`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Fire Safety Consultant Nagpur",
    "Fire Safety Consultant Raipur",
    "Best EHS Consultant India",
  ],
});
