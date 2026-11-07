import Link from "next/link";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";

export default function Legal({ lang, page }: { lang: Lang; page: "about" | "privacy" | "disclaimer" }) {
  const t = C[lang];
  const d = t.legal[page];
  return (
    <main className="min-h-screen bg-paper">
      <div className="bg-ink py-10">
        <div className="mx-auto max-w-3xl px-5">
          <Link href={href(lang)} className="num text-sm tracking-[0.28em] text-paper">ZED EAST</Link>
          <h1 className="mt-4 text-3xl text-paper">{d.title}</h1>
          <div className="ribbon-rule mt-5 w-40" />
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-14 text-[15px] leading-8 text-ink/75">
        {d.body.map((p) => <p key={p}>{p}</p>)}
        <p className="pt-6 text-sm">
          {t.ui.contact}: <a className="num text-ink underline" dir="ltr" href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a> · {site.email}
        </p>
        <Link href={href(lang)} className="inline-block pt-4 text-ink underline">{t.ui.back}</Link>
      </div>
    </main>
  );
}
