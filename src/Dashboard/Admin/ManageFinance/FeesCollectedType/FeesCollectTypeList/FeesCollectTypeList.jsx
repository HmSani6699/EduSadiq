import React, { useState } from "react";
import export_icon from "../../../../../../public/svg/export.svg";
import print from "../../../../../../public/svg/print.svg";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import CustomSearchForm from "../../../../../Component/CustomSearchForm/CustomSearchForm";
import PageMenuDiraction from "../../../../../Component/PageMenuDiraction/PageMenuDiraction";

const FeesCollectTypeList = ({ setCurrentPage, handleCreateUpdate }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <PageMenuDiraction
        title="Fees Collect Type List"
        currentMenu="Admin"
        currentPage="Fees Collect Type List"
        handleCreateUpdate={handleCreateUpdate}
        functionValue="feesCollectTypeCreate"
        buttonTitle="Add  Type"
      />
      {/* =====> Tab Part End <===== */}
      <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-lg border">
        <div className="lg:flex items-center justify-between bg-white px-[20px] pt-[20px]">
          <h2 className="text-lg font-semibold">Fees Collect List</h2>

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
                <td className="whitespace-nowrap h-10 px-[20px] text-center  text-[#202C4B] text-[14px]">
                  ID
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                  Type Name
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
                  <td className="whitespace-nowrap text-[#3D5EE1] px-[20px] text-center text-[14px] pl-[20px] h-10  py-[13px]">
                    1
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    Five
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] flex items-center justify-center h-10 px-2 py-[13px]">
                    <div className="flex gap-[20px] items-center">
                      <button>
                        <RiDeleteBin6Line className="text-[18px] text-red-500" />
                      </button>
                      <button
                        onClick={() =>
                          handleCreateUpdate("feesCollectTypeUpdate")
                        }
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

export default FeesCollectTypeList;
