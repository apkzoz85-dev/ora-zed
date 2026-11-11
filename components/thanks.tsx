import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";
import { WhatsAppIcon } from "./actions";

export default function Thanks({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <main className="flex min-h-dvh items-center justify-center bg-deep px-4 py-16 text-center text-white">
      <div className="max-w-md">
        <CheckCircle2 className="mx-auto size-16 text-gold" aria-hidden />
        <h1 className="mt-5 text-3xl font-bold">{t.thanks.title}</h1>
        <p className="mt-3 leading-relaxed text-white/80">{t.thanks.body}</p>
        <div className="mt-7 grid gap-3">
          <a
            href={waLink(t.thanks.wa)}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-lg bg-wa px-5 py-4 font-bold text-white"
          >
            <WhatsAppIcon /> {t.thanks.cta}
          </a>
          <a
            href={`tel:${site.phoneIntl}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-4 font-bold"
          >
            <Phone className="size-4" aria-hidden />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>
        </div>
        <Link href={href(lang)} className="mt-8 inline-block text-sm text-white/60 underline">
          {t.ui.back}
        </Link>
      </div>
    </main>
  );
}
