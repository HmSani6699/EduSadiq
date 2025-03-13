import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SelectInputField from "../../../../../Component/SelectInputField/SelectInputField";
import InputField from "../../../../../Component/InputField/InputField";

const ClassRoutineCreateUpdate = ({ setCurrentPage, type }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {type === "create"
              ? "  Add Class Routine"
              : "  Update Class Routine"}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Class Routine</p>
          </div>
        </div>
      </div>

      <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
        <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
          <div className="bg-white p-[5px] rounded-[5px]">
            <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
          </div>
          <h2 className="text-[#202C4B] font-semibold text-[18px]">
            Class Routine
          </h2>
        </div>
        {/*  */}

        <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] border-b">
          <SelectInputField
            title={"Teacher Name"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />

          <SelectInputField
            title={"Section"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Class"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Subject"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Day"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Class Room"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <InputField title={"Start Time"} />
          <InputField title={"End Time"} />
          <SelectInputField
            title={"Status"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
        </div>

        <div className="flex items-end justify-end gap-[10px] mb-[15px] p-[20px]">
          <div className="flex gap-[20px] items-center">
            <button
              onClick={() => setCurrentPage(true)}
              className="text-[14px] font-semibold text-[#202c4bab] hover:bg-red-500 hover:text-white py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border"
            >
              Cancle
            </button>
            <button
              onClick={() => setCurrentPage(true)}
              className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border"
            >
              Add Routine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutineCreateUpdate;
