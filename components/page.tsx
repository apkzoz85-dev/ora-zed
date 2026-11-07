import type { Lang } from "@/lib/content";
import { C } from "@/lib/content";
import Header from "./header";
import Hero from "./hero";
import Offers from "./offers";
import Prices from "./prices";
import Plans from "./plans";
import Gallery from "./gallery";
import About from "./about";
import Faq from "./faq";
import Contact from "./contact";
import { MobileBar, CookieConsent, Footer } from "./chrome";

export default function LandingPage({ lang }: { lang: Lang }) {
  const t = C[lang];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Offers lang={lang} />
        <Prices lang={lang} />
        <Plans lang={lang} />
        <Gallery lang={lang} />
        <About lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileBar lang={lang} />
      <CookieConsent lang={lang} />
    </>
  );
}
