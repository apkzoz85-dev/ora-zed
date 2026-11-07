import { C, type Lang } from "@/lib/content";
import Photo from "./photo";

export default function Offers({ lang }: { lang: Lang }) {
  const t = C[lang].offers;
  return (
    <section id="offers" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <h2 className="text-[28px] font-semibold md:text-[44px]">{t.title}</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-8 text-mute md:text-[17px]">{t.sub}</p>
      <div className="mt-7 grid gap-4 md:mt-9 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {t.items.map((o) => (
          <article key={o.en} className="flex flex-col overflow-hidden rounded-md border border-line bg-card">
            <Photo src={o.img} alt={o.alt} className="h-[200px] md:h-[280px]" />
            <div className="flex flex-1 flex-col gap-4 p-5 md:gap-[18px] md:p-7">
              <div>
                <span className="num text-[11px] tracking-[0.16em] text-mute md:text-xs">{o.en}</span>
                <h3 className="mt-1 text-[22px] font-semibold md:text-[28px]">{o.title}</h3>
              </div>
              <p className="text-[15px] leading-8 text-mute md:text-base md:leading-8">{o.body}</p>
              <ul className="flex flex-wrap gap-2">
                {o.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3.5 py-1.5 text-sm">{tag}</li>
                ))}
              </ul>
              <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
                <div>
                  <p className="text-sm text-mute">{t.from}</p>
                  <p className="mt-1">
                    <span className="num text-[28px] font-bold md:text-[34px]">{o.from}</span>
                    <span className="ms-1.5 text-base md:text-lg">{t.unit}</span>
                  </p>
                </div>
                <a href={`#prices-${o.tab}`} className="whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2 md:py-3.5 md:text-[15px]">
                  {o.cta}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
