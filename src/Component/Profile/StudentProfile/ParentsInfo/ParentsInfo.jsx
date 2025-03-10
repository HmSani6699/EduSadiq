import React from "react";
import user from "../../../../../public/najmul.png";

const ParentsInfo = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Parents Information
      </h2>
      <div className="flex items-center justify-between border bg-[#f2f5ffa9] mx-[20px] p-[15px] rounded-[5px] my-[20px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[50px] h-[50px] rounded-[5px]">
            <img className="rounded-[5px]" src={user} alt="user jpg" />
          </div>
          <div>
            <h2 className="text-[#202C4B] text-[15px] font-semibold">
              Najmul Islam
            </h2>
            <p className="text-[#506EE4] text-[14px]">Father</p>
          </div>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Phone</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">01996359111</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Email</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">sadiq@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center justify-between border bg-[#f2f5ffa9] mx-[20px] p-[15px] rounded-[5px] my-[20px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[50px] h-[50px] rounded-[5px]">
            <img className="rounded-[5px]" src={user} alt="user jpg" />
          </div>
          <div>
            <h2 className="text-[#202C4B] text-[15px] font-semibold">
              Sadiqur Rahman
            </h2>
            <p className="text-[#506EE4] text-[14px]">Father</p>
          </div>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Phone</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">01996359111</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Email</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">sadiq@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center justify-between border bg-[#f2f5ffa9] mx-[20px] p-[15px] rounded-[5px] my-[20px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[50px] h-[50px] rounded-[5px]">
            <img className="rounded-[5px]" src={user} alt="user jpg" />
          </div>
          <div>
            <h2 className="text-[#202C4B] text-[15px] font-semibold">
              Sadiqur Rahman
            </h2>
            <p className="text-[#506EE4] text-[14px]">Father</p>
          </div>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Phone</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">01996359111</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-semibold">Email</h2>
          <p className="text-[#202C4B] text-[14px] mt-[6px]">sadiq@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ParentsInfo;
