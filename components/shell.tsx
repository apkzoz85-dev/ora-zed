import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "@fontsource-variable/alexandria";
import "@fontsource/cormorant-garamond/600.css";
import { site } from "@/lib/site";
import { href, type Lang } from "@/lib/content";
import { SITES, type ProjectKey } from "@/lib/projects";

/** الدومين بدون / في الآخر — حتى لا تتكرر الشرطة في الروابط */
const ROOT = site.url.replace(/\/+$/, "");

export function pageMeta(lang: Lang, path = "/", extra: Partial<Metadata> = {}, project: ProjectKey = "zed-east"): Metadata {
  const t = SITES[project][lang];
  const m = t.meta;
  return {
    metadataBase: new URL(site.url),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `${ROOT}${href(lang, path) === "/" ? "" : href(lang, path)}`,
      languages: { ar: `${ROOT}${path === "/" ? "" : path}`, en: `${ROOT}${href("en", path)}` },
    },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      url: `${ROOT}${href(lang, path)}`,
      siteName: `${t.brand} by ORA`,
      title: m.title,
      description: m.description,
      images: [{ url: t.media.og, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [t.media.og] },
    robots: { index: true, follow: true },
    ...extra,
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "RealEstateAgent", name: site.agency, url: site.url, telephone: site.phoneIntl, email: site.email, areaServed: "Cairo, Egypt" },
  ],
};

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
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
