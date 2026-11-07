import Legal, { legalTitle } from "@/components/legal";

export const metadata = { title: legalTitle("ar", "privacy") };

export default function Page() {
  return <Legal lang="ar" kind="privacy" />;
}
