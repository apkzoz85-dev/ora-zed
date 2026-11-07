import { fmt } from "@/lib/site";
import { C, minOf, type Lang } from "@/lib/content";
import { Reveal, Heading, Bidi } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function Compare({ lang }: { lang: Lang }) {
  const t = C[lang];
  const r = t.compare.rows;
  const items = t.products.items;
  const rows: { label: string; get: (p: (typeof items)[number]) => React.ReactNode }[] = [
    { label: r.types, get: (p) => p.units.map((u) => u.type).join(" · ") },
    { label: r.from, get: (p) => <><span className="num">{fmt(minOf(p))}</span> {t.ui.egp}</> },
    { label: r.plan, get: (p) => <Bidi>{p.plan}</Bidi> },
    { label: r.finish, get: (p) => p.finish },
    { label: r.fit, get: (p) => p.fit },
  ];

  return (
    <section id="compare" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading eyebrow={t.compare.eyebrow} title={t.compare.title} sub={t.compare.sub} />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid gap-4 md:hidden">
            {items.map((p) => (
              <div key={p.slug} className="slab p-5 shadow-sm">
                <p className="num text-xs tracking-[0.14em] text-brass">{p.label}</p>
                <p className="mt-1 text-lg text-ink">{p.name}</p>
                <dl className="mt-4 divide-y divide-sand-2">
                  {rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[96px_1fr] gap-4 py-3 text-sm">
                      <dt className="text-ink/55">{row.label}</dt>
                      <dd className="leading-6 text-ink">{row.get(p)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-10 hidden md:block">
            <table className="w-full table-fixed border-collapse text-start">
              <colgroup>
                <col className="w-40" />
                {items.map((p) => <col key={p.slug} />)}
              </colgroup>
              <thead>
                <tr>
                  <th className="border-b border-sand-2 p-4 text-start text-sm font-normal text-ink/50">{r.item}</th>
                  {items.map((p) => (
                    <th key={p.slug} className="border-b border-sand-2 p-4 text-start align-bottom">
                      <span className="num block text-xs tracking-[0.14em] text-brass">{p.label}</span>
                      <span className="mt-1 block text-base text-ink">{p.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-sand-2 p-4 align-top text-sm text-ink/55">{row.label}</td>
                    {items.map((p) => (
                      <td key={p.slug} className="border-b border-sand-2 p-4 align-top text-[15px] leading-7 text-ink">{row.get(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <CtaWhatsapp message={t.compare.wa} className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2">
            {t.compare.cta}
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
