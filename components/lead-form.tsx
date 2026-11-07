"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";
import { C, href, type Lang } from "@/lib/content";
import { track } from "@/lib/track";
import { Reveal, Heading, Bidi } from "./ui";
import CtaWhatsapp from "./cta-whatsapp";

export default function LeadForm({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = C[lang];
  const l = t.lead;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const uid = compact ? "c" : "f";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    const data = new FormData(e.currentTarget);
    const phone = String(data.get("phone") || "").replace(/\s|-/g, "");
    if (!(/^01[0125][0-9]{8}$/.test(phone) || /^\+?[1-9][0-9]{7,14}$/.test(phone))) return setErr(l.errPhone);
    if (String(data.get("name") || "").trim().length < 3) return setErr(l.errName);

    data.append("access_key", site.web3forms);
    data.append("subject", `New lead — ZED East${data.get("interest") ? ` (${data.get("interest")})` : ""} [${lang.toUpperCase()}]`);
    data.append("from_name", site.agency);

    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        track("form");
        router.push(href(lang, "/thank-you"));
      } else setErr(l.err);
    } catch {
      setErr(l.errNet);
    } finally {
      setBusy(false);
    }
  }

  const field = "w-full rounded-lg border border-sand-2 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/40";

  const formEl = (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden="true" />
      <div>
        <label className="mb-2 block text-sm text-ink/70" htmlFor={`name-${uid}`}>{l.name}</label>
        <input id={`name-${uid}`} name="name" required className={field} placeholder={l.namePh} />
      </div>
      <div>
        <label className="mb-2 block text-sm text-ink/70" htmlFor={`phone-${uid}`}>{l.phone}</label>
        <input id={`phone-${uid}`} name="phone" inputMode="tel" required dir="ltr" className={`${field} num`} placeholder="01012345678" />
      </div>
      <div>
        <label className="mb-2 block text-sm text-ink/70" htmlFor={`interest-${uid}`}>{l.interest}</label>
        <select id={`interest-${uid}`} name="interest" className={field} defaultValue={l.interests[l.interests.length - 1]}>
          {l.interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      {!compact && (
        <div>
          <label className="mb-2 block text-sm text-ink/70" htmlFor={`note-${uid}`}>{l.note}</label>
          <textarea id={`note-${uid}`} name="note" rows={3} className={field} />
        </div>
      )}
      {err && <p className="text-sm text-red-700">{err}</p>}
      <button type="submit" disabled={busy} className="w-full rounded-full bg-ink py-3.5 font-semibold text-paper transition hover:bg-ink-2 disabled:opacity-60">
        {busy ? l.sending : l.send}
      </button>
      <p className="text-xs leading-6 text-ink/50">{l.consent}</p>
    </form>
  );

  if (compact) return formEl;

  return (
    <section id="lead" className="scroll-mt-16 bg-sand/40 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Heading eyebrow={l.eyebrow} title={l.title} sub={l.sub} />
          <ul className="mt-8 space-y-3 text-[15px] leading-7 text-ink/75">
            {l.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                <span><Bidi>{b}</Bidi></span>
              </li>
            ))}
          </ul>
          <CtaWhatsapp message={t.wa} className="mt-8 inline-block text-[15px] text-ink underline underline-offset-8 transition hover:text-brass">
            {l.waLink}
          </CtaWhatsapp>
        </Reveal>
        <Reveal delay={70}>
          <div className="slab p-6 shadow-sm md:p-7">{formEl}</div>
        </Reveal>
      </div>
    </section>
  );
}
