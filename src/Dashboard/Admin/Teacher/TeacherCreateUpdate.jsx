import React from "react";
import PersonalInformation from "../../../Component/TeacherAdmissionForm/PersonalInformation/PersonalInformation";
import BankAccount from "../../../Component/TeacherAdmissionForm/BankAccount/BankAccount";
import SocialMedia from "../../../Component/TeacherAdmissionForm/SocialMedia/SocialMedia";
import Password from "../../../Component/Password/Password";
import AddClass from "../../../Component/TeacherAdmissionForm/AddClass/AddClass";

const TeacherCreateUpdate = ({ create }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {create ? "  Update Teacher" : "  Add Teacher"}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Teacher</p>
          </div>
        </div>
      </div>

      {/* =====> form <==== */}
      <PersonalInformation />
      <AddClass />
      <BankAccount />
      <SocialMedia />
      <Password />

      {/*  */}
      <div className="flex items-end justify-end gap-[10px] mb-[15px]">
        <button className="text-[14px] font-semibold text-[#202c4bab] py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border">
          Cancle
        </button>
        <button className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border">
          Add Teacher
        </button>
      </div>
    </div>
  );
};

export default TeacherCreateUpdate;
