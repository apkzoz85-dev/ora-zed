import { projects, productsOf, minPriceOf, fmt } from "@/lib/site";
import { Reveal, Heading, Pic } from "./ui";

export default function Products() {
  return (
    <section id="products" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="ORA Availability"
            title="أربعة مشاريع — والمتاح في كل مشروع"
            sub="زد إيست وسولانا إيست في التجمع الخامس، وزد ويست في الشيخ زايد، وسولانا ويست في نيو زايد. لكل طرح نظام سداده."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 70}>
              <article id={`project-${p.slug}`} className="slab flex h-full scroll-mt-24 flex-col overflow-hidden shadow-sm">
                <div className="frame m-0 h-52 w-full border-s-0">
                  <Pic src={p.image} alt={`${p.name} — أورا`} label={p.nameEn} className="h-52 w-full" />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-7">
                  <p className="eyebrow">{p.area}</p>
                  <h3 className="num mt-3 text-xl tracking-[0.14em] text-ink">{p.nameEn}</h3>
                  <p className="mt-1 text-lg text-ink/80">{p.name}</p>
                  <div className="ribbon-rule my-5 w-28" />
                  <p className="text-[15px] leading-8 text-ink/70">{p.intro}</p>

                  <ul className="mt-6 divide-y divide-sand-2 border-y border-sand-2">
                    {productsOf(p.slug).map((o) => (
                      <li key={o.slug} className="flex items-center justify-between gap-4 py-3.5">
                        <div className="min-w-0">
                          <p className="text-[15px] text-ink">{o.name}</p>
                          <p className="mt-0.5 text-xs text-ink/55">{o.plan}</p>
                        </div>
                        <div className="shrink-0 text-end">
                          <p className="text-[11px] text-ink/50">تبدأ من</p>
                          <p className="num text-[15px] text-ink">
                            {fmt(Math.min(...o.groups.flatMap((g) => g.units.map((u) => u.price))))}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                    <p className="text-sm text-ink/60">
                      تبدأ من <span className="num text-lg text-ink">{fmt(minPriceOf(p.slug))}</span> جنيه
                    </p>
                    <a
                      href={`#units-${p.slug}`}
                      className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
                    >
                      أسعار {p.name}
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
