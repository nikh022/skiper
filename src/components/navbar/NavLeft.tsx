import React from "react";
import Logo from "../../../public/svgCode/Logo";

const NavLeft = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://skiper-ui.com/" className="flex items-center gap-2">
        <Logo />
        <h4 className="font-bold text-lg">skiper/ui</h4>
        <span className="text-[10px] border border-red-600 rounded-full text-red-600 px-2">
          Beta
        </span>
      </a>
      <a href="#" className="text-gray-500 text-md hover:text-gray-600">
        Components
      </a>
      <a href="#" className="text-gray-500 text-md hover:text-gray-600">
        Pricing
      </a>
      <a href="#" className="text-gray-500 text-m5 hover:text-gray-600">
        Newsletter
      </a>
    </div>
  );
};

export default NavLeft;
