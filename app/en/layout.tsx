import type { Viewport } from "next";
import Shell, { pageMeta } from "@/components/shell";
import "../globals.css";

export const metadata = pageMeta("en");
export const viewport: Viewport = { themeColor: "#063d4c", width: "device-width", initialScale: 1 };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
