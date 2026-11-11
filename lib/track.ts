import { site } from "./site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** بيبعت Conversion لجوجل ادز لو الأكواد متظبطة في lib/site.ts */
export function track(kind: "form" | "whatsapp" | "call") {
  if (typeof window === "undefined" || !window.gtag || !site.conv[kind]) return;
  window.gtag("event", "conversion", { send_to: site.conv[kind] });
}
