import { site } from "./site";

declare global {
  interface Window { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] }
}

export function track(kind: keyof typeof site.conversions) {
  try { window.gtag?.("event", "conversion", { send_to: site.conversions[kind] }); } catch {}
}
