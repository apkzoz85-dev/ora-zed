"use client";

import { useMemo, useState } from "react";
import { fmt } from "@/lib/site";
import { C, type Lang } from "@/lib/content";
import { Reveal, Heading, Bidi } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function Calculator({ lang }: { lang: Lang }) {
  const t = C[lang];
  const c = t.calc;
  const options = useMemo(
    () => t.products.items.flatMap((p) => p.units.map((u) => ({ id: `${p.slug}-${u.type}-${u.spec}`, label: `${u.type} — ${u.spec}`, p, price: u.price }))),
    [t]
  );
  const [id, setId] = useState(options[0].id);
  const [downPct, setDownPct] = useState(options[0].p.dp);
  const [freq, setFreq] = useState<"monthly" | "quarterly">("quarterly");
  const sel = options.find((o) => o.id === id)!;
  const pct = Math.max(downPct, sel.p.dp);

  const calc = useMemo(() => {
    const down = (sel.price * pct) / 100;
    const n = freq === "monthly" ? sel.p.years * 12 : sel.p.years * 4;
    return { down, n, each: (sel.price - down) / n };
  }, [sel, pct, freq]);

  return (
    <section id="calc" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="slab p-6 shadow-sm md:p-7 lg:col-span-2">
              <label className="block text-sm text-ink/70" htmlFor="unit">{c.unit}</label>
              <select
                id="unit"
                value={id}
                onChange={(e) => {
                  const o = options.find((x) => x.id === e.target.value)!;
                  setId(o.id);
                  setDownPct((d) => Math.max(d, o.p.dp));
                }}
                className="mt-2 w-full rounded-lg border border-sand-2 bg-white px-4 py-3 text-[15px] text-ink"
              >
                {t.products.items.map((p) => (
                  <optgroup key={p.slug} label={p.short}>
                    {options.filter((o) => o.p.slug === p.slug).map((o) => (
                      <option key={o.id} value={o.id}>{o.label}</option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <div className="mt-6 flex items-center justify-between">
                <label className="text-sm text-ink/70" htmlFor="down">{c.downPct}</label>
                <span className="num text-lg text-brass">{pct}%</span>
              </div>
              <input id="down" type="range" min={sel.p.dp} max={30} step={1} value={pct} onChange={(e) => setDownPct(Number(e.target.value))} className="mt-3 w-full accent-[#b28a45]" />
              <p className="mt-2 text-xs leading-6 text-ink/55"><Bidi>{sel.p.plan}</Bidi></p>

              <p className="mt-6 text-sm text-ink/70">{c.freq}</p>
              <div className="mt-3 flex gap-2">
                {([["quarterly", c.quarterly], ["monthly", c.monthly]] as const).map(([k, l]) => (
                  <button key={k} type="button" onClick={() => setFreq(k)} className={`rounded-full px-5 py-2 text-sm transition ${freq === k ? "bg-ink text-paper" : "border border-sand-2 text-ink/70 hover:border-brass"}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="slab-dark p-6 md:p-7 lg:col-span-3">
              <p className="text-sm text-paper/60">{sel.label} · {sel.p.short}</p>
              <p className="mt-2 text-brass-2">
                <span className="num text-3xl">{fmt(sel.price)}</span> <span className="text-base text-paper/60">{t.ui.egp}</span>
              </p>
              <div className="ribbon-rule my-6 w-32" />
              <dl className="grid grid-cols-3 gap-4">
                <div>
                  <dt className="text-xs text-paper/55">{c.downAmt}</dt>
                  <dd className="num mt-1 text-lg text-paper">{fmt(Math.round(calc.down))}</dd>
                </div>
                <div>
                  <dt className="text-xs text-paper/55">{c.count}</dt>
                  <dd className="num mt-1 text-lg text-paper">{calc.n}</dd>
                </div>
                <div>
                  <dt className="text-xs text-paper/55">{c.period}</dt>
                  <dd className="mt-1 text-lg text-paper"><span className="num">{sel.p.years}</span> <span className="text-sm text-paper/60">{t.ui.years}</span></dd>
                </div>
              </dl>
              <div className="mt-7 rounded-lg bg-ink/60 p-6">
                <p className="text-sm text-paper/60">{c.each(freq === "monthly")}</p>
                <p className="mt-2 text-brass-2">
                  <span className="num text-4xl">{fmt(Math.round(calc.each))}</span> <span className="text-sm text-paper/60">{t.ui.egp}</span>
                </p>
              </div>
              <CtaWhatsapp message={c.wa(sel.label, pct)} className="mt-6 inline-block rounded-full bg-brass-2 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brass-2/85">
                {c.cta}
              </CtaWhatsapp>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
