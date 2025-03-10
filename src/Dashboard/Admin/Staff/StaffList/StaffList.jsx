import React, { useState } from "react";
import user from "../../../../../public/najmul.png";
import { FaFilter, FaList, FaSortAlphaDown } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { PiToggleRight } from "react-icons/pi";
import CustomSearchForm from "../../../../Component/CustomSearchForm/CustomSearchForm";
import export_icon from "../../../../../public/svg/export.svg";
import print from "../../../../../public/svg/print.svg";
import { FaPlus } from "react-icons/fa";
import LoginDetails from "../../Student/LoginDetails";
import PageMenuDiraction from "../../../../Component/PageMenuDiraction/PageMenuDiraction";

const StaffList = ({ setCurrentPage, handleCreateUpdate }) => {
  const [view, setView] = useState("list");
  const [loginDetails, setLoginDetails] = useState(false);
  const [threeDoteId, setThreeDoteId] = useState();

  const handleClickThreeDot = (id) => {
    setThreeDoteId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <PageMenuDiraction
        title="Staff List"
        currentMenu="Admin"
        currentPage="Staff List"
        handleCreateUpdate={handleCreateUpdate}
        functionValue="staffCreate"
        buttonTitle="Add Staff"
      />
      {/* =====> Tab Part End <===== */}
      <div className="w-full overflow-x-auto bg-white rounded-[10px] border shadow-sm">
        <div className="lg:flex items-center justify-between bg-white px-[20px] lg:pt-[20px] pt-[10px]">
          <h2 className="text-lg font-semibold">Staff List</h2>

          <div className="flex items-center gap-2 mt-[15px] lg:mt-0">
            {/* Filter Dropdown */}
            <button className="border px-3 py-1 rounded-[5px] text-[14px] flex items-center gap-2 text-gray-600">
              <FaFilter className="text-[14px]" /> Filter
            </button>

            {/* View Toggle */}
            <button
              className={`border p-2 rounded-[5px] ${
                view === "list" ? "bg-[#506EE4] text-white" : "text-gray-600"
              }`}
              onClick={() => setView("list")}
            >
              <FaList className="text-[14px]" />
            </button>
            <button
              className={`border p-2 rounded-[5px] ${
                view === "grid" ? "bg-[#506EE4] text-white" : "text-gray-600"
              }`}
              onClick={() => setView("grid")}
            >
              <CiGrid41 />
            </button>

            {/* Sort Dropdown */}
            <button className="border px-3 py-1 rounded-lg flex items-center text-[14px] gap-2 text-gray-600">
              <FaSortAlphaDown className="text-[14px]" /> Sort by A-Z
            </button>
          </div>
        </div>
        <div className="border h-[1px] border-gray-200 w-full my-[10px]"></div>
        {/* =====> Search Div  <====== */}
        <div className="flex lg:justify-between lg:items-center justify-end items-end px-[20px]">
          <div className="lg:flex items-center gap-[10px] lg:w-1/2 w-full hidden ">
            <p className="text-[#515B73] text-[14px]">Row Per Page</p>
            <select className="outline-none border py-[8px] px-[10px] rounded-[5px] text-[#515B73]">
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
            </select>
            <p className="text-[#515B73] text-[14px]">Entries</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <CustomSearchForm classAdd={"w-2/3"} />
          </div>
        </div>
        {/* =====> Responsive Table <====== */}
        <div className="overflow-auto table_scrollber">
          <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px] ">
            <thead>
              <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                  ID
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                  Name
                </td>
                <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                  Photo
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Gender
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Phone
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Email
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Status
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Date of join
                </td>

                <td className="whitespace-nowrap h-10 px-[30px] text-[#202C4B] text-[14px] text-center">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((id, index) => (
                <tr
                  key={id}
                  className={
                    index % 2 === 1 ? "bg-[#f4f7fe] border-b" : "border-b"
                  }
                >
                  <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                    AD12345
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    Md Najmul Islam
                  </td>
                  <td className="h-10 px-2 py-[13px]">
                    <div className="w-[35px] h-[35px] rounded-full">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={user}
                        alt="user"
                      />
                    </div>
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    Male
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    01996359111
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    najmul@gmail.com
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[0px]">
                    <h2 className="bg-green-100 text-green-700 text-[12px] font-semibold border-[2px[ rounded-[5px] py-[2px]">
                      . Active
                    </h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    01 Feb 2025
                  </td>

                  <td className="h-10 px-2 py-[6px] whitespace-nowrap">
                    <div className=" relative">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleClickThreeDot(id)}
                          className="px-[15px] text-[#515B73] "
                        >
                          <BsThreeDotsVertical />
                        </button>
                      </div>
                      {/* Dropdown Menu */}
                      {threeDoteId === id && (
                        <div className="bg-white absolute top-[35px] rounded-[5px] shadow-sm border right-0 flex flex-col p-[20px] z-[20]">
                          <button
                            onClick={() => setCurrentPage("staffView")}
                            className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100"
                          >
                            <IoEyeOutline />
                            View Teacher
                          </button>

                          <button
                            onClick={() => handleCreateUpdate("staffUpdate")}
                            className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100"
                          >
                            <AiOutlineEdit />
                            Edit
                          </button>
                          <button
                            onClick={() => setLoginDetails(true)}
                            className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100"
                          >
                            <MdLockOutline />
                            Login Details
                          </button>
                          <button className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100">
                            <PiToggleRight />
                            Disable
                          </button>

                          <button className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100">
                            <AiOutlineDelete />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* =====> Login details <===== */}
      {loginDetails && <LoginDetails setLoginDetails={setLoginDetails} />}
    </div>
  );
};

export default StaffList;
