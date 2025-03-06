import React from "react";

const MenuDiraction = ({ title }) => {
  return (
    <div className="flex items-center gap-[10px] my-[15px]">
      <h2 className="text-[#9CA1AF] font-bold text-[12px] whitespace-nowrap">
        {title ? title : ""}
      </h2>
      <div className="border border-[#ebedf2a1] w-full"></div>
    </div>
  );
};

export default MenuDiraction;
