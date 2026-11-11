"use client";

import { useState } from "react";
import { fmt } from "@/lib/site";
import { LeadButton, useT } from "./actions";

export function Calculator() {
  const t = useT();
  const c = t.payment.calc;
  // الطروحات اللي ليها أسعار معلنة فقط
  const offers = t.offers
    .map((o) => ({ ...o, units: o.units.filter((u) => u.price !== null) }))
    .filter((o) => o.units.length > 0);
  const [oi, setOi] = useState(0);
  const [ui, setUi] = useState(0);
  const offer = offers[oi];
  const unit = offer.units[Math.min(ui, offer.units.length - 1)];
  const [pct, setPct] = useState(offer.dp);

  const price = unit.price as number;
  const down = (price * pct) / 100;
  const rest = price - down;
  const label = `${unit.type} — ${offer.short}`;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-deep/10 ring-1 ring-ink/5">
      <div role="tablist" aria-label={c.tabs} className="grid bg-tint/70 p-1.5" style={{ gridTemplateColumns: `repeat(${offers.length}, minmax(0, 1fr))` }}>
        {offers.map((o, i) => (
          <button
            key={o.slug}
            role="tab"
            aria-selected={oi === i}
            onClick={() => {
              setOi(i);
              setUi(0);
              setPct(o.dp);
            }}
            className={`rounded-xl px-1.5 py-3 text-xs font-bold transition sm:text-sm ${
              oi === i ? "bg-deep text-white shadow" : "text-deep hover:bg-white/70"
            }`}
          >
            {o.short}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-7">
        <label htmlFor="calc-unit" className="text-sm text-ink/70">
          {c.unit}
        </label>
        <select
          id="calc-unit"
          value={Math.min(ui, offer.units.length - 1)}
          onChange={(e) => setUi(Number(e.target.value))}
          className="mt-1.5 w-full rounded-lg border border-ink/15 bg-white px-3 py-3 text-base font-semibold text-deep focus:border-cta focus:outline-none"
        >
          {offer.units.map((u, i) => (
            <option key={u.type} value={i}>
              {u.type} · {u.spec}
            </option>
          ))}
        </select>

        <p className="mt-4 flex items-baseline justify-between text-sm text-ink/70">
          <span>{c.price}</span>
          <span className="font-display text-xl font-bold text-deep">
            <span dir="ltr">{fmt(price)}</span> {t.ui.egp}
          </span>
        </p>

        <label htmlFor="calc-pct" className="mt-4 flex items-baseline justify-between text-sm text-ink/70">
          <span>{c.downPct}</span>
          <span className="font-display text-lg font-bold text-deep" dir="ltr">
            {pct}%
          </span>
        </label>
        <input
          id="calc-pct"
          type="range"
          dir="ltr"
          min={offer.dp}
          max={50}
          step={5}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="mt-2 w-full"
        />
        <div className="mt-1 flex justify-between text-xs text-ink/50" dir="ltr">
          <span>{offer.dp}%</span>
          <span>50%</span>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-cta p-4 text-white">
            <dt className="text-xs opacity-85">
              {c.down} <span dir="ltr">{pct}%</span>
            </dt>
            <dd className="mt-1 font-display text-xl font-bold sm:text-2xl" dir="ltr">
              {fmt(down)}
            </dd>
          </div>
          <div className="rounded-xl bg-cream p-4">
            <dt className="text-xs text-ink/60">{c.monthly}</dt>
            <dd className="mt-1 font-display text-xl font-bold text-deep sm:text-2xl" dir="ltr">
              {fmt(rest / (offer.years * 12))}
            </dd>
          </div>
          <div className="rounded-xl bg-cream p-4">
            <dt className="text-xs text-ink/60">{c.quarterly}</dt>
            <dd className="mt-1 font-display text-lg font-bold text-deep" dir="ltr">
              {fmt(rest / (offer.years * 4))}
            </dd>
          </div>
          <div className="rounded-xl bg-cream p-4">
            <dt className="text-xs text-ink/60">{c.term}</dt>
            <dd className="mt-1 font-display text-lg font-bold text-deep">
              {offer.years} {t.ui.years}
            </dd>
          </div>
        </dl>

        <LeadButton
          source={`calculator-${offer.slug}`}
          unit={label}
          title={c.modalTitle(label)}
          sub={c.modalSub}
          cta={c.modalCta}
          className="mt-5 w-full rounded-lg bg-cta px-5 py-4 text-base font-bold text-white transition hover:bg-cta-2"
        >
          {c.cta}
        </LeadButton>
        <p className="mt-3 text-center text-xs leading-relaxed text-ink/50">{c.note}</p>
      </div>
    </div>
  );
}
