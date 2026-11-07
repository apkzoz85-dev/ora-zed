"use client";

import { useEffect, useMemo, useState } from "react";
import { fmt, waLink } from "@/lib/site";
import { C, type Lang } from "@/lib/content";
import { track } from "@/lib/track";
import { Reveal, Heading, Bidi } from "./ui";

export default function Units({ lang }: { lang: Lang }) {
  const t = C[lang];
  const ui = t.ui;
  const items = t.products.items;
  const cards = useMemo(
    () => items.flatMap((p) => p.units.map((u) => ({ ...u, p, key: `${p.slug}-${u.type}-${u.spec}` }))),
    [items]
  );
  const [tab, setTab] = useState<string>("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  // #units-zed-emerald (من الإعلانات أو الكروت) يفتح الفلتر على الطرح
  useEffect(() => {
    const sync = () => {
      const m = location.hash.match(/^#units-(.+)$/);
      if (m && items.some((p) => p.slug === m[1])) {
        setTab(m[1]);
        document.getElementById("units")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [items]);

  const list = useMemo(() => {
    const f = tab === "all" ? cards : cards.filter((c) => c.p.slug === tab);
    return [...f].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
  }, [cards, tab, sort]);

  const tabs = [{ id: "all", label: ui.all, n: cards.length }, ...items.map((p) => ({ id: p.slug, label: p.short, n: p.units.length }))];

  return (
    <section id="units" className="scroll-mt-16 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading light eyebrow={t.units.eyebrow} title={t.units.title} sub={t.units.sub} />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
            {tabs.map((x) => (
              <button
                key={x.id}
                onClick={() => setTab(x.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm transition ${
                  tab === x.id ? "bg-brass-2 font-semibold text-ink" : "border border-paper/25 text-paper/75 hover:border-brass-2 hover:text-brass-2"
                }`}
              >
                <span>{x.label}</span>
                <span className={`num rounded-full px-1.5 text-[11px] ${tab === x.id ? "bg-ink/10" : "bg-paper/10"}`}>{x.n}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))} className="text-sm text-paper/60 underline underline-offset-8 hover:text-brass-2">
            {sort === "asc" ? ui.sortAsc : ui.sortDesc}
          </button>
        </div>

        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.key} delay={(i % 4) * 50} className="w-[82%] shrink-0 snap-start md:w-auto">
              <article className="slab-dark flex h-full flex-col overflow-hidden">
                <div className="relative h-40 w-full md:h-44">
                  <img src={c.image} alt={`${c.type} — ${c.p.name}`} loading="lazy" className="h-full w-full object-cover" />
                  <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">{c.p.label}</span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs text-paper/55">{c.p.name}</p>
                  <h3 className="mt-1 text-lg leading-snug text-paper">{c.type}</h3>
                  <p className="mt-1 text-sm text-paper/70"><Bidi>{c.spec}</Bidi></p>

                  <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 rounded-lg bg-ink/50 p-4 text-[13px]">
                    <div>
                      <dt className="text-paper/50">{ui.down}</dt>
                      <dd className="num mt-1 text-paper">{c.p.down}</dd>
                    </div>
                    <div>
                      <dt className="text-paper/50">{ui.installments}</dt>
                      <dd className="mt-1 text-paper"><span className="num">{c.p.years}</span> {ui.years}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-paper/50">{ui.plan}</dt>
                      <dd className="mt-1 leading-6 text-paper"><Bidi>{c.p.plan}</Bidi></dd>
                    </div>
                    {c.p.finish !== "—" && (
                      <div className="col-span-2">
                        <dt className="text-paper/50">{ui.finish}</dt>
                        <dd className="mt-1 text-paper">{c.p.finish}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-5">
                    <p className="text-xs text-paper/55">{ui.from}</p>
                    <p className="mt-1 text-brass-2">
                      <span className="num text-2xl">{fmt(c.price)}</span> <span className="text-sm text-paper/60">{ui.egp}</span>
                    </p>
                  </div>

                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={waLink(t.units.wa(c.type, c.spec, c.p.name))}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track("whatsapp")}
                      className="flex-1 rounded-full bg-brass-2 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
                    >
                      {ui.details}
                    </a>
                    <a href="#calc" className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2">
                      {ui.instalment}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-xs text-paper/50 md:hidden">{ui.swipe} {lang === "ar" ? "←" : "→"}</p>
        <p className="mt-10 text-xs leading-6 text-paper/45">{t.units.note}</p>
      </div>
    </section>
  );
}
