import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/gallery"],
      disallow: ["/admin/"],
    },
    sitemap: "https://bangeyhodhy.com/sitemap.xml",
  };
}
