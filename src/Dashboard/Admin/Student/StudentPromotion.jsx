import React from "react";
import export_icon from "../../../../public/svg/export.svg";
import print from "../../../../public/svg/print.svg";
import SelectInputField from "../../../Component/SelectInputField/SelectInputField";
import { MdCompareArrows } from "react-icons/md";

const StudentPromotion = () => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="lg:flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Student Promotion
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Student</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">All Promotion</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px] mt-[10px] lg:mt-0">
          <button className="bg-white border rounded-[5px] py-[10px] px-[10px]">
            <img src={print} alt="" />
          </button>
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <img src={export_icon} alt="" /> Export CSV
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}

      <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
        <div className="bg-[#e9edf4da] px-[20px] py-[16px] rounded-t-[5px]">
          <h2 className="text-[#202C4B] font-semibold text-[18px]">
            Promotion
          </h2>
          <p className="text-[14px] text-gray-500">
            Select a Class to Promote next session and new class
          </p>
        </div>

        {/* =====> Promotion form <===== */}
        <div className="p-5  ">
          <div className="lg:flex items-center">
            {/* Left Section */}
            <div className="p-5 border w-full lg:w-[45%]  rounded-lg">
              <h2 className="font-medium mb-2">Current Session *</h2>
              <p className="text-sm text-gray-500">2024 - 2025</p>

              <div className="mt-5">
                <h2 className="font-medium mb-2">Promotion from Class *</h2>
                <p className="text-sm text-gray-500">One</p>
                <h2 className="font-medium mt-[20px]">
                  Promotion from Section *
                </h2>
                <p className="text-sm text-gray-500">One</p>
              </div>
            </div>

            {/* Swap Button */}
            <div className="lg:w-[10%] h-[50ppx] flex justify-center my-[20px] lg:my-0">
              <button className="p-3 rounded-md bg-blue-600 h-[50px] text-white flex items-center justify-center">
                <MdCompareArrows size={24} />
              </button>
            </div>

            {/* Right Section */}
            <div className="p-5 border w-full lg:w-[45%] rounded-lg">
              <h2 className="font-medium mb-2">Promote to Session *</h2>
              <SelectInputField title={"2025 - 2026"} />

              <div className="mt-5">
                <h2 className="font-medium mb-2">Promotion to Class *</h2>
                <div className="lg:flex flex-col sm:flex-row w-full items-center gap-4">
                  <div className="lg:w-[50%]">
                    <SelectInputField title={"Class"} />
                  </div>
                  <div className="lg:w-[50%]">
                    <SelectInputField title={"Section"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center gap-4 mt-5">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Reset Promotion
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Manage Promotion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPromotion;
