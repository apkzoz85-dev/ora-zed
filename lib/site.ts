// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط. النصوص والأسعار في lib/content.ts
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.orazed.org", // ← بدون / في الآخر
  agency: "Grandeur Spaces",

  phoneIntl: "+201030083122",
  phoneDisplay: "01030083122",
  whatsapp: "201030083122",
  email: "leads@orazed.org",

  web3forms: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "0c24e560-4880-487d-a436-d00d678d8204",

  // Google Ads
  gtag: "AW-18580466474",
  conv: {
    form: "AW-18580466474/FGMYCPmqh7sdEKrW7ZtF",
    whatsapp: "AW-18580466474/ahbvCPyqh7sdEKrW7ZtF",
    call: "AW-18580466474/knk4CP-qh7sdEKrW7ZtF",
  },

  // Google Tag Manager (اختياري — سيبه فاضي لو مش محتاجه)
  gtm: "GTM-PVT6Q7L6",

  agencyCredit: { name: "One Click", url: "" },
} as const;

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
export const isWeb3Ready = () => site.web3forms.length > 20 && !site.web3forms.startsWith("YOUR_");
