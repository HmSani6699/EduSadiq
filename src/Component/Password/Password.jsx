import React from "react";
import { FaAnchorLock, FaShopLock } from "react-icons/fa6";
import InputField from "../InputField/InputField";

const Password = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <FaAnchorLock className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">Password</h2>
      </div>

      {/*  */}

      <div className="p-[20px] grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <InputField title={"New Password"} />
        <InputField title={"Confirm Password"} />
      </div>
    </div>
  );
};

export default Password;
