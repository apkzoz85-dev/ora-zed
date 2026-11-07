import type { Metadata } from "next";
import LandingPage from "@/components/page";
import { C } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: C.ar.meta.title,
  description: C.ar.meta.description,
  alternates: { canonical: "/", languages: { ar: "/", en: "/en" } },
  openGraph: { title: C.ar.meta.title, description: C.ar.meta.description, images: ["/images/hero.jpg"], locale: "ar_EG", type: "website" },
};

export default function Page() {
  return <LandingPage lang="ar" />;
}
