import { C, type Lang } from "@/lib/content";

export default function Plans({ lang }: { lang: Lang }) {
  const t = C[lang].plans;
  return (
    <section id="plans" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <h2 className="text-[28px] font-semibold md:text-[44px]">{t.title}</h2>
      <div className="mt-7 grid gap-4 md:mt-9 md:grid-cols-2 md:gap-6">
        {t.items.map((p) => (
          <div key={p.title} className="rounded-md border border-line bg-card p-5 md:p-8">
            <h3 className="text-lg font-semibold md:text-2xl">{p.title}</h3>
            <div className="mt-5 flex h-3 gap-[3px] overflow-hidden rounded-full md:mt-7 md:h-3.5" aria-hidden="true">
              {p.bars.map((b, i) => (
                <div key={i} className={b.c} style={{ flex: `0 0 ${b.w}` }} />
              ))}
              <div className="flex-1 bg-bar" />
            </div>
            <dl className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-3">
              {p.steps.map((s) => (
                <div key={s.l} className="flex items-baseline gap-2">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="num text-xl font-semibold md:text-2xl">{s.v}</dd>
                  <dd className="text-sm text-mute md:text-[15px]">{s.l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-7 text-mute md:mt-6">{p.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
