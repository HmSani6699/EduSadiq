import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  MdLockOutline,
  MdOutlineEmail,
  MdOutlineTableChart,
} from "react-icons/md";
import user from "../../../../public/sadiq.jpg";
import { GoDotFill } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsBookmarkStar } from "react-icons/bs";
import TabButton from "../StudentProfile/TabButton/TabButton";
import Address from "../Address/Address";
import PreviousOrganaization from "../PreviousOrganaization/PreviousOrganaization";
import ParentsInfo from "./ParentsInfo/ParentsInfo";
import Documents from "../Documents/Documents";
import SocialMedia from "./SocialMedia/SocialMedia";
import WorkDetails from "./WorkDetails/WorkDetails";
import BankDetails from "./BankDetails/BankDetails";

const TeacherProfile = () => {
  const [tabBtn, setTabBtn] = useState("details");
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="lg:flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Teacher Details
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher </p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher Details</p>
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
            <AiOutlineEdit /> Edit Teacher
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      <div className="lg:flex gap-[20px]">
        <div className="lg:w-1/3">
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
                    Sadiqur Rahman
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
              title={"Teacher Details"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"details"}
            >
              <PiStudent />
            </TabButton>
            <TabButton
              title={"Time Table"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"time"}
            >
              <MdOutlineTableChart />
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
              title={"Fees"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"fees"}
            >
              <LiaHandHoldingUsdSolid />
            </TabButton>
            <TabButton
              title={"  Exam & Results"}
              tabBtn={tabBtn}
              setTabBtn={setTabBtn}
              tabValue={"exam_results"}
            >
              <BsBookmarkStar />
            </TabButton>
          </div>
          {/* =====> TAb content <===== */}

          {tabBtn === "details" ? (
            <div>
              <ParentsInfo />
              <Documents />
              <Address />
              <PreviousOrganaization />
              <BankDetails />
              <WorkDetails />
              <SocialMedia />
            </div>
          ) : (
            ""
          )}

          {/* {tabBtn === "details" ? (
            <div>
              <ParentsInfo />
              <StudentDocuments />
              <Address />
              <PreviousOrganaization />
            </div>
          ) : tabBtn === "time" ? (
            <ClassRoting />
          ) : tabBtn === "attendance" ? (
            <AttendanceCalander />
          ) : tabBtn === "fees" ? (
            <FeesDetails />
          ) : tabBtn === "exam_results" ? (
            <ExamResults />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
