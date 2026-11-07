import { C, type Lang } from "@/lib/content";
import Photo from "./photo";

export default function Hero({ lang }: { lang: Lang }) {
  const t = C[lang].hero;
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-5 pt-10 md:px-8 md:pt-16">
      <div className="flex flex-wrap items-end justify-between gap-6 md:gap-8">
        <div className="min-w-0 flex-[1_1_640px]">
          <p className="text-sm font-semibold text-walnut md:text-[15px]">{t.eyebrow}</p>
          <h1 className="mt-3 text-[48px] font-bold leading-[1.1] md:mt-4 md:whitespace-nowrap md:text-[88px] md:leading-[1.05]">{t.title}</h1>
        </div>
        <p className="flex-[0_1_420px] text-base leading-8 text-mute md:text-[19px] md:leading-9">{t.sub}</p>
      </div>

      <Photo src="/images/hero.jpg" alt={t.alt} className="mt-7 h-[260px] rounded-md md:mt-10 md:h-[560px]" />

      <dl className="grid grid-cols-2 gap-px border-b border-line bg-line md:grid-cols-4">
        {t.facts.map((f) => (
          <div key={f.l} className="flex flex-col-reverse bg-paper px-4 py-5 first:ps-0 md:px-7 md:py-7 [&:nth-child(3)]:ps-0 md:[&:nth-child(3)]:ps-7">
            <dt className="mt-1 text-[13px] text-mute md:mt-1.5 md:text-[15px]">{f.l}</dt>
            <dd className={`num text-[28px] font-semibold md:text-[40px] ${f.accent ? "text-walnut" : ""}`}>
              {f.v}
              {f.u && <span className="ms-1.5 text-[15px] md:text-xl">{f.u}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
