import { GetStaticProps } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FC } from "react";

import { projectsData } from "../../utils/projectsData";

const Projects: FC = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <h2 className="text-center text-xl text-primary-300 md:text-2xl lg:text-3xl">
        {t("projects:title")}
      </h2>

      <div className="my-6 flex w-full flex-wrap gap-2">
        {projectsData.map((project) => (
          <Link key={project.name} href={`/projects/${project.name}`}>
            <a className="w-full rounded-lg bg-primary-800 px-4 py-5 shadow shadow-primary-600 transition-all hover:bg-primary-700 hover:shadow-primary-500 md:w-56 lg:w-72">
              <h2 className="text-lg">{t(`projects:${project.name}.title`)}</h2>
              <p className="w-full line-clamp-2">
                {t(`projects:${project.name}.description`)}
              </p>
            </a>
          </Link>
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
