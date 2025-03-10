import React, { useState } from "react";
import { BsInfoCircle, BsInfoSquare } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";
import SelectInputField from "../../SelectInputField/SelectInputField";
import { RiUserAddLine } from "react-icons/ri";

const ParentsInformation = () => {
  const [selectedGuardian, setSelectedGuardian] = useState("Others");
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <RiUserAddLine className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Parents & Guardian Information
        </h2>
      </div>
      {/* =====> Fathers info <===== */}
      <div className="px-[20px]">
        <div>
          <h2 className="text-[16px] font-[500] text-[#202C4B]  mt-[10px]">
            Father’s Info
          </h2>

          <div className="flex items-center gap-[15px] mt-[15px] ">
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px] py-[20px]">
            <InputField title={"Father Name"} />
            <InputField title={"Email"} />
            <InputField title={"Phone Number"} />
            <InputField title={"Father Occupation"} />
          </div>
        </div>
        {/* =====> Mothers info <===== */}
        <div className="border-t">
          <h2 className="text-[16px] font-[500] text-[#202C4B]  mt-[10px]">
            Mother’s Info
          </h2>

          <div className="flex items-center gap-[15px] mt-[15px] ">
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
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-[20px] py-[20px]">
            <InputField title={"Father Name"} />
            <InputField title={"Email"} />
            <InputField title={"Phone Number"} />
            <InputField title={"Father Occupation"} />
          </div>
        </div>
        {/* =====> Guardian Details info <===== */}
        <div className="border-t">
          <h2 className="text-[16px] font-[500] text-[#202C4B]  mt-[10px]">
            Guardian Details
          </h2>

          <div className="my-[20px] lg:flex items-center gap-[20px]">
            <span className="text-gray-600 text-sm font-medium">
              If Guardian Is
            </span>

            {/* Radio Options */}
            <div className="flex items-center gap-[20px] mt-[15px] lg:mt-0">
              {["Parents", "Guardian", "Others"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="guardian"
                    value={option}
                    checked={selectedGuardian === option}
                    onChange={() => setSelectedGuardian(option)}
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                      selectedGuardian === option
                        ? "border-blue-600"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedGuardian === option && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700 text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[15px] mt-[15px] ">
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
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[20px] py-[20px]">
            <InputField title={"Guardian Name"} />
            <InputField title={"Guardian Relation"} />
            <InputField title={"Email"} />
            <InputField title={"Phone Number"} />
            <InputField title={"Occupation"} />
            <InputField title={"Address"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsInformation;
