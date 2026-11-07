import { fmt } from "@/lib/site";
import { C, minOf, type Lang } from "@/lib/content";
import { Reveal, Heading, Bidi } from "./ui";

export default function Products({ lang }: { lang: Lang }) {
  const t = C[lang].products;
  const ui = C[lang].ui;
  return (
    <section id="products" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} className="h-full">
              <article className="slab flex h-full flex-col overflow-hidden shadow-sm">
                <div className="frame m-0 h-52 w-full border-s-0">
                  <img src={p.image} alt={p.name} className="h-52 w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="mt-3 text-2xl text-ink">{p.name}</h3>
                  <div className="ribbon-rule my-5 w-28" />
                  <p className="text-[15px] leading-8 text-ink/70"><Bidi>{p.intro}</Bidi></p>

                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] text-ink/75">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                        <span><Bidi>{h}</Bidi></span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-sand-2 pt-5">
                      <div>
                        <dt className="text-xs text-ink/55">{ui.from}</dt>
                        <dd className="mt-1 text-ink">
                          <span className="num text-xl">{fmt(minOf(p))}</span> <span className="text-sm text-ink/60">{ui.egp}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-ink/55">{ui.down}</dt>
                        <dd className="num mt-1 text-xl text-ink">{p.down}</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-xs text-ink/55">{ui.plan}</dt>
                        <dd className="mt-1 text-[15px] leading-7 text-ink"><Bidi>{p.plan}</Bidi></dd>
                      </div>
                    </dl>
                    <a href={`#units-${p.slug}`} className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2">
                      {ui.viewPrices}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
