import Legal from "@/components/legal";
import { C } from "@/lib/content";
import { pageMeta } from "@/components/shell";

export const metadata = pageMeta("ar", "/privacy", { title: `${C.ar.legal.privacy.title} — ${C.ar.name}` });

export default function Page() {
  return <Legal lang="ar" page="privacy" />;
}
