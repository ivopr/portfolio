import "react-alice-carousel/lib/alice-carousel.css";

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AliceCarousel from "react-alice-carousel";

import { projectsData } from "../../utils/projectsData";
import NotFound from "../404";

const ProjectDetails: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ name }) => {
  const { t } = useTranslation(["projects", "common"]);

  const project = projectsData.find((p) => p.name === name);

  if (!project) {
    return <NotFound />;
  }

  const carouselItems = project.images.map((image, idx) => (
    <img
      key={image + idx}
      alt={project.name}
      className="pointer-events-none max-h-80 w-fit select-none rounded-lg shadow shadow-primary-400"
      data-value={idx}
      role="presentation"
      src={image}
    />
  ));

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

      <div className="my-6 select-none">
        <AliceCarousel
          controlsStrategy="responsive"
          disableButtonsControls
          disableDotsControls
          items={carouselItems}
          mouseTracking
          responsive={{
            0: {
              items: 2,
            },
            640: {
              items: 4,
            },
          }}
        />
      </div>

      <p className="prose text-justify">{t(`projects:${name}.description`)}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      { params: { id: "ictiobiometria" } },
      { params: { id: "ictiobiometria" }, locale: "pt-BR" },
    ],
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  return {
    props: {
      name: params.id,
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "navigation",
      ])),
    },
  };
};

export default ProjectDetails;
