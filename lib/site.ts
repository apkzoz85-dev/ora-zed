// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط. النصوص والأسعار في lib/content.ts
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.orazed.org/", // ← الدومين الفعلي (بدون / في الآخر)
  agency: "Grandeur Spaces",

  /** رقم الاتصال والواتساب (نفس الرقم للاتنين) */
  phoneIntl: "+201030083122",
  phoneDisplay: "01030083122",
  whatsapp: "201030083122",
  email: "leads@orazed.org",

  /**
   * ▼▼▼ Web3Forms ▼▼▼
   * حط الـ Access Key هنا (أو في Vercel كمتغير NEXT_PUBLIC_WEB3FORMS_KEY).
   * المفتاح بيتجاب من https://web3forms.com بالإيميل اللي عايز الليدز توصل عليه.
   * لو المفتاح فاضي: الفورم بيحوّل العميل على واتساب ببياناته عشان مفيش ليد يضيع.
   */
  web3forms: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "0c24e560-4880-487d-a436-d00d678d8204",

  // Google Ads — gtag: "AW-XXXXXXXXXX" · conv: "AW-XXXXXXXXXX/label"
  gtag: "",
  conv: { form: "", whatsapp: "", call: "" },

  agencyCredit: { name: "One Click", url: "" }, // ← رابط موقع One Click (بيتحول للينك nofollow تلقائياً)
} as const;

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
export const isWeb3Ready = () => site.web3forms.length > 20 && !site.web3forms.startsWith("YOUR_");
