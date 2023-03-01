import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProjectImagesCarousel from "../../components/ProjectImagesCarousel";
import { projectsData } from "../../utils/projectsData";
import NotFound from "../404";

import "react-alice-carousel/lib/alice-carousel.css";

const ProjectDetails: FC<{ name: string }> = ({ name }) => {
  const { t } = useTranslation(["projects", "common"]);

  const project = projectsData.find((p) => p.name === name);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <Head>
        <title>
          {t(`projects:${name}.title`) +
            " - " +
            t("projects:title") +
            " - " +
            t("common:app-name")}
        </title>
      </Head>
      <h4 className="text-center text-sm text-primary-100">
        {t("projects:project")}
      </h4>
      <h2 className="text-center text-xl text-primary-300 md:text-2xl lg:text-3xl">
        {t(`projects:${name}.title`)}
      </h2>

      {project.images ? (
        <div className="my-6 h-80 select-none">
          <ProjectImagesCarousel images={project.images} />
        </div>
      ) : null}

      <Trans
        className={`${!project.images ? "mt-6" : ""} prose text-justify`}
        components={{
          LinkGit: project.linkGit ? (
            <a
              className="font-semibold text-primary-300 transition-all hover:text-primary-100"
              href={project.linkGit}
              target="_blank"
              rel="noreferrer"
            />
          ) : (
            <></>
          ),
          LinkSite: project.linkSite ? (
            <a
              className="font-semibold text-primary-300 transition-all hover:text-primary-100"
              href={project.linkSite}
              target="_blank"
              rel="noreferrer"
            />
          ) : (
            <></>
          )
        }}
        i18nKey={`projects:${name}.description`}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      { params: { id: "ictiobiometria" } },
      { params: { id: "ictiobiometria" }, locale: "pt-BR" },
      { params: { id: "visualdynamics" } },
      { params: { id: "visualdynamics" }, locale: "pt-BR" }
    ]
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  return {
    props: {
      name: params.id,
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "navigation"
      ]))
    }
  };
};

export default ProjectDetails;
