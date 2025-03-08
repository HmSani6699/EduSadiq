import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";

const BankAccount = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Bank Account Details
        </h2>
      </div>

      {/*  */}

      <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        <InputField title={"Account Name"} />
        <InputField title={"Account Number"} />
        <InputField title={"Bank Name"} />
        <InputField title={"IFSC Code"} />
        <InputField title={"Branch Name"} />
      </div>
    </div>
  );
};

export default BankAccount;
