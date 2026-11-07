import Legal, { legalTitle } from "@/components/legal";

export const metadata = { title: legalTitle("en", "privacy") };

export default function Page() {
  return <Legal lang="en" kind="privacy" />;
}
