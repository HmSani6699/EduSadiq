import React from "react";
import export_icon from "../../../public/svg/export.svg";
import print from "../../../public/svg/print.svg";
import { FaPlus } from "react-icons/fa";

const PageMenuDiraction = ({
  title,
  currentMenu,
  currentPage,
  setCurrentPage,
  buttonTitle,
}) => {
  return (
    <div className="lg:flex items-center justify-between pt-[10px] pb-[20px]">
      <div>
        <h2 className="text-[20px] font-semibold text-[#202C4B]">{title}</h2>
        <div className="flex items-center gap-[10px]">
          <p className="text-[#6A7287] text-[14px]">Dashboard</p>
          <p className="text-[#6a72876c]">/</p>
          <p className="text-[#6A7287] text-[14px]">{currentMenu}</p>
          <p className="text-[#6a72876c]">/</p>
          <p className="text-[#6A7287] text-[14px]">{currentPage}</p>
        </div>
      </div>

      <div className="flex items-center gap-[10px] lg:mt-0 mt-[15px]">
        <button className="bg-white border rounded-[5px] py-[10px] px-[10px]">
          <img src={print} alt="" />
        </button>
        <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
          <img src={export_icon} alt="" /> Export CSV
        </button>
        <button
          onClick={() => setCurrentPage(false)}
          className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
        >
          <FaPlus className="text-[12px]" /> {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default PageMenuDiraction;
