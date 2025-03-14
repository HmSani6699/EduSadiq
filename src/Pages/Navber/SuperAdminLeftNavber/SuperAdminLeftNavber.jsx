import React from "react";
import MenuDiraction from "../../../Component/MenuDiraction/MenuDiraction";
import NavList from "../../../Component/NavList/NavList";
import { MdOutlineDashboard } from "react-icons/md";
import { FaMobileAlt, FaUniversity } from "react-icons/fa";
import { FaGlobe, FaSchool } from "react-icons/fa6";

const SuperAdminLeftNavber = () => {
  return (
    <div className=" pb-[20px] pl-[5px]">
      <MenuDiraction title={"Dashboard"} />
      <NavList url={"/super-admin"} title={"Dashboard"}>
        <MdOutlineDashboard className="text-[18px] text-[#515B73]" />
      </NavList>
      <MenuDiraction title={"Institute"} />
      <NavList url={"/super-admin/institute"} title={"Manage Institute"}>
        <FaSchool className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList url={"/super-admin/institute-type"} title={" Institute Type"}>
        <FaUniversity className="text-[18px] text-[#515B73]" />
      </NavList>

      {/* ========> Demo View result <====== */}
      <MenuDiraction title={"Demo Result"} />
      <NavList url={"/super-admin/web-demo-view"} title={" View Web Demo"}>
        <FaGlobe className="text-[18px] text-[#515B73]" />
      </NavList>
      <NavList url={"/super-admin/app-demo-view"} title={" View App Demo"}>
        <FaMobileAlt className="text-[18px] text-[#515B73]" />
      </NavList>
    </div>
  );
};

export default SuperAdminLeftNavber;
