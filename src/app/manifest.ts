import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Safety Sphere",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B1F45",
    lang: "en-IN",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
