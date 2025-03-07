import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const PhoneComponent = ({ setPhone }) => {
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px]   bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[500px]  ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">Phone</h2>
          <button onClick={() => setPhone(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>
        {/* =====> number <==== */}
        <div className="p-[20px]">
          <div className="border p-[10px] rounded-[5px] flex items-center gap-[10px]">
            <FiPhoneCall />
            <h2>01996359111</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneComponent;
