import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLayerGroup,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";

import { useLocation } from "react-router";
import { BiBook } from "react-icons/bi";
import user_profile from "../../../../public/svg/user_profile.svg";
import MenuDiraction from "../../../Component/MenuDiraction/MenuDiraction";
import NavList from "../../../Component/NavList/NavList";

const AdminLeftNavber = () => {
  const [openAcademicMenu, setOpenAcademicMenu] = useState(false);
  const loation = useLocation();

  return (
    <div className=" pb-[50px]">
      <MenuDiraction title={"Main"} />
      <div className="pl-[5px]">
        <NavList
          url={"/admin/dashboard"}
          title={"Dashboard"}
          children_true={true}
        >
          <MdOutlineDashboard className="text-[18px] text-[#515B73]" />
        </NavList>
        {/* <NavList url={"/admin/profile"} title={"Profile"} children_true={true}>
          <img src={user_profile} alt="" className="w-[18px] h-[18px]" />
        </NavList> */}
      </div>
      {/* =======> Student <======= */}
      <MenuDiraction title={"Student"} />
      <div className="pl-[5px]">
        <NavList
          url={"/admin/student_admission"}
          title={"Admission"}
          children_true={false}
        >
          <FaUserGraduate className="text-[18px] text-[#515B73]" />
        </NavList>
      </div>

      {/* ======> Teacher <====== */}
      <MenuDiraction title={"Teacher"} />
      <div className="pl-[5px]">
        <NavList
          url={"/admin/teacher"}
          title={"Manage Teacher"}
          children_true={false}
        >
          <FaUserGraduate className="text-[18px] text-[#515B73]" />
        </NavList>
        <NavList
          url={"/admin/teacher_add_class"}
          title={"Teacher Class List"}
          children_true={false}
        >
          <FaUserGraduate className="text-[18px] text-[#515B73]" />
        </NavList>

        {/* =====> Class <====== */}
        <MenuDiraction title={"Class"} />

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
        <NavList
          url={"/admin/add_bivhag"}
          title={"Manage Bivhag"}
          children_true={false}
        >
          <FaUniversity className="text-[18px] text-[#515B73]" />
        </NavList>
        <NavList
          url={"/admin/add_category"}
          title={"Manage Class"}
          children_true={false}
        >
          <BiBook className="text-[18px] text-[#515B73]" />
        </NavList>
        <NavList
          url={"/admin/add_class"}
          title={"Manage Class List"}
          children_true={false}
        >
          <FaChalkboardTeacher className="text-[18px] text-[#515B73]" />
        </NavList>
        <NavList
          url={"/admin/add_class_group"}
          title={"Manage Class Group"}
          children_true={false}
        >
          <FaLayerGroup className="text-[18px] text-[#515B73]" />
        </NavList>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLeftNavber;
