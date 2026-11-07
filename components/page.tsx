import type { Lang } from "@/lib/content";
import Header from "./header";
import Hero from "./hero";
import Products from "./products";
import Units from "./units";
import Compare from "./compare";
import Calculator from "./calculator";
import LeadForm from "./lead-form";
import { Amenities, Numbers, Location, Why, Developer, Gallery, Faq } from "./sections";
import { FloatingCtas, MobileBar, LeadPopup, CookieConsent, Footer } from "./chrome";

export default function Landing({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Products lang={lang} />
        <Units lang={lang} />
        <Compare lang={lang} />
        <Calculator lang={lang} />
        <Numbers lang={lang} />
        <Amenities lang={lang} />
        <Location lang={lang} />
        <Why lang={lang} />
        <Developer lang={lang} />
        <Gallery lang={lang} />
        <Faq lang={lang} />
        <LeadForm lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingCtas lang={lang} />
      <MobileBar lang={lang} />
      <LeadPopup lang={lang} />
      <CookieConsent lang={lang} />
    </>
  );
}
