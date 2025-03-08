import React, { useState } from "react";
import export_icon from "../../../../../public/svg/export.svg";
import print from "../../../../../public/svg/print.svg";
import { FaPlus } from "react-icons/fa";
import CustomSearchForm from "../../../../Component/CustomSearchForm/CustomSearchForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";

const ClassListComponent = ({ setCurrentPage, handleCreateUpdate }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Class List
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Class List</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px]">
          <button className="bg-white border rounded-[5px] py-[10px] px-[10px]">
            <img src={print} alt="" />
          </button>
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <img src={export_icon} alt="" /> Export CSV
          </button>
          <button
            onClick={() => handleCreateUpdate("classCreate")}
            className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
          >
            <FaPlus className="text-[12px]" /> Add Class
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-lg border">
        <div className="flex items-center justify-between bg-white px-[20px] pt-[20px]">
          <h2 className="text-lg font-semibold">Class List</h2>

          <div className="lg:w-1/2 w-full">
            <CustomSearchForm classAdd={"w-2/3"} />
          </div>
        </div>
        <div className="border h-[1px] border-gray-200 w-full my-[10px]"></div>
        {/* =====> Search Div  <====== */}
        <div className="flex justify-between items-center px-[20px]">
          <div className="flex items-center gap-[10px] lg:w-1/2 w-full">
            <p className="text-[#515B73] text-[14px]">Row Per Page</p>
            <select className="outline-none border py-[8px] px-[10px] rounded-[5px] text-[#515B73]">
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
            </select>
            <p className="text-[#515B73] text-[14px]">Entries</p>
          </div>
        </div>
        {/* =====> Responsive Table <====== */}
        <div className="overflow-auto table_scrollber">
          <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px] ">
            <thead>
              <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                  ID
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                  Section Name
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                  Class Name
                </td>
                <td className="whitespace-nowrap h-10 px-[30px] text-[#202C4B] text-[14px] text-center">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((id, index) => (
                <tr
                  key={id}
                  className={
                    index % 2 === 1 ? "bg-[#f4f7fe] border-b" : "border-b"
                  }
                >
                  <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                    1
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    Five
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    One
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] flex items-center justify-center h-10 px-2 py-[13px]">
                    <div className="flex gap-[20px] items-center">
                      <button>
                        <RiDeleteBin6Line className="text-[18px] text-red-500" />
                      </button>
                      <button
                        onClick={() => handleCreateUpdate("sectionUpdate")}
                      >
                        <FaRegPenToSquare className="text-[16px] text-green-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassListComponent;
