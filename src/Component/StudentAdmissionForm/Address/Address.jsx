import React from "react";
import InputField from "../../InputField/InputField";
import { GrLocation } from "react-icons/gr";

const Address = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <GrLocation className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">Address</h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] p-[20px]">
        <InputField title={"Current Address"} />
        <InputField title={"Permanent Address"} />
      </div>
    </div>
  );
};

export default Address;
