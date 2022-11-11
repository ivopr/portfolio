import Image from "next/image";
import { FC } from "react";
import AliceCarousel from "react-alice-carousel";

type ProjectImagesCarouselProps = {
  images: string[];
};

const ProjectImagesCarousel: FC<ProjectImagesCarouselProps> = ({ images }) => {
  const carouselItems = images.map((image, idx) => (
    <Image
      key={image + idx}
      alt="Project Image"
      className="pointer-events-none h-80 w-fit select-none rounded-lg shadow shadow-primary-400"
      data-value={idx}
      role="presentation"
      src={image}
      width={1240}
      height={320}
    />
  ));

  return (
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
  );
};

export default ProjectImagesCarousel;
