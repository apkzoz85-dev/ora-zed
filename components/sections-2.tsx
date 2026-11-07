import { infrastructure, investment, products, fmt } from "@/lib/site";
import { Reveal, Heading } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export function Infrastructure() {
  return (
    <section className="bg-ink-2 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="The Numbers"
            title="زد إيست في أربعة أرقام"
            sub="مقدم يبدأ من صفر، وتقسيط 10 سنين، ووحدات كاملة التشطيب، ونادي رياضي على 40 فدان."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {infrastructure.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div className="h-full border-t-2 border-brass-2/60 pt-5">
                <h3 className="text-lg text-paper">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-paper/65">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Investment() {
  return (
    <section id="investment" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="The Case"
            title="ليه زد إيست دلوقتي"
            sub="أربع نقاط بتفرق بين الشراء دلوقتي والشراء بعد ما المتاح يخلص."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {investment.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="slab flex h-full gap-6 p-7 shadow-sm">
                <div className="shrink-0">
                  <p className="num text-3xl text-brass">{c.stat}</p>
                  <p className="mt-1 text-xs text-ink/50">{c.unit}</p>
                </div>
                <div>
                  <h3 className="text-lg text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-8 text-ink/70">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  const rows: { label: string; get: (p: (typeof products)[number]) => string }[] = [
    { label: "النوع", get: (p) => p.groups.flatMap((g) => g.units.map((u) => u.type)).filter((v, i, a) => a.indexOf(v) === i).join(" · ") },
    { label: "تبدأ من", get: (p) => `${fmt(Math.min(...p.groups.flatMap((g) => g.units.map((u) => u.price))))} جنيه` },
    { label: "المقدم", get: (p) => p.dpLabel },
    { label: "التقسيط", get: (p) => `${p.years} سنين` },
    { label: "التشطيب", get: (p) => p.terms.find(([k]) => k === "التشطيب")?.[1] ?? "—" },
    { label: "الأنسب لـ", get: (p) => ({ "zed-csr": "سكن أو استثمار إيجاري بدون مقدم", "zed-emerald": "عائلة عايزة بيت مستقل وجنينة", "zed-strip": "مكتب أو استثمار إداري" } as Record<string, string>)[p.slug] },
  ];

  return (
    <section id="compare" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading eyebrow="Side by Side" title="أنهي طرح يناسبك؟" sub="مقارنة مباشرة بين طروحات زد إيست قبل القرار." />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid gap-4 md:hidden">
            {products.map((p) => (
              <div key={p.slug} className="slab p-5 shadow-sm">
                <p className="num text-xs tracking-[0.14em] text-brass">{p.nameEn}</p>
                <p className="mt-1 text-lg text-ink">{p.name}</p>
                <dl className="mt-4 divide-y divide-sand-2">
                  {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="shrink-0 text-ink/55">{r.label}</dt>
                      <dd className="text-end text-ink">{r.get(p)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] border-collapse text-start">
              <thead>
                <tr>
                  <th className="w-32 border-b border-sand-2 p-4 text-start text-sm font-normal text-ink/50">البند</th>
                  {products.map((p) => (
                    <th key={p.slug} className="border-b border-sand-2 p-4 text-start">
                      <span className="num block text-sm tracking-[0.14em] text-brass">{p.nameEn}</span>
                      <span className="mt-1 block text-base text-ink">{p.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="border-b border-sand-2 p-4 align-top text-sm text-ink/55">{r.label}</td>
                    {products.map((p) => (
                      <td key={p.slug} className="border-b border-sand-2 p-4 align-top text-[15px] text-ink">{r.get(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <CtaWhatsapp
            message="محتاج استشارة: أنهي طرح في زد إيست الأنسب لي؟"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
          >
            اطلب استشارة لتحديد الأنسب
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
