import Thanks from "@/components/thanks";
import { C } from "@/lib/content";

export const metadata = { title: `${C.en.thanks.title} — ${C.en.name}`, robots: { index: false, follow: false } };

export default function Page() {
  return <Thanks lang="en" />;
}
