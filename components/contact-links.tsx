"use client";

import { site, waLink } from "@/lib/site";
import { C, type Lang } from "@/lib/content";
import { track } from "@/lib/track";

type L = { lang: Lang; className?: string; children: React.ReactNode; interest?: string | null; "aria-label"?: string };

export const mailLink = (lang: Lang, interest?: string | null) => {
  const t = C[lang];
  const body = `${t.waMessage(interest)}\n\n${t.mailBody}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(t.mailSubject(interest))}&body=${encodeURIComponent(body)}`;
};

export function WaLink({ lang, className, children, interest, ...rest }: L) {
  return (
    <a href={waLink(C[lang].waMessage(interest))} target="_blank" rel="noopener" onClick={() => track("whatsapp")} className={className} {...rest}>
      {children}
    </a>
  );
}

export function CallLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a href={`tel:${site.phoneIntl}`} onClick={() => track("call")} className={className}>
      {children}
    </a>
  );
}

export function MailLink({ lang, className, children, interest, ...rest }: L) {
  return (
    <a href={mailLink(lang, interest)} onClick={() => track("email")} className={className} {...rest}>
      {children}
    </a>
  );
}
