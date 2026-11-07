import type { Metadata } from "next";
import LandingPage from "@/components/page";
import { C } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: C.en.meta.title,
  description: C.en.meta.description,
  alternates: { canonical: "/en", languages: { ar: "/", en: "/en" } },
  openGraph: { title: C.en.meta.title, description: C.en.meta.description, images: ["/images/hero.jpg"], locale: "en_US", type: "website" },
};

export default function Page() {
  return <LandingPage lang="en" />;
}
