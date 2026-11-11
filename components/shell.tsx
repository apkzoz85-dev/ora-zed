import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "@fontsource-variable/alexandria";
import "@fontsource/cormorant-garamond/600.css";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";

export function pageMeta(lang: Lang, path = "/", extra: Partial<Metadata> = {}): Metadata {
  const m = C[lang].meta;
  return {
    metadataBase: new URL(site.url),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `${site.url}${href(lang, path) === "/" ? "" : href(lang, path)}`,
      languages: { ar: `${site.url}${path === "/" ? "" : path}`, en: `${site.url}${href("en", path)}` },
    },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      url: `${site.url}${href(lang, path)}`,
      siteName: "ZED East by ORA",
      title: m.title,
      description: m.description,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: ["/images/og.jpg"] },
    robots: { index: true, follow: true },
    ...extra,
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "RealEstateAgent", name: site.agency, url: site.url, telephone: site.phoneIntl, email: site.email, areaServed: "New Cairo, Egypt" },
    {
      "@type": "Place",
      name: "ZED East by ORA — Levora Tower",
      description:
        "ORA Developers community in New Cairo (Fifth Settlement) around the 40-feddan ZED Sports Club: Levora Tower serviced residences, Club Side Residence, The Emerald Collection and ZED Strip.",
      address: { "@type": "PostalAddress", addressLocality: "South 90th St., Fifth Settlement, New Cairo", addressCountry: "EG" },
    },
  ],
};

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preload" as="image" href="/images/lv-hero-m.webp" media="(max-width: 640px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/lv-hero.webp" media="(min-width: 641px)" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        {/* Google Ads — بيشتغل تلقائياً أول ما تحط الـ ID في lib/site.ts */}
        {site.gtag && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gtag}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gtag}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
