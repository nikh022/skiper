import React from "react";
import BadgeButton from "../ui/badge-button";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "../ui/minimal-card";

const TemplateCard = () => {
  const cards = [
    {
      title: "Landing Page",
      description:
        "Modern landing page template featuring Framer Motion animations, custom navigation components, and a responsive design optimized for conversions.",
      src: "https://skiper-ui.com/_next/image?url=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExYTFjaG1wM3o0ZzBlbXA2Z2Ywc243d2ttdGZpZXVpbXdmYjJreHp5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FsZ7wUinnbIQYlucMXv%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Manifest",
      description:
        "Vector embedding solution for buildding Perplexity-style AI applications with RAG retrieval, real-time source citation, and pgvector search functionality.",
      src: "https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExaWVwNXVkdXM3aWM4NXM2a2s2czFhd283NHdrbWFsdm43bGdsMXp4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FSM08k77xWhQtQDDluI%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Dev Portfolio",
      description:
        "Comprehensive SEO analytics tool with we crawling, performance testing, and AI-powerd optimization recommendations for website improvement.",
      src: "https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExanI3bjNzdTliOTF0aW9xMzY3Y21sdnE3Nnowb3l6YW4xeXZtdTE0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FL9F8Kt6IYdRvHbcHvl%2Fgiphy.gif&w=640&q=75",
    },
  ];

  return (
    <div>
      <div className="w-[71%] p-2 mx-auto rounded-3xl border border-black/5 shadow-sm my-20">
        <div className="mx-auto p-2 rounded-3xl border border-black/5 shadow-sm bg-[#f4f4f4]">
          <BadgeButton />
          <div className="flex justify-between items-center text-white">
            {cards.map((card, index) => (
              <MinimalCard className="m-2 w-[460px]" key={index}>
                <MinimalCardImage
                  className=""
                  src={card.src}
                  alt={card.title}
                />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
