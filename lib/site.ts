// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط
// ─────────────────────────────────────────────────────────────
export const site = {
  url: "https://zed-east.example.com", // TODO: الدومين النهائي
  agency: "Grandeur Spaces",
  phoneDisplay: "01011162689",
  phoneIntl: "+201011162689",
  whatsapp: "201011162689",
  email: "leads@grandeur-spaces.com",
  agencyCredit: { name: "One Click", url: "https://example.com" }, // TODO: رابط موقع One Click
  gtagId: "AW-XXXXXXXXXX",
  conversions: {
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
    email: "AW-XXXXXXXXXX/EMAIL_LABEL",
  },
};

export const fmt = (n: number) => n.toLocaleString("en-US");
export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
