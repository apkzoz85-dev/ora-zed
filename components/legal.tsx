import Link from "next/link";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";

export default function Legal({ lang, page }: { lang: Lang; page: "about" | "privacy" | "disclaimer" }) {
  const t = C[lang];
  const d = t.legal[page];
  return (
    <main className="min-h-dvh bg-cream">
      <div className="bg-deep py-10 text-white">
        <div className="mx-auto max-w-3xl px-5">
          <Link href={href(lang)} className="font-latin text-lg font-semibold tracking-[0.2em]" dir="ltr">
            ZED EAST
          </Link>
          <h1 className="mt-4 text-3xl font-bold">{d.title}</h1>
          <span className="mt-5 block h-px w-16 bg-gold" />
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-14 leading-loose text-ink/75">
        {d.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="pt-6 text-sm">
          {t.ui.contact}:{" "}
          <a className="font-bold text-deep underline" dir="ltr" href={`tel:${site.phoneIntl}`}>
            {site.phoneDisplay}
          </a>{" "}
          · {site.email}
        </p>
        <Link href={href(lang)} className="inline-block pt-4 font-semibold text-cta underline">
          {t.ui.back}
        </Link>
      </div>
    </main>
  );
}
