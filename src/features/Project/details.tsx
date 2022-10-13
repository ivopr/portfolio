import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import NotFound from "../NotFound";
import { projectsData } from "./data";

import { changePageTitle } from "../../utils/changePageTitle";

import 'react-alice-carousel/lib/alice-carousel.css';

export const ProjectDetails: FC = () => {
  const { name } = useParams();
  const { t } = useTranslation(["projects", "common"]);

  const project = projectsData.find(p => p.name === name);

  if (!project) {
    return (
      <NotFound />
    );
  }

  changePageTitle(t(`projects:${name}.title`) + " - " + t("projects:title"), t("common:app-name"))

  const carouselItems = project.images.map((image, idx) => (
    <img
      className="pointer-events-none select-none rounded-lg shadow shadow-primary-400"
      data-value={idx}
      role="presentation"
      src={image}
    />
  ));

  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <h4 className="text-primary-100 text-center text-sm">{t("projects:project")}</h4>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-primary-300">{t(`projects:${name}.title`)}</h2>
      
      <div className="my-6 select-none">
        <AliceCarousel
          controlsStrategy="responsive"
          disableButtonsControls
          disableDotsControls
          items={carouselItems}
          mouseTracking
          responsive={{
            0: {
              items: 2
            },
            640: {
              items: 4
            },
          }}
        />
      </div>

      <p>{t(`projects:${name}.description`)}</p>
    </div>
  );
}