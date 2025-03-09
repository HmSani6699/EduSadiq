import React, { useState } from "react";
import { MdMoneyOff, MdOutlineDashboard } from "react-icons/md";
import {
  FaBook,
  FaChalkboardTeacher,
  FaFileInvoiceDollar,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaLayerGroup,
  FaUniversity,
  FaUserGraduate,
  FaUsersCog,
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
    <div className=" pb-[20px] pl-[5px]">
      <MenuDiraction title={"Main"} />

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
        url={"/admin/section"}
        title={"Manage Section"}
        children_true={false}
      >
        <FaUniversity className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList
        url={"/admin/class"}
        title={"Manage Class"}
        children_true={false}
      >
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
      {/* </div>
        </div> */}

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
    </div>
  );
};

export default AdminLeftNavber;
