import Script from "next/script";
import "@/app/globals.css";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/content";

export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e1c19" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap" />
      </head>
      <body className="antialiased">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gtagId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${site.gtagId}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
