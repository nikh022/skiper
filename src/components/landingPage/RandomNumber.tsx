"use client";
import React, { useState, useEffect } from "react";
import AnimatedNumberRandom from "../ui/animated-number-random";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Producthunt from "../../../public/svgCode/Producthunt";
import Arrows from "../../../public/svgCode/Arrows";

const RandomNumber = () => {
  const numbers = [124.23, 41.75, 2125.95];
  const diffs = [0.0564, -0.114, 0.0029];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [numbers.length]);

  return (
    <div>
      <div className="flex items-center w-[40%] mx-auto rounded-3xl border-2 border-black/10 border-dashed my-20 p-4 gap-3">
        <div>
          <ThumbsUp className="size-4 text-emerald-500 ml-3" />
          <AnimatedNumberRandom
            value={numbers[currentIndex]}
            diff={diffs[currentIndex]}
          />
          <ThumbsDown className="size-4 text-red-500 ml-3" />
        </div>

        <p className="text-center text-gray-500">
          This is a randomly generated number that updates every two seconds.
        </p>
      </div>
      <div className="items-center text-center text-black mb-10 text-3xl">
        <span className="flex justify-center gap-1">
          Components are fully designed products
          <div className="mt-3">
            <Producthunt />
          </div>
        </span>
        and even have
        <span className="font-bold"> real daily active uses.</span>
      </div>
      <div className="flex justify-center mb-10">
        <Arrows />
      </div>
    </div>
  );
};

export default RandomNumber;
