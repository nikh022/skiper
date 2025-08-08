import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-3">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Navbar;
