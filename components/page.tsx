import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Check,
  ChevronDown,
  ConciergeBell,
  Dumbbell,
  Footprints,
  Laptop,
  MapPin,
  ShoppingBasket,
  Trophy,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { LeadForm } from "./lead-form";
import { LeadModalProvider } from "./lead-modal";
import { Calculator } from "./calculator";
import { CallLink, LeadButton, Reveal, WaLink, WhatsAppIcon } from "./actions";
import { CookieConsent, Header, StickyActions, Wordmark } from "./chrome";
import { site, fmt } from "@/lib/site";
import { C, href, type Lang, type Offer } from "@/lib/content";

const AMENITY_ICONS = [Trophy, Waves, ConciergeBell, Laptop, Dumbbell, UtensilsCrossed, ShoppingBasket, Footprints, Car];

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-3 text-sm font-semibold ${light ? "text-gold" : "text-accent"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold" : "bg-accent"}`} />
      {children}
    </p>
  );
}

const priceM = (n: number) => (n / 1e6).toFixed(1);

export default function Landing({ lang }: { lang: Lang }) {
  const t = C[lang];
  const u = t.units;

  const unitCard = (o: Offer, i: number) => {
    const unit = o.units[i];
    const down = unit.price !== null && o.dp > 0 ? (unit.price * 5) / 100 : null; // أقل مقدم معلن 5%
    return (
      <Reveal key={unit.type} delay={i * 80}>
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/5 transition hover:shadow-xl">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={unit.image}
              alt={`${unit.type} — ${o.short} ${t.gallery.suffix}`}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute start-3 top-3 rounded-md bg-deep/85 px-3 py-1 font-latin text-sm font-semibold tracking-wider text-white" dir="ltr">
              {o.label}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h4 className="font-display text-xl font-bold text-deep">{unit.type}</h4>
            <p className="mt-1 text-sm font-medium text-ink/70">{unit.spec}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {unit.tags.map((p) => (
                <li key={p} className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-deep">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-5">
              <div className="border-t border-ink/10 pt-4">
                {unit.price !== null ? (
                  <>
                    <p className="text-xs text-ink/55">{u.from}</p>
                    <p className="font-display text-2xl font-bold text-cta">
                      <span dir="ltr">{fmt(unit.price)}</span> <span className="text-base">{t.ui.egp}</span>
                    </p>
                    <p className="mt-1 text-sm text-ink/65">
                      {down === null ? (
                        u.noDown
                      ) : (
                        <>
                          {u.downFrom} <strong dir="ltr">{fmt(down)}</strong>
                        </>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-ink/55">{t.ui.new}</p>
                    <p className="font-display text-2xl font-bold text-wine">{u.onRequest}</p>
                    <p className="mt-1 text-sm text-ink/65">{u.onRequestSub}</p>
                  </>
                )}
              </div>
              <LeadButton
                source={`unit-card-${o.slug}-${i}`}
                unit={`${unit.type} — ${o.short}`}
                title={u.modalTitle(unit.type, o.short)}
                sub={u.modalSub}
                className="mt-4 w-full rounded-lg bg-deep px-4 py-3.5 font-bold text-white transition hover:bg-cta"
              >
                {u.cta}
              </LeadButton>
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <WaLink
                  msg={u.wa(unit.type, unit.spec, o.short)}
                  label={u.waLabel(unit.type)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-wa px-3 py-3 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="size-5" /> {t.ui.whatsapp}
                </WaLink>
                <CallLink
                  label={u.callLabel(unit.type)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-deep/25 px-3 py-3 text-sm font-bold text-deep transition hover:bg-deep hover:text-white"
                />
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    );
  };

  return (
    <LeadModalProvider lang={lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faq.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Header />

      <main id="top" className="pb-[58px] md:pb-0">
        {/* ============ HERO ============ */}
        <section className="relative isolate overflow-hidden bg-deep text-white">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/lv-hero-m.webp" />
            <img
              src="/images/lv-hero.webp"
              alt={t.hero.alt}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 -z-10 size-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/85 via-deep/60 to-deep/90 lg:bg-gradient-to-r lg:from-deep/90 lg:via-deep/60 lg:to-deep/30 rtl:lg:bg-gradient-to-l" />

          <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-36">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
                <MapPin className="size-4" aria-hidden />
                {t.hero.pill}
              </p>
              <h1 className="text-[2.5rem] font-extrabold leading-[1.2] sm:text-6xl lg:text-[4.2rem]">
                {t.hero.h1a}
                <br />
                <span className="text-gold">{t.hero.h1b}</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{t.hero.body}</p>

              <dl className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-white/20 rounded-xl border border-white/20 bg-white/10 text-center backdrop-blur rtl:divide-x-reverse">
                {t.hero.stats.map(([l, v, s]) => (
                  <div key={l} className="px-2 py-4">
                    <dt className="text-xs text-white/70">{l}</dt>
                    <dd className="mt-1 font-display text-xl font-bold sm:text-2xl">
                      <span dir="ltr">{v}</span> {s}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 hidden items-center gap-3 lg:flex">
                <WaLink className="flex items-center gap-2 rounded-lg bg-wa px-5 py-3.5 font-bold text-white transition hover:brightness-110">
                  <WhatsAppIcon /> {t.ui.askWa}
                </WaLink>
                <CallLink className="flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3.5 font-bold" />
              </div>
            </div>

            <div id="register" className="cut rounded-2xl bg-cream p-5 text-ink shadow-2xl sm:p-7">
              <h2 className="pe-8 text-2xl font-bold text-deep">{t.hero.formTitle}</h2>
              <p className="mb-5 mt-1.5 text-sm text-ink/65">{t.hero.formSub}</p>
              <LeadForm source="hero" idPrefix="h" />
            </div>
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <Reveal>
            <Eyebrow>{t.intro.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-snug text-deep sm:text-4xl">{t.intro.title}</h2>
            <p className="mt-5 text-lg leading-loose text-ink/75">{t.intro.body}</p>
            <ul className="mt-6 grid grid-cols-3 gap-3 text-center">
              {t.intro.stats.map(([n, l]) => (
                <li key={l} className="rounded-xl bg-white p-4 ring-1 ring-ink/5">
                  <span className="block font-display text-2xl font-bold text-cta" dir="ltr">
                    {n}
                  </span>
                  <span className="text-sm text-ink/60">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="cut-lg relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/lv-towers-day.webp" alt={t.intro.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 start-5 rounded-xl bg-accent px-5 py-3 text-white shadow-lg">
              <p className="font-latin text-lg font-semibold tracking-wider" dir="ltr">
                {t.intro.badge}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ LEVORA TOWER (الطرح الجديد) ============ */}
        <section id="levora" className="relative overflow-hidden bg-wine py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <Reveal>
              <Eyebrow light>{t.levora.eyebrow}</Eyebrow>
              <p className="font-latin text-sm font-semibold tracking-[0.28em] text-gold/90" dir="ltr">
                {t.levora.latin}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-snug sm:text-4xl">{t.levora.title}</h2>
              <p className="mt-4 text-lg leading-loose text-white/80">{t.levora.body}</p>

              <dl className="mt-7 grid grid-cols-2 gap-3">
                {t.levora.facts.map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <dt className="font-display text-xl font-bold text-gold sm:text-2xl" dir="ltr">
                      {v}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-white/75">{l}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 space-y-2.5">
                {t.levora.points.map((p) => (
                  <li key={p} className="flex gap-3 text-white/85">
                    <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LeadButton
                  source="levora"
                  unit={t.form.options[0]}
                  title={t.levora.modalTitle}
                  sub={t.levora.modalSub}
                  className="rounded-lg bg-gold px-6 py-4 font-bold text-wine transition hover:bg-white"
                >
                  {t.levora.cta}
                </LeadButton>
                <WaLink
                  msg={u.wa(t.offers[0].short, "64–146 m²", "ORA")}
                  className="flex items-center justify-center gap-2 rounded-lg bg-wa px-6 py-4 font-bold text-white"
                >
                  <WhatsAppIcon /> {t.ui.whatsapp}
                </WaLink>
                <CallLink className="flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-4 font-bold" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-5 gap-3">
                <div className="cut-lg relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src="/images/lv-tower.webp" alt={t.levora.alt1} fill sizes="(min-width:1024px) 28vw, 60vw" className="object-cover" />
                </div>
                <div className="col-span-2 grid grid-rows-2 gap-3">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/lv-pool-night.webp" alt={t.levora.alt2} fill sizes="(min-width:1024px) 18vw, 40vw" className="object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/lv-kitchen.webp" alt={t.gallery.items[2][1]} fill sizes="(min-width:1024px) 18vw, 40vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
            <h3 className="text-lg font-bold text-gold">{t.levora.servicesTitle}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.levora.services.map((s) => (
                <li key={s} className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/85">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ============ UNITS ============ */}
        <section id="units" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <Eyebrow>{u.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-snug text-deep sm:text-4xl">{u.title}</h2>
              <p className="mt-3 text-lg text-ink/70">{u.sub}</p>
            </Reveal>

            <nav className="mt-7 flex flex-wrap gap-2" aria-label={u.eyebrow}>
              {t.offers.map((o) => (
                <a
                  key={o.slug}
                  href={`#units-${o.slug}`}
                  className="rounded-full border border-deep/20 px-4 py-2 text-sm font-semibold text-deep transition hover:bg-deep hover:text-white"
                >
                  {o.short}
                </a>
              ))}
            </nav>

            {t.offers.map((o) => (
              <div key={o.slug} id={`units-${o.slug}`} className="mt-12 scroll-mt-24">
                <Reveal>
                  <div className="flex flex-col gap-3 border-b border-ink/10 pb-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="font-latin text-sm font-semibold tracking-[0.24em] text-accent" dir="ltr">
                        {o.label}
                      </p>
                      <h3 className="mt-1 flex flex-wrap items-center gap-3 text-2xl font-bold text-deep">
                        {o.name}
                        {o.badge && (
                          <span className={`rounded-md px-2.5 py-1 font-sans text-xs font-bold text-white ${o.slug === "levora" ? "bg-wine" : "bg-cta"}`}>
                            {o.badge}
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink/70">{o.intro}</p>
                    </div>
                    <p className="shrink-0 rounded-lg bg-tint px-4 py-2.5 text-sm font-semibold text-deep">{o.plan}</p>
                  </div>
                </Reveal>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {o.units.map((_, i) => unitCard(o, i))}
                  {o.slug === "levora" && (
                    <Reveal delay={240}>
                      <div className="relative isolate flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-wine p-6 text-white">
                        <Image src="/images/lv-sunset.webp" alt={t.levora.alt1} fill sizes="(min-width:1024px) 25vw, 100vw" className="-z-10 object-cover opacity-45" />
                        <p className="font-latin text-sm font-semibold tracking-[0.24em] text-gold" dir="ltr">
                          {t.magnet.latin}
                        </p>
                        <p className="mt-2 font-display text-xl font-bold leading-snug">{t.magnet.title}</p>
                        <LeadButton
                          source="levora-brochure-tile"
                          unit={t.form.options[0]}
                          title={t.magnet.modalTitle}
                          sub={t.magnet.modalSub}
                          cta={t.magnet.modalCta}
                          className="mt-4 rounded-lg bg-gold px-4 py-3.5 font-bold text-wine transition hover:bg-white"
                        >
                          {t.magnet.modalCta}
                        </LeadButton>
                      </div>
                    </Reveal>
                  )}
                  {o.slug === "zed-strip" && (
                    <Reveal delay={120} className="sm:col-span-1 lg:col-span-3">
                      <div className="relative isolate flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl bg-deep p-6 text-white sm:p-8">
                        <Image src="/images/ze-park.webp" alt={`${o.short} — ${t.gallery.suffix}`} fill sizes="(min-width:1024px) 60vw, 100vw" className="-z-10 object-cover object-bottom opacity-35" />
                        <p className="max-w-xl font-display text-2xl font-bold leading-snug">{t.mid.title}</p>
                        <p className="mt-2 text-white/80">{t.mid.sub}</p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                          <LeadButton source="units-end" className="rounded-lg bg-white px-6 py-3.5 font-bold text-deep transition hover:bg-cream">
                            {t.mid.cta}
                          </LeadButton>
                          <WaLink className="flex items-center justify-center gap-2 rounded-lg bg-wa px-6 py-3.5 font-bold text-white">
                            <WhatsAppIcon /> {t.ui.whatsapp}
                          </WaLink>
                        </div>
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            ))}
            <p className="mt-8 text-center text-xs text-ink/50">{u.note}</p>
          </div>
        </section>

        {/* ============ PAYMENT ============ */}
        <section id="payment" className="relative overflow-hidden bg-deep py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow light>{t.payment.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-snug sm:text-4xl">{t.payment.title}</h2>
              <p className="mt-4 text-lg leading-loose text-white/75">{t.payment.body}</p>
              <ol className="mt-8 space-y-4">
                {t.payment.steps.map(([s, d], i) => (
                  <li key={s} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold font-display font-bold text-deep">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold">{s}</p>
                      <p className="text-sm text-white/65">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120} className="text-ink">
              <Calculator />
            </Reveal>
          </div>
        </section>

        {/* ============ LIFESTYLE ============ */}
        <section id="lifestyle" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>{t.lifestyle.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-snug text-deep sm:text-4xl">{t.lifestyle.title}</h2>
            <p className="mt-3 text-lg text-ink/70">{t.lifestyle.sub}</p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.lifestyle.tiles.map(([src, title, d], i) => (
              <Reveal key={title} delay={(i % 2) * 100}>
                <figure className="group relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`${title} — ${t.gallery.suffix}`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-16 text-white">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-white/80">{d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.lifestyle.amenities.map((label, i) => {
                const Icon = AMENITY_ICONS[i % AMENITY_ICONS.length];
                return (
                  <li key={label} className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-ink/5">
                    <Icon className="size-6 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm font-semibold text-deep">{label}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </section>

        {/* ============ MID CTA ============ */}
        <section className="relative isolate overflow-hidden bg-cta text-white">
          <Image src="/images/lv-podium-night.webp" alt={t.mid.alt} fill sizes="100vw" className="-z-10 object-cover opacity-30" />
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{t.mid.title}</h2>
              <p className="mt-2 text-white/85">{t.mid.sub}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <LeadButton source="mid-cta" className="rounded-lg bg-white px-6 py-4 font-bold text-deep transition hover:bg-cream">
                {t.mid.cta}
              </LeadButton>
              <WaLink className="flex items-center justify-center gap-2 rounded-lg bg-wa px-6 py-4 font-bold text-white">
                <WhatsAppIcon /> {t.ui.whatsapp}
              </WaLink>
            </div>
          </div>
        </section>

        {/* ============ LOCATION ============ */}
        <section id="location" className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow>{t.location.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-snug text-deep sm:text-4xl">{t.location.title}</h2>
              <p className="mt-4 text-lg leading-loose text-ink/75">{t.location.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {t.location.distances.map(([time, place]) => (
                  <li key={place} className="rounded-xl bg-cream p-4">
                    <span className="block font-display text-xl font-bold text-cta">{time}</span>
                    <span className="text-sm text-ink/65">{place}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-deep">{t.location.nearLabel}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {t.location.near.map((n) => (
                  <li key={n} className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/75">
                    {n}
                  </li>
                ))}
              </ul>
              <LeadButton
                source="location"
                title={t.location.modalTitle}
                sub={t.location.modalSub}
                cta={t.location.modalCta}
                className="mt-7 rounded-lg bg-cta px-6 py-4 font-bold text-white transition hover:bg-cta-2"
              >
                {t.location.cta}
              </LeadButton>
            </Reveal>
            <Reveal delay={120}>
              <div className="cut-lg overflow-hidden rounded-2xl bg-tint">
                <iframe
                  title={t.location.mapTitle}
                  src={`https://www.google.com/maps?q=ZED+East+ORA+New+Cairo&hl=${lang}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3] w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ BROCHURE (lead magnet) ============ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-wine">
              <Image src="/images/lv-plan.webp" alt={t.magnet.alt} fill sizes="100vw" className="-z-10 object-cover opacity-30 blur-[2px]" />
              <div className="flex min-h-[380px] flex-col items-center justify-center px-5 py-14 text-center text-white">
                <p className="font-latin text-sm font-semibold tracking-[0.3em] text-gold" dir="ltr">
                  {t.magnet.latin}
                </p>
                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{t.magnet.title}</h2>
                <p className="mt-3 max-w-lg text-white/85">{t.magnet.sub}</p>
                <LeadButton
                  source="brochure"
                  unit={t.form.options[0]}
                  title={t.magnet.modalTitle}
                  sub={t.magnet.modalSub}
                  cta={t.magnet.modalCta}
                  className="mt-7 rounded-lg bg-white px-8 py-4 font-bold text-wine transition hover:bg-cream"
                >
                  {t.magnet.cta}
                </LeadButton>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ GALLERY ============ */}
        <section id="gallery" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold text-deep sm:text-4xl">{t.gallery.title}</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 md:auto-rows-[210px] md:grid-cols-4">
              {t.gallery.items.map(([src, alt], i) => (
                <div
                  key={src}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto ${
                    i === 0 ? "col-span-2 md:row-span-2" : i === 1 ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${alt} — ${t.gallery.suffix}`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DEVELOPER ============ */}
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <Reveal>
            <div className="cut-lg relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image src="/images/lv-sunset.webp" alt={t.developer.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>{t.developer.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold leading-snug text-deep sm:text-4xl">{t.developer.title}</h2>
            <p className="mt-4 text-lg leading-loose text-ink/75">{t.developer.p1}</p>
            <p className="mt-4 leading-loose text-ink/70">{t.developer.p2}</p>
          </Reveal>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <Eyebrow>{t.faq.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold text-deep sm:text-4xl">{t.faq.title}</h2>
            </Reveal>
            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {t.faq.items.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-deep [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-base font-bold sm:text-lg">{f.q}</h3>
                    <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-5 leading-loose text-ink/75">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative isolate overflow-hidden bg-deep text-white">
          <Image src="/images/lv-pool-night.webp" alt={t.final.alt} fill sizes="100vw" className="-z-10 object-cover opacity-35" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <Eyebrow light>{t.final.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-snug sm:text-5xl sm:leading-tight">{t.final.title}</h2>
              <p className="mt-4 text-lg text-white/80">{t.final.sub}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WaLink className="flex items-center gap-2 rounded-lg bg-wa px-5 py-3.5 font-bold text-white">
                  <WhatsAppIcon /> {t.ui.whatsapp}
                </WaLink>
                <CallLink className="flex items-center gap-2 rounded-lg border border-white/50 px-5 py-3.5 font-bold" />
              </div>
            </div>
            <div className="cut rounded-2xl bg-cream p-5 text-ink shadow-2xl sm:p-7">
              <h3 className="pe-8 text-2xl font-bold text-deep">{t.final.formTitle}</h3>
              <p className="mb-5 mt-1.5 text-sm text-ink/65">{t.final.formSub}</p>
              <LeadForm source="footer-form" idPrefix="b" cta={t.final.formCta} />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink pb-24 pt-12 text-white/70 md:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Wordmark light />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <CallLink className="flex items-center gap-2 font-bold text-white" />
              <WaLink className="flex items-center gap-2 font-bold text-white">
                <WhatsAppIcon className="size-4" /> {t.ui.whatsapp}
              </WaLink>
              {t.footer.links.map(([p, label]) => (
                <Link key={p} href={href(lang, p)} className="underline underline-offset-4 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/55">
            <p>
              <strong className="text-white/80">{t.footer.disclosureLabel}</strong> {t.footer.disclosure}
            </p>
            <p>
              <strong className="text-white/80">{t.footer.pricesLabel}</strong> {t.footer.prices}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.agency} · {t.footer.copy}
            </p>
            <p dir="ltr">
              Designed &amp; Managed by{" "}
              {site.agencyCredit.url ? (
                <a href={site.agencyCredit.url} target="_blank" rel="nofollow noopener" className="hover:text-white">
                  {site.agencyCredit.name}
                </a>
              ) : (
                site.agencyCredit.name
              )}
            </p>
          </div>
        </div>
      </footer>

      <StickyActions />
      <CookieConsent />
    </LeadModalProvider>
  );
}
