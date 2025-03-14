import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../../../Component/InputField/InputField";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";
import { FiUploadCloud } from "react-icons/fi";

const ManageInstituteCreateUpdate = ({ type, setCurrentPage }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {type === "create" ? "  Add Institute " : "  Update Institute "}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Institute </p>
          </div>
        </div>
      </div>
      <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
        <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
          <div className="bg-white p-[5px] rounded-[5px]">
            <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
          </div>
          <h2 className="text-[#202C4B] font-semibold text-[18px]">
            Institute
          </h2>
        </div>
        {/*  */}

        <div className="flex items-center gap-[15px] mt-[15px] p-[20px] ">
          <div className="border-dotted h-[80px] w-[80px] border-2 text-[#202C4B] border-[#e9edf4] rounded-[5px] flex items-center justify-center">
            <FiUploadCloud className="text-[#202C4B] text-[20px]" />
          </div>
          <div>
            <div className="flex items-center gap-[10px] mb-[15px]">
              <button className="text-[14px] text-[#202c4bab] py-[6px] px-[15px] hover:bg-[#506EE4] hover:text-white rounded-[5px]  border">
                Upload
              </button>
              <button className="text-[14px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border">
                Remobe
              </button>
            </div>
            <p className="text-[12px] text-[#515B73]">
              Upload image size 4MB, Format JPG, PNG, SVG
            </p>
          </div>
        </div>
        {/*  */}
        <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <InputField title={"Institute Name"} />
          <SelectInputField
            title={"Institute Type"}
            options={[
              { id: 1, value: "Madrasa" },
              { id: 2, value: "School" },
              { id: 2, value: "Privet" },
              { id: 2, value: "Koching" },
            ]}
          />
          <InputField title={"Address"} />
          <InputField title={"Phone Number"} />
          <InputField title={"Current Student"} />
          <InputField title={"Current Teacher"} />
          <InputField title={"Current Section"} />
          <SelectInputField
            title={"Choose Plan"}
            options={[
              { id: 1, value: "100" },
              { id: 2, value: "200" },
              { id: 2, value: "250" },
              { id: 2, value: "300" },
              { id: 2, value: "350" },
              { id: 2, value: "400" },
              { id: 2, value: "450" },
              { id: 2, value: "500" },
            ]}
          />
          <InputField title={"Paid"} />
          <InputField title={"Due"} />
          <InputField title={"Password"} />
          <InputField title={"Confirm Password"} />

          <SelectInputField
            title={"Monthly Fee"}
            options={[
              { id: 1, value: "500" },
              { id: 2, value: "1000" },
            ]}
          />
          <SelectInputField
            title={"Status"}
            options={[
              { id: 1, value: "Active" },
              { id: 2, value: "Inactive" },
            ]}
          />
        </div>

        {/*  */}
        <div className="flex items-end justify-end gap-[10px] mb-[15px] p-[20px]">
          <button
            onClick={() => setCurrentPage("sectionList")}
            className="text-[14px] font-semibold text-[#202c4bab] hover:bg-red-500 hover:text-white py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border"
          >
            Cancle
          </button>
          <button
            onClick={() => setCurrentPage("sectionList")}
            className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border"
          >
            Add Institute
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageInstituteCreateUpdate;
