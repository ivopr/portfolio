import "react-alice-carousel/lib/alice-carousel.css";

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPlaiceholder } from "plaiceholder";
import AliceCarousel from "react-alice-carousel";

import { projectsData } from "../../utils/projectsData";
import NotFound from "../404";

const ProjectDetails: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ blur }) => {
  const { query } = useRouter();
  const { name } = query;
  const { t } = useTranslation(["projects", "common"]);

  const project = projectsData.find((p) => p.name === name);

  if (!project) {
    return <NotFound />;
  }

  const carouselItems = blur.map((image, idx) => {
    return (
      <div
        className="pointer-events-none relative h-80 w-40 select-none rounded-lg shadow shadow-primary-400"
        key={image + idx}
      >
        <Image alt={project.name} role="presentation" {...image} />
      </div>
    );
  });

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

      <div className="my-6 h-80 select-none">
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
    paths: [{ params: { name: "ictiobiometria" } }],
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { name } = params;

  const project = projectsData.find((p) => p.name === name);

  if (!project) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "common",
          "projects",
          "navigation",
        ])),
      },
    };
  }

  const blur = [];

  for await (const i of project.images) {
    const plhd = await getPlaiceholder(i);

    blur.push({ ...plhd.img, blurDataURL: plhd.base64 });
  }

  return {
    props: {
      blur,
      ...(await serverSideTranslations(locale, [
        "common",
        "projects",
        "navigation",
      ])),
    },
  };
};

export default ProjectDetails;
