"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { C, type Lang } from "@/lib/content";
import { WaLink, CallLink, MailLink } from "./contact-links";
import { WaIcon, PhoneIcon, MailIcon } from "./icons";

export default function Contact({ lang }: { lang: Lang }) {
  const t = C[lang].contact;
  const [pick, setPick] = useState<string | null>(null);

  return (
    <section id="contact" className="mt-16 bg-ink text-paper md:mt-24">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-10 px-5 py-14 md:gap-12 md:px-8 md:py-[88px]">
        <div className="min-w-0 flex-[1_1_480px]">
          <p className="text-sm text-[#C9A98F] md:text-[15px]">{t.kicker}</p>
          <CallLink className="num mt-2 block text-[38px] font-bold tracking-[0.02em] text-paper transition hover:text-[#C9A98F] md:mt-3 md:text-[72px]">
            {site.phoneDisplay}
          </CallLink>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#CFC6BA] md:text-[17px] md:leading-9">{t.body}</p>
          <MailLink lang={lang} interest={pick} className="num mt-4 inline-block text-[15px] text-[#CFC6BA] underline underline-offset-8 transition hover:text-paper">
            {site.email}
          </MailLink>
        </div>

        <div className="flex w-full flex-col gap-3.5 md:w-auto md:flex-[0_1_440px]">
          <p className="text-sm text-[#CFC6BA] md:text-[15px]">{t.pick}</p>
          <div className="grid grid-cols-2 gap-2">
            {t.interests.map((i) => (
              <button
                key={i}
                type="button"
                aria-pressed={pick === i}
                onClick={() => setPick(pick === i ? null : i)}
                className={`rounded-full border px-3 py-3 text-sm transition md:text-[15px] ${
                  pick === i ? "border-paper bg-paper text-ink" : "border-[#5E574F] text-paper hover:border-paper"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
          <WaLink lang={lang} interest={pick} className="mt-1 flex items-center justify-center gap-2.5 rounded-full bg-wa py-4 text-base font-semibold text-white transition hover:bg-wa-2 md:text-[17px]">
            <WaIcon />
            {t.wa}
          </WaLink>
          <div className="grid grid-cols-2 gap-2">
            <CallLink className="flex items-center justify-center gap-2 rounded-full border border-paper py-3.5 text-[15px] font-semibold text-paper transition hover:bg-paper hover:text-ink">
              <PhoneIcon className="h-[18px] w-[18px]" />
              {t.call}
            </CallLink>
            <MailLink lang={lang} interest={pick} className="flex items-center justify-center gap-2 rounded-full border border-paper py-3.5 text-[15px] font-semibold text-paper transition hover:bg-paper hover:text-ink">
              <MailIcon className="h-[18px] w-[18px]" />
              {t.mail}
            </MailLink>
          </div>
        </div>
      </div>
    </section>
  );
}
