import Legal from "@/components/legal";
import { C } from "@/lib/content";
import { pageMeta } from "@/components/shell";

export const metadata = pageMeta("ar", "/about", { title: `${C.ar.legal.about.title} — ${C.ar.name}` });

export default function Page() {
  return <Legal lang="ar" page="about" />;
}
