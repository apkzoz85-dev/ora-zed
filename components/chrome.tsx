"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";
import { WaLink, CallLink, MailLink } from "./contact-links";
import { WaIcon, PhoneIcon, MailIcon } from "./icons";

export function MobileBar({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.3fr_1fr_1fr] gap-2 border-t border-line bg-paper/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <WaLink lang={lang} className="flex items-center justify-center gap-2 rounded-full bg-wa py-3 text-sm font-semibold text-white">
        <WaIcon className="h-[18px] w-[18px]" />
        {t.whatsapp}
      </WaLink>
      <CallLink className="flex items-center justify-center gap-1.5 rounded-full bg-ink py-3 text-sm font-semibold text-paper">
        <PhoneIcon className="h-4 w-4" />
        {t.call}
      </CallLink>
      <MailLink lang={lang} className="flex items-center justify-center gap-1.5 rounded-full border border-ink py-3 text-sm font-semibold text-ink">
        <MailIcon className="h-4 w-4" />
        {t.mail}
      </MailLink>
    </div>
  );
}

export function CookieConsent({ lang }: { lang: Lang }) {
  const t = C[lang];
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!window.localStorage.getItem("cookie-ok")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-3xl rounded-md bg-ink px-5 py-4 text-paper shadow-xl md:bottom-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm leading-7 text-[#CFC6BA]">{t.cookie}</p>
        <button
          onClick={() => {
            try { window.localStorage.setItem("cookie-ok", "1"); } catch {}
            setShow(false);
          }}
          className="rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink"
        >
          {t.ok}
        </button>
      </div>
    </div>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = C[lang];
  return (
    <footer className="border-t border-ink-2 bg-ink pb-24 text-[#A9A096] md:pb-0">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 py-7 text-[13px] leading-7 md:px-8">
        <p className="max-w-3xl">{t.footer(site.agency)}</p>
        <nav className="flex gap-5">
          <Link href={href(lang, "/about")} className="hover:text-paper">{t.links.about}</Link>
          <Link href={href(lang, "/privacy")} className="hover:text-paper">{t.links.privacy}</Link>
          <Link href={href(lang, "/disclaimer")} className="hover:text-paper">{t.links.disclaimer}</Link>
        </nav>
      </div>
      <div className="border-t border-ink-2">
        <p className="mx-auto max-w-[1240px] px-5 py-4 text-xs md:px-8">
          <span dir="ltr" className="inline-block">
            © {new Date().getFullYear()} {site.agency} ·{" "}
            <a href={site.agencyCredit.url} target="_blank" rel="nofollow noopener" className="hover:text-paper">
              Designed &amp; Managed by {site.agencyCredit.name}
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
