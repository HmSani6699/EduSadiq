import React from "react";
import { MdOutlineAddLocationAlt, MdOutlineLocationOn } from "react-icons/md";

const Address = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Address
      </h2>

      <div className="p-[10px]">
        <div className="p-[10px] rounded-[5px]  ">
          <div className="flex items-center gap-[10px]">
            <div className=" rounded-[5px] bg-white text-[16px] p-[5px] font-semibold">
              <MdOutlineAddLocationAlt className="text-gray-500" />
            </div>
            <div>
              <h2 className="text-[#202C4B] text-[14px] font-semibold">
                Current Address
              </h2>
              <p className="text-[14px] text-gray-500 mt-[4px]">
                3495 Red Hawk Road, Buffalo Lake, MN 55314
              </p>
            </div>
          </div>
        </div>
        <div className="p-[10px] rounded-[5px] ">
          <div className="flex items-center gap-[10px]">
            <div className=" rounded-[5px] bg-white text-[16px] p-[5px] font-semibold">
              <MdOutlineLocationOn className="text-gray-500" />
            </div>
            <div>
              <h2 className="text-[#202C4B] text-[14px] font-semibold">
                Current Address
              </h2>
              <p className="text-[14px] text-gray-500 mt-[4px]">
                3495 Red Hawk Road, Buffalo Lake, MN 55314
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
