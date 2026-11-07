import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/privacy", "/disclaimer"].flatMap((p) => [
    { url: `${site.url}${p || "/"}`, priority: p ? 0.4 : 1, alternates: { languages: { en: `${site.url}/en${p}` } } },
    { url: `${site.url}/en${p}`, priority: p ? 0.3 : 0.9, alternates: { languages: { ar: `${site.url}${p || "/"}` } } },
  ]);
}
