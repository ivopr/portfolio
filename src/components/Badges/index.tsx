import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FC } from "react";
import AliceCarousel from "react-alice-carousel";

import archBadge from "../../assets/archlinux.svg";
import cssBadge from "../../assets/css3.svg";
import htmlBadge from "../../assets/html5.svg";
import javascriptBadge from "../../assets/javascript.svg";
import phpBadge from "../../assets/php.svg";
import pythonBadge from "../../assets/python.svg";
import reactBadge from "../../assets/react.svg";
import reactNativeBagde from "../../assets/reactnative.svg";
import typescriptBadge from "../../assets/typescript.svg";

const images = [
  archBadge,
  cssBadge,
  htmlBadge,
  javascriptBadge,
  phpBadge,
  pythonBadge,
  reactBadge,
  reactNativeBagde,
  typescriptBadge,
];

const Badges: FC = () => {
  const { t } = useTranslation(["home"]);

  const carouselItems = images.map((image, idx) => (
    <div
      className="mx-0.5 flex h-52 select-none flex-col gap-3 bg-primary-500/30 p-2.5 shadow shadow-primary-500/25"
      key={image + idx}
    >
      <Image
        alt={t(`home:techstack.alt.${idx}`)}
        className="pointer-events-none select-none shadow shadow-primary-400/25"
        data-value={idx}
        role="presentation"
        src={image}
      />
      <p>{t(`home:techstack.description.${idx}`)}</p>
    </div>
  ));

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="mt-2.5 text-center text-3xl text-primary-200 md:mt-0 md:text-left">
        {t("home:about.using")}
      </h2>
      <AliceCarousel
        controlsStrategy="responsive"
        disableButtonsControls
        items={carouselItems}
        mouseTracking
        autoPlay
        disableDotsControls
        infinite
        autoPlayInterval={7500}
        responsive={{
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </div>
  );
};

export default Badges;
