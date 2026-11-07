import { location, amenities, faqs } from "@/lib/site";
import { Reveal, Heading } from "./ui";

export function Location() {
  return (
    <section id="location" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading
            eyebrow="The Location"
            title={location.headline}
            sub={location.body}
          />
          <ul className="mt-8 space-y-4">
            {location.points.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between border-b border-sand-2 pb-3"
              >
                <span className="text-[15px] text-ink">{p.name}</span>
                <span className="text-sm text-ink/60">{p.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={70}>
          <div className="frame h-full min-h-[340px]">
            <img
              src="/images/ze-aerial.webp"
              alt="الماستر بلان — زد إيست من أورا"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Amenities() {
  return (
    <section className="bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            eyebrow="The Lifestyle"
            title="الحياة في مشاريع أورا"
            sub="نادي رياضي على 40 فدان في زد إيست، وشقق مخدومة بإدارة أورا، ومنطقة تجارية وعيادات."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <div className="slab h-full p-5 shadow-sm md:p-6">
                <h3 className="text-lg text-ink">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-ink/70">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const shots = [
  { src: "/images/ze-emerald.webp", alt: "بحيرة ذا إميرالد كوليكشن — زد إيست" },
  { src: "/images/ze-csr-2.webp", alt: "كلوب سايد ريزيدنس — زد إيست" },
  { src: "/images/ze-villa.webp", alt: "ڤيلا مستقلة — ذا إميرالد" },
  { src: "/images/ze-club.webp", alt: "نادي ZED الرياضي — تصوير فعلي" },
  { src: "/images/ze-strip.webp", alt: "زد ستريب — المنطقة التجارية" },
  { src: "/images/ze-park.webp", alt: "المساحات الخضراء في زد إيست" },
  { src: "/images/ze-interior.webp", alt: "تصميم داخلي — ذا إميرالد" },
  { src: "/images/ze-row.webp", alt: "دوبلكس — ذا إميرالد" },
  { src: "/images/res-garden.webp", alt: "سولانا إيست لين — المباني السكنية" },
  { src: "/images/medica-plaza.webp", alt: "بلازا ميديكا — سولانا إيست لين" },
  { src: "/images/ze-csr-1.webp", alt: "مباني كلوب ريزيدنس — زد إيست" },
  { src: "/images/medica-clinic.webp", alt: "عيادة متشطبة — ميديكا" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Heading
            light
            eyebrow="Gallery"
            title="من داخل مشاريع أورا"
            sub="صور من زد إيست (ذا إميرالد، كلوب سايد ريزيدنس، النادي، زد ستريب) وسولانا إيست لين."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 40}>
              <div className="frame">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-32 w-full object-cover sm:h-48 md:h-64"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-paper py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <Heading eyebrow="FAQ" title="أسئلة متكررة" />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="slab group p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-[17px] text-ink marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-4 text-[15px] leading-8 text-ink/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
