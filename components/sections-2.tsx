import { infrastructure, investment, projects, productsOf, minPriceOf, fmt } from "@/lib/site";
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
            title="المتاح من أورا في أربعة أرقام"
            sub="مقدم يبدأ من صفر، وتقسيط حتى 10 سنين، ووحدات كاملة التشطيب في أغلب الطروحات."
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
            title="ليه أورا دلوقتي"
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
  const finish: Record<string, string> = {
    "zed-east": "شقق كاملة بالتكييفات · منازل كاملة",
    "solana-east": "كامل · المكاتب Core & Shell",
    "zed-west": "كامل + تكييفات + مطبخ",
    "solana-west": "Core & Shell",
  };
  const rows: { label: string; get: (slug: string) => string }[] = [
    { label: "الموقع", get: (s) => projects.find((p) => p.slug === s)!.area },
    { label: "الطروحات", get: (s) => productsOf(s).map((o) => o.name.split(" — ")[0]).join(" · ") },
    { label: "تبدأ من", get: (s) => `${fmt(minPriceOf(s))} جنيه` },
    { label: "المقدم", get: (s) => [...new Set(productsOf(s).map((o) => o.dpLabel))].join(" / ") },
    { label: "التقسيط", get: (s) => [...new Set(productsOf(s).map((o) => `${o.years} سنين`))].join(" / ") },
    { label: "التشطيب", get: (s) => finish[s] },
  ];

  return (
    <section id="compare" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading eyebrow="Side by Side" title="مقارنة بين المشاريع" sub="الموقع والطروحات والأسعار وأنظمة السداد في كل مشروع — قبل القرار." />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid gap-4 md:hidden">
            {projects.map((p) => (
              <div key={p.slug} className="slab p-5 shadow-sm">
                <p className="num text-xs tracking-[0.14em] text-brass">{p.nameEn}</p>
                <p className="mt-1 text-lg text-ink">{p.name}</p>
                <dl className="mt-4 divide-y divide-sand-2">
                  {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 py-2.5 text-sm">
                      <dt className="shrink-0 text-ink/55">{r.label}</dt>
                      <dd className="text-end text-ink">{r.get(p.slug)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[860px] border-collapse text-start">
              <thead>
                <tr>
                  <th className="w-32 border-b border-sand-2 p-4 text-start text-sm font-normal text-ink/50">البند</th>
                  {projects.map((p) => (
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
                    {projects.map((p) => (
                      <td key={p.slug} className="border-b border-sand-2 p-4 align-top text-[15px] text-ink">{r.get(p.slug)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <CtaWhatsapp
            message="محتاج استشارة: أنهي مشروع من مشاريع أورا الأنسب لي؟"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-ink-2"
          >
            اطلب استشارة لتحديد الأنسب
          </CtaWhatsapp>
        </Reveal>
      </div>
    </section>
  );
}
