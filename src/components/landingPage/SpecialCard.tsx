import React from "react";
import { SkiperCard } from "../ui/skiper-card";
import BadgeButton from "../ui/badge-button";
import image4 from "../../../public/images/image4.webp";
import image5 from "../../../public/images/image5.webp";
import image6 from "../../../public/images/image6.webp";
import image7 from "../../../public/images/image7.webp";
import image8 from "../../../public/images/image8.webp";
import image9 from "../../../public/images/image9.webp";
import { cn } from "@/lib/utils";

const SpecialCard = () => {
  return (
    <div className="my-20">
      <div className="w-[71%] mx-auto rounded-3xl border border-black/5 shadow-sm px-3 py-6">
        <BadgeButton>Component Preview</BadgeButton>
        <h2 className="text-black/80 text-center font-bold text-6xl mt-5">
          Tailwind + Framer + React
        </h2>
        <h5 className="text-black/70 text-center text-3xl font-bold mb-7">
          Everything you need to ship
        </h5>
        <SkiperCard
          title="Components that pop"
          description="Make your app 🤌"
          step1img1Class={cn(
            "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
            "md:group-hover:translate-y-2"
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
            "md:group-hover:-translate-y-6 "
          )}
          step2img1Class={cn(
            "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
            "md:group-hover:translate-y-2"
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
            "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "md:group-hover:-translate-y-6"
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          step4imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          image={{
            step1light1: image9,
            step1light2: image8,
            step2light1: image6,
            step2light2: image5,
            step3light: image4,
            step4light: image7,
            alt: "Something",
          }}
        />
      </div>
    </div>
  );
};

export default SpecialCard;
