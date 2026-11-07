import { C, type Lang } from "@/lib/content";

export default function Faq({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <section className="mx-auto max-w-[860px] px-5 pt-16 md:px-8 md:pt-24">
      <h2 className="text-[28px] font-semibold md:text-[44px]">{t.faqTitle}</h2>
      <div className="mt-7 border-t-2 border-ink md:mt-9">
        {t.faqs.map((f) => (
          <details key={f.q} className="group border-b border-line py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold md:text-lg">
              {f.q}
              <span className="text-2xl font-normal text-walnut transition group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-8 text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
