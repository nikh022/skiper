import React from "react";
import { CardCarousel } from "../ui/card-carousel";

const CardCarouselParent = () => {
  const images = [
    {
      src: "/images/image1.webp",
      alt: "image 1",
    },
    {
      src: "/images/image2.webp",
      alt: "image 2",
    },
    {
      src: "/images/image3.webp",
      alt: "image 3",
    },
  ];

  return (
    <div>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCarouselParent;
