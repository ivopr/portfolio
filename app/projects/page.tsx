import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";

import { ProjectsGrid } from "@/ui/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projetos"
};

export default function Home() {
  return (
    <section className="container mx-auto pb-8 text-left">
      <ProjectsGrid
        projects={allProjects.filter(
          (project) => project.status === "published"
        )}
      />
    </section>
  );
}
