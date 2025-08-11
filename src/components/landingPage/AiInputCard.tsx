import React from "react";
import BadgeButton from "../ui/badge-button";
import AiInput from "../ui/ai-input";

const AiInputCard = () => {
  return (
    <div className="w-[71%] p-2 mx-auto rounded-3xl border border-black/5 shadow-sm my-20">
      <div className="mx-auto p-2 rounded-3xl border border-black/5 shadow-sm bg-[#f4f4f4]">
        <BadgeButton>Latest Component</BadgeButton>
        <h2 className="text-black font-bold text-4xl ml-4">AI Input</h2>
        <h5 className="text-black/80 text-md mb-7 ml-4">
          Seamless AI Chat Input box
        </h5>
        <AiInput />
      </div>
    </div>
  );
};

export default AiInputCard;
