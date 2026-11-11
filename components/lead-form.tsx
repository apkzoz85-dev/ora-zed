"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import { site, isWeb3Ready, waLink } from "@/lib/site";
import { href } from "@/lib/content";
import { track } from "@/lib/track";
import { useLang, useT } from "./actions";

type Props = {
  /** مكان الفورم في الصفحة — بيتبعت مع الليد عشان تعرف أنهي جزء بيحوّل */
  source: string;
  defaultUnit?: string;
  cta?: string;
  idPrefix?: string;
};

const normalizePhone = (v: string) =>
  v.replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[^\d+]/g, "");

export function LeadForm({ source, defaultUnit, cta, idPrefix = "f" }: Props) {
  const lang = useLang();
  const t = useT();
  const f = t.form;
  const router = useRouter();
  const [unit, setUnit] = useState(defaultUnit || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bot, setBot] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // لو الفورم اتفتح من كارت وحدة معينة بنعرضها كاختيار جاهز
  const options = defaultUnit && !f.options.includes(defaultUnit) ? [defaultUnit, ...f.options.slice(-1)] : f.options;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (bot || busy) return;
    setError("");

    const cleanPhone = normalizePhone(phone);
    if (name.trim().length < 2) return setError(f.errName);
    if (!/^\+?\d{9,15}$/.test(cleanPhone)) return setError(f.errPhone);

    const chosen = unit || f.options[f.options.length - 1];
    const qs = new URLSearchParams(window.location.search);
    const done = () => {
      track("form");
      try {
        sessionStorage.setItem("lead_done", "1");
      } catch {}
      router.push(href(lang, "/thank-you"));
    };

    setBusy(true);

    // لو مفتاح Web3Forms مش متحط: الليد بيروح واتساب مباشرة
    if (!isWeb3Ready()) {
      window.open(waLink(f.waFallback(name.trim(), chosen, cleanPhone)), "_blank", "noopener");
      return done();
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3forms,
          subject: `New lead — ZED East — ${chosen} [${lang.toUpperCase()}]`,
          from_name: "ZED East Landing",
          name: name.trim(),
          phone: cleanPhone,
          interest: chosen,
          source,
          page: window.location.href,
          utm_source: qs.get("utm_source") || "",
          utm_campaign: qs.get("utm_campaign") || "",
          utm_term: qs.get("utm_term") || "",
          gclid: qs.get("gclid") || "",
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      done();
    } catch {
      setBusy(false);
      setError(f.err);
    }
  }

  const field =
    "w-full rounded-lg border border-ink/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/25";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3.5">
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-ink/80">{f.unitQ}</legend>
        <div className="grid grid-cols-2 gap-2">
          {options.map((u, i) => {
            const on = unit === u;
            return (
              <button
                key={u}
                type="button"
                aria-pressed={on}
                onClick={() => setUnit(u)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                  options.length % 2 === 1 && i === options.length - 1 ? "col-span-2" : ""
                } ${on ? "border-cta bg-cta text-white" : "border-ink/15 bg-white text-ink hover:border-cta/60"}`}
              >
                {u}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${idPrefix}-name`} className="sr-only">
          {f.name}
        </label>
        <input
          id={`${idPrefix}-name`}
          className={field}
          placeholder={f.name}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-phone`} className="sr-only">
          {f.phone}
        </label>
        <input
          id={`${idPrefix}-phone`}
          className={`${field} text-start`}
          placeholder={f.phone}
          type="tel"
          inputMode="tel"
          dir={lang === "ar" ? "rtl" : "ltr"}
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        checked={bot}
        onChange={(e) => setBot(e.target.checked)}
        aria-hidden="true"
      />

      {error && (
        <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {error}{" "}
          {error === f.err && (
            <a href={waLink(t.wa)} target="_blank" rel="noopener" className="underline">
              {t.ui.whatsapp}
            </a>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-4 text-base font-bold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-2 disabled:opacity-70"
      >
        {busy && <Loader2 className="size-5 animate-spin" aria-hidden />}
        {busy ? f.sending : cta || f.cta}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink/55">
        <Lock className="size-3.5 shrink-0" aria-hidden />
        {f.privacy}
      </p>
    </form>
  );
}
