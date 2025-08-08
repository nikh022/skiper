import React from "react";

const NavRight = () => {
  return (
    <div>
      <button className="text-[14px] text-gray-500 border border-gray-300 rounded-full pl-3 pr-1 py-1.5 gap-2 flex items-center hover:bg-gray-100 transition-colors">
        <span>Search documentation...</span>
        <kbd className="bg-gray-200 border border-gray-300 px-2 rounded-full">
          <span>⌘</span>K
        </kbd>
      </button>
    </div>
  );
};

export default NavRight;
