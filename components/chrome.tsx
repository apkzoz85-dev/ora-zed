"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CallLink, LeadButton, WaLink, WhatsAppIcon, useLang, useT } from "./actions";
import { href } from "@/lib/content";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex flex-col leading-none" aria-label="ZED East by ORA" dir="ltr">
      <span className={`font-latin text-[1.35rem] font-semibold tracking-[0.14em] ${light ? "text-white" : "text-deep"}`}>
        ZED EAST
      </span>
      <span className={`mt-1 font-latin text-[0.62rem] font-semibold tracking-[0.34em] ${light ? "text-white/75" : "text-accent"}`}>
        BY ORA · NEW CAIRO
      </span>
    </a>
  );
}

export function Header() {
  const t = useT();
  const lang = useLang();
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-cream/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Wordmark light={!solid} />
        <nav className="hidden items-center gap-5 lg:flex" aria-label={t.ui.navLabel}>
          {t.ui.nav.map(([h, label]) => (
            <a
              key={h}
              href={h}
              className={`text-sm font-medium transition hover:opacity-70 ${solid ? "text-ink" : "text-white"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={href(lang === "ar" ? "en" : "ar")}
            aria-label={t.ui.otherLangLabel}
            className={`flex size-10 items-center justify-center rounded-lg border text-sm font-bold ${
              solid ? "border-deep/25 text-deep" : "border-white/50 text-white"
            }`}
          >
            {t.ui.otherLang}
          </Link>
          <CallLink
            label={t.ui.callUs}
            className={`hidden items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-bold xl:flex ${
              solid ? "border-deep/25 text-deep" : "border-white/50 text-white"
            }`}
          />
          <LeadButton
            source="header"
            className="rounded-lg bg-cta px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cta-2"
          >
            {t.ui.register}
          </LeadButton>
        </div>
      </div>
    </header>
  );
}

/** شريط الموبايل السفلي + زرّي واتساب واتصال العائمين للديسكتوب */
export function StickyActions() {
  const t = useT();
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] gap-px border-t border-ink/10 bg-ink/10 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_rgb(0_0_0/0.12)] md:hidden">
        <CallLink label={t.ui.call} className="flex items-center justify-center gap-2 bg-white py-3.5 text-sm font-bold text-deep">
          <Phone className="size-4" aria-hidden />
          {t.ui.call}
        </CallLink>
        <WaLink className="flex items-center justify-center gap-2 bg-white py-3.5 text-sm font-bold text-wa">
          <WhatsAppIcon className="size-5" />
          {t.ui.whatsapp}
        </WaLink>
        <LeadButton source="mobile-bar" className="bg-cta py-3.5 text-sm font-bold text-white">
          {t.ui.getPrices}
        </LeadButton>
      </div>

      <div className="fixed bottom-6 end-6 z-40 hidden flex-col gap-3 md:flex">
        <CallLink
          label={t.ui.callUs}
          className="flex size-14 items-center justify-center rounded-full bg-deep text-white shadow-xl transition hover:bg-cta"
        >
          <Phone className="size-6" aria-hidden />
        </CallLink>
        <WaLink
          label={t.ui.whatsapp}
          className="wa-pulse flex size-14 items-center justify-center rounded-full bg-wa text-white shadow-xl"
        >
          <WhatsAppIcon className="size-7" />
        </WaLink>
      </div>
    </>
  );
}

export function CookieConsent() {
  const t = useT();
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie_ok")) setShow(true);
    } catch {}
  }, []);
  if (!show) return null;
  const ok = () => {
    try {
      localStorage.setItem("cookie_ok", "1");
    } catch {}
    setShow(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-[68px] z-30 mx-auto flex max-w-xl items-center gap-3 rounded-xl bg-ink/95 px-4 py-3 text-xs text-white shadow-xl md:bottom-5 md:start-5 md:end-auto md:mx-0">
      <p className="flex-1 leading-relaxed">{t.ui.cookie}</p>
      <button onClick={ok} className="rounded-md bg-white px-3 py-1.5 font-bold text-ink">
        {t.ui.ok}
      </button>
    </div>
  );
}
