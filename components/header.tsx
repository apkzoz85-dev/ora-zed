"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";
import { track } from "@/lib/track";

export default function Header({ lang }: { lang: Lang }) {
  const t = C[lang];
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-ink/95 shadow-lg backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-5">
        <Link href={href(lang)} className="flex flex-col leading-none">
          <span className="num whitespace-nowrap text-[15px] tracking-[0.22em] text-paper sm:text-lg sm:tracking-[0.28em]">ZED EAST</span>
          <span className="mt-1 whitespace-nowrap text-[10px] text-brass-2 sm:text-[11px]">{t.footer.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {t.ui.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-paper/80 transition hover:text-brass-2">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={lang === "ar" ? "/en" : "/"} className="rounded-full px-2.5 py-2 text-[13px] font-semibold text-paper/85 transition hover:text-brass-2">
            {t.ui.otherLang}
          </a>
          <a href={`tel:${site.phoneIntl}`} onClick={() => track("call")} className="num hidden rounded-full border border-paper/25 px-4 py-2 text-sm text-paper transition hover:border-brass-2 hover:text-brass-2 sm:block">
            {site.phoneDisplay}
          </a>
          <a href={waLink(t.wa)} onClick={() => track("whatsapp")} target="_blank" rel="noopener" className="whitespace-nowrap rounded-full bg-brass-2 px-4 py-2 text-[13px] font-semibold text-ink transition hover:bg-brass-2/85 sm:px-5 sm:text-sm">
            {t.ui.contactNow}
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label={t.ui.menu} aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper xl:hidden">
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-paper/10 bg-ink px-5 py-3 xl:hidden">
          {t.ui.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-paper/10 py-3 text-paper/85 last:border-0">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
