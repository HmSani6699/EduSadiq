import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Email = ({ setEmail }) => {
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px]   bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[500px]  ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">Email</h2>
          <button onClick={() => setEmail(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
