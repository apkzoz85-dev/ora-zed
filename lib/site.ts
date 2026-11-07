// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط. النصوص والأسعار في lib/content.ts
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://orapropertiese.org", // ← الدومين الفعلي (بدون / في الآخر)
  agency: "Grandeur Spaces",

  phoneIntl: "+201030083122",
  phoneDisplay: "01030083122",
  whatsapp: "201030083122",
  email: "leads@grandeur-spaces.com",

  web3forms: "f8edb7d0-abd8-49c6-bf1c-f71073b981dc",

  // Google Ads
  gtag: "",
  conv: { form: "", whatsapp: "", call: "" },

  agencyCredit: { name: "One Click", url: "https://example.com" }, // ← رابط One Click
} as const;

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => n.toLocaleString("en-US");
