import Legal, { legalTitle } from "@/components/legal";

export const metadata = { title: legalTitle("ar", "about") };

export default function Page() {
  return <Legal lang="ar" kind="about" />;
}
