import { FC } from "react";
import AliceCarousel from "react-alice-carousel";

type ProjectImagesCarouselProps = {
  images: string[];
};

const ProjectImagesCarousel: FC<ProjectImagesCarouselProps> = ({ images }) => {
  const carouselItems = images.map((image, idx) => (
    <img
      key={image + idx}
      alt="img"
      className="pointer-events-none h-80 w-fit select-none rounded-lg shadow shadow-primary-400"
      data-value={idx}
      role="presentation"
      src={image}
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
