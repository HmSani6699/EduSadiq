import React from "react";
import InputField from "../../InputField/InputField";
import { IoMdInformationCircleOutline } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Social Media Links
        </h2>
      </div>

      {/*  */}

      <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        <InputField title={"Facebook"} />
        <InputField title={"Twitter"} />
        <InputField title={"Instagram"} />
        <InputField title={"Linkedin"} />
        <InputField title={"Youtube"} />
      </div>
    </div>
  );
};

export default SocialMedia;
