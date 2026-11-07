import { C, type Lang } from "@/lib/content";
import { Reveal, Heading, Bidi } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

const dot = <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />;

export function Amenities({ lang }: { lang: Lang }) {
  const a = C[lang].amenities;
  return (
    <section id="amenities" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Heading eyebrow={a.eyebrow} title={a.title} sub={a.sub} /></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {a.items.map((x, i) => (
            <Reveal key={x.t} delay={(i % 3) * 50}>
              <div className="slab h-full p-6 shadow-sm">
                <span className="num text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg text-ink">{x.t}</h3>
                <p className="mt-2 text-[15px] leading-7 text-ink/70"><Bidi>{x.d}</Bidi></p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Numbers({ lang }: { lang: Lang }) {
  const n = C[lang].numbers;
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Heading light eyebrow={n.eyebrow} title={n.title} sub={n.sub} /></Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {n.items.map((x, i) => (
            <Reveal key={x.t} delay={i * 50}>
              <div className="h-full border-s-2 border-brass-2/60 ps-5">
                <p className="text-2xl text-brass-2 md:text-3xl">{x.t}</p>
                <p className="mt-2 text-sm leading-7 text-paper/70"><Bidi>{x.d}</Bidi></p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location({ lang }: { lang: Lang }) {
  const l = C[lang].location;
  return (
    <section id="location" className="scroll-mt-16 bg-sand/40 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading eyebrow={l.eyebrow} title={l.title} sub={l.body} />
          <dl className="mt-8 divide-y divide-sand-2 border-y border-sand-2">
            {l.points.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3.5 text-[15px] md:grid-cols-[180px_1fr]">
                <dt className="text-ink/55">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={70}>
          <div className="frame overflow-hidden">
            <img src="/images/ze-park.webp" alt={l.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Why({ lang }: { lang: Lang }) {
  const w = C[lang].why;
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Heading eyebrow={w.eyebrow} title={w.title} sub={w.sub} /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {w.items.map((x, i) => (
            <Reveal key={x.t} delay={(i % 2) * 60}>
              <div className="slab flex h-full gap-5 p-6 shadow-sm">
                <div className="w-20 shrink-0 text-center">
                  <p className="num text-3xl text-brass">{x.s}</p>
                  <p className="mt-1 text-xs text-ink/55">{x.u}</p>
                </div>
                <div>
                  <h3 className="text-lg text-ink">{x.t}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-ink/70"><Bidi>{x.d}</Bidi></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Developer({ lang }: { lang: Lang }) {
  const d = C[lang].developer;
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading light eyebrow={d.eyebrow} title={d.title} sub={d.sub} />
          <ul className="mt-8 space-y-5">
            {d.items.map((x) => (
              <li key={x.t} className="flex gap-3">
                {dot}
                <div>
                  <p className="text-paper">{x.t}</p>
                  <p className="mt-1 text-sm leading-7 text-paper/65"><Bidi>{x.d}</Bidi></p>
                </div>
              </li>
            ))}
          </ul>
          <CtaWhatsapp message={d.wa} className="mt-8 inline-block rounded-full bg-brass-2 px-7 py-3 text-sm font-semibold text-ink transition hover:bg-brass-2/85">
            {d.cta}
          </CtaWhatsapp>
        </Reveal>
        <Reveal delay={70}>
          <div className="frame overflow-hidden">
            <img src="/images/ze-dusk.webp" alt={d.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const GAL = ["ze-emerald", "ze-csr-2", "ze-villa", "ze-club", "ze-strip", "ze-park", "ze-interior", "ze-row", "ze-aerial", "ze-fourplex", "ze-csr-1", "ze-csr-5"];

export function Gallery({ lang }: { lang: Lang }) {
  const g = C[lang].gallery;
  return (
    <section id="gallery" className="scroll-mt-16 bg-paper py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Heading eyebrow={g.eyebrow} title={g.title} sub={g.sub} /></Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GAL.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 40} className={i === 0 || i === 7 ? "col-span-2 row-span-2" : ""}>
              <figure className="group relative h-full overflow-hidden rounded-lg">
                <img src={`/images/${src}.webp`} alt={g.alts[i]} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3 pb-2.5 pt-8 text-xs text-paper">{g.alts[i]}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Lang }) {
  const f = C[lang].faq;
  return (
    <section id="faq" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal><h2 className="text-3xl text-ink md:text-4xl">{f.title}</h2><div className="ribbon-rule mt-5 w-40" /></Reveal>
        <div className="mt-8 divide-y divide-sand-2 border-y border-sand-2">
          {f.items.map((x) => (
            <details key={x.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] text-ink">
                <span>{x.q}</span>
                <span className="mt-1 shrink-0 text-brass transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-8 text-ink/70"><Bidi>{x.a}</Bidi></p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
