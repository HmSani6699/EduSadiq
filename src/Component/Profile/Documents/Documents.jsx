import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";

const Documents = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Document
      </h2>

      <div className="flex items-center justify-between border bg-[#f2f5ffa9] mx-[20px] p-[15px] rounded-[5px] my-[20px]">
        <div className="flex items-center gap-[10px]">
          <div className=" rounded-[5px] bg-white text-[10px] p-[5px] font-semibold">
            PDF
          </div>
          <h2 className="text-[#202C4B] text-[14px] font-semibold">
            BirthCertificate.pdf
          </h2>
        </div>
        <button className="bg-[#506EE4] text-white p-[5px] rounded-[5px]">
          <HiArrowDownTray />
        </button>
      </div>
      <div className="flex items-center justify-between border bg-[#f2f5ffa9] mx-[20px] p-[15px] rounded-[5px] my-[20px]">
        <div className="flex items-center gap-[10px]">
          <div className=" rounded-[5px] bg-white text-[10px] p-[5px] font-semibold ">
            PDF
          </div>
          <h2 className="text-[#202C4B] text-[14px] font-semibold">
            BirthCertificate.pdf
          </h2>
        </div>
        <button className="bg-[#506EE4] text-white p-[5px] rounded-[5px]">
          <HiArrowDownTray />
        </button>
      </div>
    </div>
  );
};

export default Documents;
