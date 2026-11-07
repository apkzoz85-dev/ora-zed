import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site, fmt, minPrice } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "مشاريع أورا 2026 | زد إيست · سولانا إيست · زد ويست · سولانا ويست — الأسعار والمتاح",
  description: `المتاح من أورا للتطوير العقاري: زد إيست (كلوب سايد ريزيدنس، ذا إميرالد، زد ستريب)، سولانا إيست، زد ويست، وسولانا ويست. تبدأ من ${fmt(
    minPrice
  )} جنيه، بمقدم يبدأ من 0% وتقسيط حتى 10 سنين.`,
  keywords: [
    "أورا للتطوير العقاري",
    "ORA Developers",
    "زد إيست",
    "ZED East",
    "ذا إميرالد زد إيست",
    "كلوب سايد ريزيدنس",
    "سولانا إيست",
    "Solana East",
    "زد ويست",
    "ZED West",
    "سولانا ويست",
    "مشاريع ساويرس",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: site.project,
    title: "مشاريع أورا — المتاح والأسعار",
    description: "زد إيست وسولانا إيست وزد ويست وسولانا ويست. مقدم من 0% وتقسيط حتى 10 سنين.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريع أورا — المتاح والأسعار",
    description: "زد إيست · سولانا إيست · زد ويست · سولانا ويست. مقدم من 0%.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#063d4c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: site.agency,
      url: site.url,
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "New Cairo, Egypt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "القاهرة الجديدة",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
    {
      "@type": "Place",
      name: "ZED East by ORA",
      description:
        "مجتمع متكامل من أورا للتطوير العقاري في التجمع الخامس، يضم نادي ZED الرياضي على 40 فدان وكلوب سايد ريزيدنس وذا إميرالد كوليكشن وزد ستريب.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "نهاية التسعين الجنوبي، التجمع الخامس",
        addressRegion: "القاهرة",
        addressCountry: "EG",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Google Ads — ضع الـ tag ID في lib/site.ts قبل النشر */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtag}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gtag}');`}
        </Script>
      </body>
    </html>
  );
}
