import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { site } from "@/lib/site";

/** الدومين بدون / في الآخر — حتى لا تتكرر الشرطة في الروابط */
const ROOT = site.url.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you", "/en/thank-you", "/*/thank-you"] },
    sitemap: `${ROOT}/sitemap.xml`,
  };
}
