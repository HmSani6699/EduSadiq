import React, { useState } from "react";
import {
  MdMoneyOff,
  MdOutlineDashboard,
  MdOutlineEventAvailable,
} from "react-icons/md";
import {
  FaAward,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaHandHoldingHeart,
  FaLayerGroup,
  FaListAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaUniversity,
  FaUserCheck,
  FaUserGraduate,
  FaUsersCog,
} from "react-icons/fa";

import { BiBook } from "react-icons/bi";
import MenuDiraction from "../../../Component/MenuDiraction/MenuDiraction";
import NavList from "../../../Component/NavList/NavList";
import { LuClipboardList, LuTable2 } from "react-icons/lu";

const AdminLeftNavber = ({ setIsSidebarOpen }) => {
  return (
    <div className=" pb-[20px] pl-[5px]">
      <MenuDiraction title={"Main"} />

      <NavList
        url={"/admin/dashboard"}
        title={"Dashboard"}
        setIsSidebarOpen={setIsSidebarOpen}
      >
        <MdOutlineDashboard className="text-[18px] text-[#515B73]" />
      </NavList>
      {/* <NavList url={"/admin/profile"} title={"Profile"} children_true={true}>
          <img src={user_profile} alt="" className="w-[18px] h-[18px]" />
        </NavList> */}

      {/* =======> Student <======= */}
      <MenuDiraction title={"Student"} />

      <NavList
        url={"/admin/student_admission"}
        title={"Admission"}
        children_true={false}
      >
        <FaUserGraduate className="text-[18px] text-[#515B73]" />
      </NavList>

      {/* ======> Teacher <====== */}
      <MenuDiraction title={"Teacher"} />

      <NavList
        url={"/admin/teacher_admission"}
        title={"Manage Teacher"}
        children_true={false}
      >
        <FaChalkboardTeacher className="text-[18px] text-[#515B73]" />
      </NavList>

      <NavList
        url={"/admin/teacher_add_class"}
        title={"Teacher Add Class"}
        children_true={false}
      >
        <BiBook className="text-[18px] text-[#515B73]" />
      </NavList>

      {/* ======> Staff <====== */}
      <MenuDiraction title={"Staff"} />
      <NavList
        url={"/admin/staff_admission"}
        title={"Manage Staff"}
        children_true={false}
      >
        <FaUsersCog className="text-[18px] text-[#515B73]" />
      </NavList>

      {/* =====> Class <====== */}
      <MenuDiraction title={"Academic"} />

      {/* <div>
          <div
            onClick={() => setOpenAcademicMenu(!openAcademicMenu)}
            className={` ${
              openAcademicMenu
                ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
                : ""
            } flex  items-center justify-between   py-[8px] px-[8px] my-[8px] text-black 
  hover:bg-[#f2f5ff] hover:text-[#3D5EE1] hover:border-l-[2px] hover:border-[#3D5EE1] 
  rounded-l-[4px] transition-all duration-300 cursor-pointer`}
          >
            <h2 className="flex gap-[15px] text-[14px] text-[#515B73]">
              <FaGraduationCap className="text-[19px]" /> Edu Management
            </h2>
            <IoIosArrowUp
              className={`transition-all text-[#515B73] duration-300 ${
                openAcademicMenu ? "rotate-[-180deg]" : "rotate-[0deg]"
              }`}
            />
          </div> */}

      {/* Dropdown Menu */}
      {/* <div
            className={`ml-[10px] overflow-hidden transition-all duration-500 ease-in-out ${
              openAcademicMenu
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          > */}
      {/* Nav Links with Correct Icons */}
      <NavList url={"/admin/class-routine"} title={"Class Routine"}>
        <FaRegCalendarAlt className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList url={"/admin/class-room"} title={"Class Room"}>
        <FaChalkboardTeacher className="text-[18px] text-[#515B73]" />
      </NavList>

      <NavList url={"/admin/section"} title={"Manage Section"}>
        <FaUniversity className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList url={"/admin/class"} title={" Class Name"} children_true={false}>
        <FaChalkboardTeacher className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/subject"}
        title={"Manage Subject"}
        children_true={false}
      >
        <BiBook className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/class_group"}
        title={"Manage Class Group"}
        children_true={false}
      >
        <FaLayerGroup className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/time-table"}
        title={"Manage Time Table"}
        children_true={false}
      >
        <LuTable2 className="text-[18px] text-[#515B73]" />
      </NavList>
      {/* </div>
        </div> */}

      {/* =====> Examinations  <====== */}
      <MenuDiraction title={"Examinations"} />
      <NavList
        url={"/admin/exam_type"}
        title={"Exam Type"}
        children_true={false}
      >
        <FaListAlt className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/exam_schedule"}
        title={"Exam Schedule"}
        children_true={false}
      >
        <FaRegClock className="text-[18px] text-[#515B73]" />
      </NavList>

      <NavList
        url={"/admin/exam_attendance"}
        title={"Exam Attendance"}
        children_true={false}
      >
        <FaUserCheck className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/exam_result"}
        title={"Exam Result"}
        children_true={false}
      >
        <FaClipboardCheck className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/exam_grade"}
        title={"Exam Grade"}
        children_true={false}
      >
        <FaAward className="text-[18px] text-[#515B73]" />
      </NavList>
      {/* =====> Finance  <====== */}
      <MenuDiraction title={"Finance"} />
      <NavList
        url={"/admin/fees_collect_type"}
        title={"Manage Fees Type"}
        children_true={false}
      >
        <FaFileInvoiceDollar className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/fees_collect"}
        title={"Manage Fees Collected"}
        children_true={false}
      >
        <MdMoneyOff className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/donation"}
        title={"Manage Donation"}
        children_true={false}
      >
        <FaHandHoldingHeart className="text-[18px] text-[#515B73]" />
      </NavList>

      {/* =====> Announcements  <====== */}
      <MenuDiraction title={"Announcements"} />
      <NavList
        url={"/admin/notise"}
        title={"Notise Board"}
        children_true={false}
      >
        <LuClipboardList className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList url={"/admin/events"} title={"Invoice"} children_true={false}>
        <MdOutlineEventAvailable className="text-[18px] text-[#515B73]" />
      </NavList>
    </div>
  );
};

export default AdminLeftNavber;
