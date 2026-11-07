import Thanks from "@/components/thanks";
import { C } from "@/lib/content";

export const metadata = { title: `${C.ar.thanks.title} — ${C.ar.name}`, robots: { index: false, follow: false } };

export default function Page() {
  return <Thanks lang="ar" />;
}
