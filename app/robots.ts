import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you", "/en/thank-you"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
