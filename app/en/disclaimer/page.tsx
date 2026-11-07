import Legal, { legalTitle } from "@/components/legal";

export const metadata = { title: legalTitle("en", "disclaimer") };

export default function Page() {
  return <Legal lang="en" kind="disclaimer" />;
}
