import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../../../../Component/InputField/InputField";
import SelectInputField from "../../../../../Component/SelectInputField/SelectInputField";
import MultiSelectInputField from "../../../../../Component/MultiSelectInputeField/MultiSelectInputField";
import TextareaFiled from "../../../../../Component/InputField/TextareaFiled";

const FeesCollectCreateUpdate = ({ create, setCurrentPage }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {create ? "  Update Fees Collected" : "  Add Fees Collected"}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Fees Collected</p>
          </div>
        </div>
      </div>
      <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
        <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
          <div className="bg-white p-[5px] rounded-[5px]">
            <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
          </div>
          <h2 className="text-[#202C4B] font-semibold text-[18px]">
            Fees Collected
          </h2>
        </div>

        {/*  */}
        <div className="p-[20px]">
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[20px] mb-[20px]">
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
              title={"Class Groupe"}
              options={[
                { id: 1, value: "নতুন" },
                { id: 2, value: "পুরাতন" },
              ]}
            />
            <SelectInputField
              title={"Fees Type"}
              options={[
                { id: 1, value: "নতুন" },
                { id: 2, value: "পুরাতন" },
              ]}
            />
            <MultiSelectInputField title={"Select Month"} />
            <InputField title={"Student Rolll"} />
            <InputField title={"Student Name"} />
            <InputField title={"Amount"} />
            <SelectInputField
              title={"Payment Type"}
              options={[
                { id: 1, value: "নতুন" },
                { id: 2, value: "পুরাতন" },
              ]}
            />
            <InputField title={"Payment Reference No"} />
            <SelectInputField
              title={"Status"}
              options={[
                { id: 1, value: "নতুন" },
                { id: 2, value: "পুরাতন" },
              ]}
            />
          </div>
          <TextareaFiled title={"Notes"} />
        </div>

        {/*  */}
        <div className="flex items-end justify-end gap-[10px] mb-[15px] p-[20px]">
          <button
            onClick={() => setCurrentPage("feesCollectList")}
            className="text-[14px] font-semibold text-[#202c4bab] hover:bg-red-500 hover:text-white py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border"
          >
            Cancle
          </button>
          <button
            onClick={() => setCurrentPage("feesCollectList")}
            className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border"
          >
            Add Fees Collect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeesCollectCreateUpdate;
