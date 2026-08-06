import { blogPosts, faqs, services } from "@/content/site-content";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export function JsonLd({ data, id }: { data: JsonLd; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["Safety Sphere", "Safety Sphere Solution India"],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl("/brand/ss-logo-trimmed.png"),
    image: absoluteUrl("/opengraph-image"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: "2020",
    slogan: siteConfig.tagline,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Invoice, Bank Transfer, UPI",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    address: siteConfig.locations.map((loc) => ({
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "IN",
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter].filter(
      Boolean
    ),
    knowsAbout: [...siteConfig.keywords],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Safety Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.short,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/services?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: (typeof services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.short,
    url: absoluteUrl(`/services/${service.slug}`),
    image: service.image,
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "IN",
    serviceType: service.title,
    category: "Industrial Safety",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: service.items.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
}

export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/ss-logo-trimmed.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
    keywords: post.category,
    inLanguage: "en-IN",
  };
}

export function speakableSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.name,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "[data-speakable]"],
    },
    url: siteConfig.url,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
  };
}

export function OrganizationJsonLd() {
  return (
    <>
      <JsonLd id="org-schema" data={organizationSchema()} />
      <JsonLd id="website-schema" data={websiteSchema()} />
    </>
  );
}
