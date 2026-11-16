import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** الدومين بدون / في الآخر — حتى لا تتكرر الشرطة في الروابط */
const ROOT = site.url.replace(/\/+$/, "");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/zed-west", "/solana-west", "/solana-east", "/about", "/privacy", "/disclaimer"].map((p) => ({
    url: `${ROOT}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : p.includes("-") ? 0.9 : 0.4,
    alternates: { languages: { ar: `${ROOT}${p}`, en: `${ROOT}/en${p}` } },
  }));
}
