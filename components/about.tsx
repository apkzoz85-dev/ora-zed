import { C, type Lang } from "@/lib/content";
import Photo from "./photo";

export default function About({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <section id="location" className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-[28px] font-semibold md:text-[44px]">{t.location.title}</h2>
          <p className="mt-3 text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">{t.location.body}</p>
          <dl className="mt-6 border-t-2 border-ink">
            {t.location.rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-line py-3.5 text-[15px]">
                <dt className="text-mute">{k}</dt>
                <dd className="text-end font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-[28px] font-semibold md:text-[44px]">{t.developer.title}</h2>
          <p className="mt-3 text-[15px] leading-8 text-mute md:text-[17px] md:leading-9">{t.developer.body}</p>
          <Photo src="/images/developer.jpg" alt={t.developer.alt} className="mt-6 h-[220px] rounded-md md:h-[300px]" />
        </div>
      </div>
    </section>
  );
}
