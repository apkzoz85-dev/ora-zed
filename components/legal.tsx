import Link from "next/link";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";
import { Footer } from "./chrome";

export type Kind = "about" | "privacy" | "disclaimer";

const T: Record<Lang, Record<Kind, { title: string; body: [string | null, string][] }>> = {
  ar: {
    about: {
      title: "من نحن",
      body: [
        [null, `${site.agency} شركة تسويق ووساطة عقارية في القاهرة، تعمل كوسيط عقاري مستقل في مشروعات كبار المطوّرين في مصر.`],
        [null, "نساعد العملاء على المقارنة بين الوحدات المتاحة واختيار الوحدة ونظام السداد الأنسب، دون أي رسوم إضافية على العميل."],
        ["التواصل", `الهاتف / واتساب: ${site.phoneDisplay} — البريد الإلكتروني: ${site.email}`],
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      body: [
        [null, `يلتزم ${site.agency} بحماية خصوصية زوّار هذا الموقع.`],
        ["البيانات", "لا يجمع الموقع بيانات شخصية عبر نماذج. يتم التواصل عبر واتساب أو الهاتف أو البريد الإلكتروني بمبادرة منك، ونستخدم ما تشاركه معنا للرد على استفسارك فقط."],
        ["ملفات تعريف الارتباط", "نستخدم ملفات تعريف الارتباط وأدوات القياس من Google لقياس أداء الحملات الإعلانية، ويمكنك تعطيلها من إعدادات المتصفح."],
        ["حقوقك", `لطلب حذف بياناتك تواصل معنا على ${site.email} أو ${site.phoneDisplay}.`],
      ],
    },
    disclaimer: {
      title: "إخلاء المسؤولية",
      body: [
        [null, `هذا الموقع مُدار بواسطة ${site.agency} بصفته وسيطًا عقاريًا مستقلًا، وليس الموقع الرسمي لشركة أورا للتطوير العقاري.`],
        ["الأسعار", "الأسعار وأنظمة السداد ومساحات الوحدات المعروضة استرشادية وقابلة للتغيير في أي وقت، ولا تُعد عرضًا ملزمًا. يُعتمد السعر النهائي في عقد الحجز."],
        ["الصور", "الصور تصورات معمارية لأغراض توضيحية وقد تختلف عن الواقع. أسماء المشروعات والعلامات التجارية ملك أصحابها."],
      ],
    },
  },
  en: {
    about: {
      title: "About us",
      body: [
        [null, `${site.agency} is a Cairo-based real estate marketing and brokerage company, working as an independent broker on projects by Egypt's leading developers.`],
        [null, "We help buyers compare available units and choose the right home and payment plan, at no extra cost to the buyer."],
        ["Contact", `Phone / WhatsApp: ${site.phoneDisplay} — Email: ${site.email}`],
      ],
    },
    privacy: {
      title: "Privacy Policy",
      body: [
        [null, `${site.agency} is committed to protecting the privacy of visitors to this website.`],
        ["Data", "This website does not collect personal data through forms. You contact us on WhatsApp, by phone or by email at your own initiative, and we use what you share only to answer your enquiry."],
        ["Cookies", "We use cookies and Google measurement tools to measure ad campaign performance. You can disable them in your browser settings."],
        ["Your rights", `To request deletion of your data, contact us at ${site.email} or ${site.phoneDisplay}.`],
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      body: [
        [null, `This website is operated by ${site.agency} as an independent real estate broker. It is not the official website of ORA Developers.`],
        ["Prices", "Prices, payment plans and unit areas shown are indicative, may change at any time and are not a binding offer. The final price is set in the reservation contract."],
        ["Images", "Images are architectural renderings for illustration and may differ from reality. Project names and trademarks belong to their respective owners."],
      ],
    },
  },
};

export const legalTitle = (lang: Lang, k: Kind) => T[lang][k].title;

export default function Legal({ lang, kind }: { lang: Lang; kind: Kind }) {
  const c = T[lang][kind];
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-4 md:px-8">
          <Link href={href(lang)} className="num text-[15px] font-semibold tracking-[0.22em]">ZED EAST</Link>
          <Link href={href(lang)} className="text-sm text-mute hover:text-ink">{lang === "ar" ? "العودة للصفحة الرئيسية" : "Back to home"}</Link>
        </div>
      </header>
      <main className="mx-auto max-w-[860px] px-5 py-14 md:px-8 md:py-20">
        <h1 className="text-[32px] font-semibold md:text-[44px]">{c.title}</h1>
        <div className="mt-8 border-t-2 border-ink pt-6 grid gap-6 text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">
          {c.body.map(([h, p], i) => (
            <div key={i}>
              {h && <h2 className="mb-1 text-lg font-semibold text-ink md:text-xl">{h}</h2>}
              <p>{p}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
