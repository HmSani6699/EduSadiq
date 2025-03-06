import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";
import { RiSchoolLine } from "react-icons/ri";

const PreviousOrganization = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <RiSchoolLine className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Previous School Details
        </h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] p-[20px]">
        <InputField title={"School Name"} />
        <InputField title={"Address"} />
      </div>
    </div>
  );
};

export default PreviousOrganization;
