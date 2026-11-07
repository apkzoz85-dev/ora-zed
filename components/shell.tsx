import type { Metadata } from "next";
import Script from "next/script";
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
      name: "ZED East by ORA",
      description: "ORA Developers community in New Cairo (Fifth Settlement) around the 40-acre ZED Sports Club: Club Side Residence, The Emerald Collection and ZED Strip.",
      address: { "@type": "PostalAddress", addressLocality: "South 90th St., Fifth Settlement, New Cairo", addressCountry: "EG" },
    },
  ],
};

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
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

