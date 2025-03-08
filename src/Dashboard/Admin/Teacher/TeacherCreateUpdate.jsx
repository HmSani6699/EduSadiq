import React from "react";
import PersonalInformation from "../../../Component/TeacherAdmissionForm/PersonalInformation/PersonalInformation";
import BankAccount from "../../../Component/TeacherAdmissionForm/BankAccount/BankAccount";
import SocialMedia from "../../../Component/TeacherAdmissionForm/SocialMedia/SocialMedia";

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
      <BankAccount />
      <SocialMedia />
    </div>
  );
};

export default TeacherCreateUpdate;
