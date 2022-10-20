import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

import { projectsData } from "../../utils/projectsData";

const ProjectCard = dynamic(() => import("../../components/ProjectCard"), {
  suspense: true,
});

const Projects: FC = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <Head>
        <title>{t("projects:title") + " - " + t("common:app-name")}</title>
      </Head>
      <h2 className="text-center text-xl text-primary-300 md:text-2xl lg:text-3xl">
        {t("projects:title")}
      </h2>

      <div className="my-6 grid w-full grid-cols-1 gap-2 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            banner={project.banner}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "navigation",
      ])),
    },
  };
};

export default Projects;
