import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LiveChat } from "@/components/layout/live-chat";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { OrganizationJsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Fire Safety, EHS & Digital Safety Consultant India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${sourceSerif.variable} flex min-h-full flex-col bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <OrganizationJsonLd />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-brand-navy"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
