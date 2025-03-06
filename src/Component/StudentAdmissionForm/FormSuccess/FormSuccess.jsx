import React from "react";
import success_icon from "../../../../public/svg/success-icon.svg";
import { useNavigate } from "react-router";

const FormSuccess = () => {
  const navigat = useNavigate();
  return (
    <div>
      <div className="px-[20px] w-[700px] mx-auto py-[30px] bg-white mt-[100px] flex flex-col items-center justify-center  rounded-[10px] border-t-[2px] border-[#008000]">
        <img className="w-[70px]" src={success_icon} alt="" />
        <h2 className="mt-[20px] text-[30px] font-semibold">ধন্যবাদ !</h2>
        <h2 className="mt-[15px] text-[20px] ">
          আপনার ফর্ম সফলভাবে জমা দেওয়া হয়েছে
        </h2>
        <button
          onClick={() => navigat("/admin")}
          className="flex items-center gap-[8px] bg-[#008000]  text-white px-[40px] py-[8px] rounded-[8px] mt-[30px]"
        >
          ড্যাশবোর্ড
        </button>
      </div>
    </div>
  );
};

export default FormSuccess;
