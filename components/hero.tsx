import { fmt, waLink } from "@/lib/site";
import { C, minPrice, type Lang } from "@/lib/content";
import { Ribbon } from "./ui";
import LeadForm from "./lead-form";

export default function Hero({ lang }: { lang: Lang }) {
  const t = C[lang].hero;
  const ui = C[lang].ui;
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img src="/images/ze-hero.webp" alt={t.alt} className="kenburns h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-brass-2/40 bg-ink/60 px-4 py-1.5 text-xs text-paper/85 backdrop-blur md:px-5 md:py-2 md:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brass-2" />
          {t.pill}
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-8 md:mt-8 lg:grid-cols-[1.1fr_420px] lg:gap-10">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-4 text-5xl leading-[1.15] text-paper md:text-7xl">{t.title}</h1>
            <Ribbon light />
            <p className="mt-4 max-w-xl text-base leading-8 text-paper/80 md:text-lg md:leading-9">{t.body}</p>
            <p className="mt-4 text-paper/70">
              {t.fromLine} <span className="num text-xl text-brass-2">{fmt(minPrice)}</span> {ui.egp}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a href="#units" className="rounded-full bg-brass-2 px-4 py-3 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85 sm:px-7 sm:text-base">
                {t.ctaPrices}
              </a>
              <a href={waLink(C[lang].wa)} target="_blank" rel="noopener" className="rounded-full border border-paper/30 px-4 py-3 text-center text-sm font-semibold text-paper transition hover:border-brass-2 hover:text-brass-2 sm:px-7 sm:text-base">
                {ui.whatsapp}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/10 md:mt-10 md:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.l} className="bg-ink/85 px-4 py-4 md:px-5 md:py-5">
                  <p className="num text-2xl text-brass-2">{s.v}</p>
                  <p className="mt-1.5 text-xs leading-5 text-paper/60 md:text-[13px] md:leading-6">{s.l}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper/45">{t.disclaimer}</p>
          </div>

          <div id="hero-form" className="rounded-2xl bg-paper p-5 shadow-2xl md:p-6">
            <p className="eyebrow">{t.formEyebrow}</p>
            <h2 className="mt-2 text-xl text-ink">{t.formTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-ink/60">{t.formSub}</p>
            <div className="mt-5">
              <LeadForm lang={lang} compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
