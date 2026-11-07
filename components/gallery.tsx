import { C, type Lang } from "@/lib/content";
import Photo from "./photo";

export default function Gallery({ lang }: { lang: Lang }) {
  const t = C[lang].gallery;
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
        {t.shots.map((s) => (
          <Photo key={s.src} src={s.src} alt={s.alt} className="h-[140px] rounded-md md:h-[300px]" />
        ))}
      </div>
      <p className="mt-3 text-xs text-mute">{t.note}</p>
    </section>
  );
}
