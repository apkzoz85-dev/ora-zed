"use client";

import { useEffect, useState } from "react";
import { fmt } from "@/lib/site";
import { C, type Lang } from "@/lib/content";

type Tab = "apartments" | "villas";

function Board({ lang, tab, hiddenOnMobile }: { lang: Lang; tab: Tab; hiddenOnMobile: boolean }) {
  const t = C[lang].prices;
  const l = t.boards[tab];
  return (
    <div id={`prices-${tab}`} className={`${hiddenOnMobile ? "hidden md:block" : ""} scroll-mt-24`}>
      <p className="num mb-2 text-[13px] font-semibold tracking-[0.16em] text-walnut md:text-sm">{l.en}</p>
      <ul className="border-t-2 border-ink">
        {l.rows.map((r) => (
          <li key={r.label} className="flex items-baseline justify-between gap-4 border-b border-line py-[18px] md:py-[22px]">
            <span className="text-base md:text-lg">
              {r.label}
              {r.area && <span className="ms-2 text-sm text-mute"><span className="num">{r.area}</span> {t.sqm}</span>}
            </span>
            <span className="num shrink-0 text-[21px] font-semibold md:text-[25px]">{fmt(r.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Prices({ lang }: { lang: Lang }) {
  const t = C[lang].prices;
  const [tab, setTab] = useState<Tab>("apartments");

  useEffect(() => {
    const sync = () => {
      if (location.hash === "#prices-villas") setTab("villas");
      if (location.hash === "#prices-apartments") setTab("apartments");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="prices" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-[28px] font-semibold md:text-[44px]">{t.title}</h2>
        <p className="text-sm text-mute md:text-[15px]">{t.note}</p>
      </div>

      <div className="mt-5 flex rounded-full border border-ink p-1 md:hidden" role="tablist">
        {(["apartments", "villas"] as const).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-full py-3 text-[15px] font-semibold transition ${tab === k ? "bg-ink text-paper" : "text-ink"}`}
          >
            {t.tabs[k]}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-14 md:mt-9 md:grid-cols-2">
        <Board lang={lang} tab="apartments" hiddenOnMobile={tab !== "apartments"} />
        <Board lang={lang} tab="villas" hiddenOnMobile={tab !== "villas"} />
      </div>
    </section>
  );
}
