import React from "react";
import WrapButton from "../ui/wrap-button";
import { Globe } from "lucide-react";
import Arrows from "../../../public/svgCode/Arrows";

const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col items-center py-14">
        <img
          className="h-10 mb-14"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=806890&theme=light&t=1737565356562"
          alt="product-hunt"
        />
        <h3 className="text-black/80 text-4xl font-bold leading-0">
          Components crafted for
        </h3>
        <h1 className="text-black/80 text-[5.4rem] font-bold">
          Modern Websites
        </h1>
        <WrapButton href="#" className="mt-8">
          <Globe className="animate-spin" />
          Get Started
        </WrapButton>
        <Arrows />
        <p className="text-black/60 text-xl mt-4">
          To make your dream Website live by just{" "}
          <span className="font-bold">Copy and paste</span>
        </p>
      </div>
      <img
        className="absolute top-1/2"
        src="/sideTextLeft.svg"
        alt="left-side-image"
      />
      <img
        className="absolute top-1/2 right-0"
        src="/sideTextRight.svg"
        alt="right-side-image"
      />
    </>
  );
};

export default HeroContent;
