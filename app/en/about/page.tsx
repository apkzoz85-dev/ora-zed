import Legal from "@/components/legal";
import { C } from "@/lib/content";
import { pageMeta } from "@/components/shell";

export const metadata = pageMeta("en", "/about", { title: `${C.en.legal.about.title} — ${C.en.name}` });

export default function Page() {
  return <Legal lang="en" page="about" />;
}
