"use client";

import { useEffect, useMemo, useState } from "react";
import { products, projectOf, fmt, waLink } from "@/lib/site";
import { Reveal, Heading, Pic } from "./ui";
import { track } from "@/lib/track";

const cards = products.flatMap((p) =>
  p.groups.flatMap((g) =>
    g.units.map((u) => {
      const pr = projectOf(p.project);
      return {
        key: `${p.slug}-${u.type}-${u.spec}`,
        project: p.slug,
        projectName: pr.name,
        projectEn: pr.nameEn,
        product: p.name,
        productEn: p.nameEn,
        type: u.type,
        spec: u.spec,
        price: u.price,
        plan: p.plan,
        terms: u.finish ? p.terms.map(([k, v]) => [k, k === "التشطيب" ? u.finish! : v] as [string, string]) : p.terms,
        image: u.image,
      };
    })
  )
);

const tabs = [{ id: "all", label: "كل الوحدات" }, ...products.map((p) => ({ id: p.slug, label: p.name.split(" — ")[0] }))];

export default function Units() {
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  // روابط #units-zed-east من الإعلانات أو من كروت المشاريع بتفتح الفلتر على المشروع
  useEffect(() => {
    const sync = () => {
      const m = location.hash.match(/^#units-(.+)$/);
      if (m && products.some((p) => p.slug === m[1])) {
        setTab(m[1]);
        document.getElementById("units")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const list = useMemo(() => {
    const f = tab === "all" ? cards : cards.filter((c) => c.project === tab);
    return [...f].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
  }, [tab, sort]);

  return (
    <section id="units" className="scroll-mt-16 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Units & Prices"
            title="وحدات وأسعار زد إيست"
            sub="أسعار بداية كل نوع حسب آخر متاح من أورا. الأسعار استرشادية وتتغير مع المتاح، والمعتمد جدول السداد الرسمي وقت التعاقد."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm transition ${
                  tab === t.id
                    ? "bg-brass-2 font-semibold text-ink"
                    : "border border-paper/25 text-paper/75 hover:border-brass-2 hover:text-brass-2"
                }`}
              >
                {t.label}
                <span className="num ms-1.5 text-xs opacity-70">
                  {t.id === "all" ? cards.length : cards.filter((c) => c.project === t.id).length}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setSort((s) => (s === "asc" ? "desc" : "asc"))}
            className="text-sm text-paper/60 underline underline-offset-8 hover:text-brass-2"
          >
            {sort === "asc" ? "الأقل سعرًا أولًا" : "الأعلى سعرًا أولًا"}
          </button>
        </div>

        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {list.map((c, i) => (
            <Reveal key={c.key} delay={(i % 4) * 50} className="w-[82%] shrink-0 snap-start md:w-auto">
              <article className="slab-dark flex h-full flex-col overflow-hidden">
                <div className="relative h-40 w-full md:h-44">
                  <Pic src={c.image} alt={`${c.type} ${c.spec} — ${c.projectName}`} label={c.projectEn} className="h-40 w-full md:h-44" />
                  <span className="num absolute end-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-[0.12em] text-brass-2">
                    {c.productEn}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs text-paper/50">{c.product}</p>
                  <h3 className="mt-1 text-lg text-paper">
                    {c.type} — <bdi>{c.spec}</bdi>
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 rounded-lg bg-ink/50 p-4 text-[13px]">
                    {c.terms.map(([k, v]) => (
                      <div key={k}>
                        <p className="text-paper/50">{k}</p>
                        <p className="mt-1 text-paper"><bdi>{v}</bdi></p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <p className="text-xs text-paper/55">تبدأ من</p>
                    <p className="num mt-1 text-2xl text-brass-2">
                      {fmt(c.price)} <span className="text-sm text-paper/60">EGP</span>
                    </p>
                  </div>

                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={waLink(`مهتم بـ ${c.type} ${c.spec} في ${c.product} — زد إيست من أورا. برجاء إرسال المتاح وخطة السداد.`)}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track("whatsapp")}
                      className="flex-1 rounded-full bg-brass-2 py-2.5 text-center text-sm font-semibold text-ink transition hover:bg-brass-2/85"
                    >
                      التفاصيل
                    </a>
                    <a href="#calc" className="rounded-full border border-paper/25 px-4 py-2.5 text-sm text-paper/80 transition hover:border-brass-2 hover:text-brass-2">
                      القسط
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-xs text-paper/50 md:hidden">اسحب لعرض باقي الوحدات ←</p>

        <p className="mt-10 text-xs leading-6 text-paper/45">
          الأسعار المعروضة أسعار بداية (Starting Price) حسب آخر متاح من أورا، وتختلف حسب المساحة والدور والموقع. الأسعار تختلف حسب الدور والإطلالة والموقع داخل المشروع.
        </p>
      </div>
    </section>
  );
}
