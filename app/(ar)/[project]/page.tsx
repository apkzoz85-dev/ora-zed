import { notFound } from "next/navigation";
import Landing from "@/components/page";
import { pageMeta } from "@/components/shell";
import { EXTRA_KEYS, isProject } from "@/lib/projects";

// صفحات باقي مشاريع أورا: /zed-west · /solana-west · /solana-east
export const dynamicParams = false;
export const generateStaticParams = () => EXTRA_KEYS.map((project) => ({ project }));

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  return isProject(project) ? pageMeta("ar", `/${project}`, {}, project) : {};
}

export default async function Page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  if (!isProject(project)) notFound();
  return <Landing lang="ar" project={project} />;
}
