import AiInputCard from "@/components/landingPage/AiInputCard";
import CardCarousel from "@/components/landingPage/CardCarouselParent";
import HeroContent from "@/components/landingPage/HeroContent";
import SpecialCard from "@/components/landingPage/SpecialCard";
import TemplateCard from "@/components/landingPage/TemplateCard";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarousel />
      <TemplateCard />
      <SpecialCard />
      <AiInputCard />
    </div>
  );
};

export default page;
