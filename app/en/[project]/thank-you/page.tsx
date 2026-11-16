import { notFound } from "next/navigation";
import Thanks from "@/components/thanks";
import { EXTRA_KEYS, SITES, isProject } from "@/lib/projects";

export const dynamicParams = false;
export const generateStaticParams = () => EXTRA_KEYS.map((project) => ({ project }));

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  if (!isProject(project)) return {};
  const t = SITES[project].en;
  return { title: `${t.thanks.title} — ${t.name}`, robots: { index: false, follow: false } };
}

export default async function Page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  if (!isProject(project)) notFound();
  return <Thanks lang="en" project={project} />;
}
