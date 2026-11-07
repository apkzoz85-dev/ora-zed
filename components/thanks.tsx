import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";

export default function Thanks({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-center">
      <div className="max-w-lg">
        <p className="eyebrow">Received</p>
        <h1 className="mt-4 text-3xl text-paper md:text-4xl">{t.thanks.title}</h1>
        <div className="ribbon-rule mx-auto mt-6 w-40" />
        <p className="mt-6 text-[15px] leading-8 text-paper/70">{t.thanks.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={waLink(t.thanks.wa)} target="_blank" rel="noopener" className="rounded-full bg-brass-2 px-7 py-3 font-semibold text-ink">{t.thanks.cta}</a>
          <a href={`tel:${site.phoneIntl}`} dir="ltr" className="num rounded-full border border-paper/30 px-7 py-3 font-semibold text-paper">{site.phoneDisplay}</a>
        </div>
        <Link href={href(lang)} className="mt-8 inline-block text-sm text-paper/60 underline">{t.ui.back}</Link>
      </div>
    </main>
  );
}
