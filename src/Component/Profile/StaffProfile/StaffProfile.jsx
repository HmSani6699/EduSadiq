import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import user from "../../../../public/najmul.png";
import { GoDotFill } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import TabButton from "../StudentProfile/TabButton/TabButton";
import ParentsInfo from "../TeacherProfile/ParentsInfo/ParentsInfo";
import Documents from "../Documents/Documents";
import Address from "../Address/Address";
import BankDetails from "../TeacherProfile/BankDetails/BankDetails";
import WorkDetails from "../TeacherProfile/WorkDetails/WorkDetails";
import SocialMedia from "../TeacherProfile/SocialMedia/SocialMedia";
import AttendanceCalander from "../AttendanceCalander/AttendanceCalander";
import Salary from "../TeacherProfile/Salary/Salary";

const StaffProfile = () => {
  const [tabBtn, setTabBtn] = useState("details");
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="lg:flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Staff Details
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Staff </p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Staff Details</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px]">
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <MdLockOutline /> Login Details
          </button>
          <button
            //   onClick={() => navigae("/admin/admission_form")}
            className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
          >
            <AiOutlineEdit /> Edit Staff
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      <div className="lg:flex gap-[20px] ">
        <div className="lg:w-1/3  ">
          {/* basic info */}
          <div className="card_shadow w-full ">
            <div className="flex gap-[10px] items-center p-[20px]">
              <div className="h-[90px] w-[90px] rounded-[5px] border overflow-hidden">
                <img className="rounded-[5px]" src={user} alt="" />
              </div>
              <div>
                <button className="flex items-center bg-green-100 text-[14px] text-green-700 font-semibold py-[2px] px-[6px] rounded-[5px]">
                  <GoDotFill />
                  <p className="text-[10px]">Active</p>
                </button>
                <div>
                  <h2 className="text-[#202C4B] font-semibold whitespace-nowrap mt-[6px]">
                    Nujmul Islam
                  </h2>
                  <p className="text-[#506EE4] text-[14px]">AD12345</p>
                </div>
              </div>
            </div>
            <div className="border-t p-[20px]">
              <h2 className="text-[#202C4B] text-[16px] font-[500]">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
                <p className="text-[#202C4B] text-[14px] font-[400]">Roll No</p>
                <p className="text-[14px] text-gray-400">124</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">Gender </p>
                <p className="text-[14px] text-gray-400">Male</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Date Of Birth
                </p>
                <p className="text-[14px] text-gray-400">10/11/2002</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Blood Group
                </p>
                <p className="text-[14px] text-gray-400">AB-</p>
                <p className="text-[#202C4B] text-[14px] font-[400]">
                  Category
                </p>
                <p className="text-[14px] text-gray-400">OB</p>
              </div>
            </div>
          </div>
          {/* primary info */}
          <div className="card_shadow w-full p-[20px] mt-[20px]">
            <h2 className="text-[#202C4B] text-[16px] font-[500]">
              Basic Information
            </h2>
            <div className="flex items-center gap-[10px] mt-[15px]">
              <button className="bg-gray-100 p-[8px] rounded-[5px]">
                <IoCallOutline className="text-[14px]" />
              </button>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Phone Number
                </h2>
                <p className="text-[13px] text-gray-500">01996359111</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mt-[15px]">
              <button className="bg-gray-100 p-[8px] rounded-[5px]">
                <MdOutlineEmail className="text-[14px]" />
              </button>
              <div>
                <h2 className="text-[#202C4B] text-[14px] font-[500]">
                  Email Address
                </h2>
                <p className="text-[13px] text-gray-500">sadiq@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3">
          {/* tab */}
          <div className="flex gap-[20px] overflow-auto feesCollect">
            <TabButton
              title={"Basic Details"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"details"}
            >
              <PiStudent />
            </TabButton>

            <TabButton
              title={" Attendance"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"attendance"}
            >
              <LuCalendarDays />
            </TabButton>
            <TabButton
              title={"Salary"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"salary"}
            >
              <LiaHandHoldingUsdSolid />
            </TabButton>
          </div>
          {/* =====> TAb content <===== */}

          {tabBtn === "details" ? (
            <div>
              <ParentsInfo />
              <Documents />
              <Address />
              <BankDetails />
              <WorkDetails />
              <SocialMedia />
            </div>
          ) : tabBtn === "attendance" ? (
            <AttendanceCalander />
          ) : tabBtn === "salary" ? (
            <Salary />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
