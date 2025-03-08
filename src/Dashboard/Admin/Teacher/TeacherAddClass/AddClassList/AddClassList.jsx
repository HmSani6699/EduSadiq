import React, { useState } from "react";
import user from "../../../../../../public/man.png";
import { FaFilter, FaList, FaSortAlphaDown } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { PiToggleRight } from "react-icons/pi";
import { TbArrowRampRight2 } from "react-icons/tb";
import CustomSearchForm from "../../../../../Component/CustomSearchForm/CustomSearchForm";
import { Link } from "react-router-dom";
import export_icon from "../../../../../../public/svg/export.svg";
import print from "../../../../../../public/svg/print.svg";
import { FaPlus } from "react-icons/fa";

const AddClassList = () => {
  const [view, setView] = useState("list");
  const [loginDetails, setLoginDetails] = useState(false);
  const [threeDoteId, setThreeDoteId] = useState();

  const handleClickThreeDot = (id) => {
    setThreeDoteId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Teacher Add Class
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher Add Class</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px]">
          <button className="bg-white border rounded-[5px] py-[10px] px-[10px]">
            <img src={print} alt="" />
          </button>
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm">
            <img src={export_icon} alt="" /> Export CSV
          </button>
          <button
            onClick={() => handleCreateUpdate("teacherCreate")}
            className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[15px] shadow-sm"
          >
            <FaPlus className="text-[12px]" /> Add Class
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}
      <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-lg border">
        <div className="flex items-center justify-between bg-white px-[20px] pt-[20px]">
          <h2 className="text-lg font-semibold">Teacher List</h2>

          <div className="flex items-center gap-2">
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
        <div className="flex justify-between items-center px-[20px]">
          <div className="flex items-center gap-[10px] lg:w-1/2 w-full">
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
                  Section
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Class
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Subject
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                  Status
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
                    Md Nivale
                  </td>
                  <td className="h-10 px-2 py-[13px]">
                    <div className="w-[35px] h-[35px]">
                      <img
                        className="w-full h-full object-cover rounded"
                        src={user}
                        alt="user"
                      />
                    </div>
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    Male
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <div className="flex items-center">
                      <div className="bg-green-100 border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>
                      <div className="bg-blue-100 ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>

                      <div className="bg-white ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold"> 7+ </h2>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <div className="flex items-center">
                      <div className="bg-green-100 border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>
                      <div className="bg-blue-100 ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>

                      <div className="bg-white ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold"> 7+ </h2>
                      </div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    <div className="flex items-center">
                      <div className="bg-green-100 border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>
                      <div className="bg-blue-100 ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold">MT</h2>
                      </div>

                      <div className="bg-white ml-[-20px] border-[1px] border-gray-600 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                        <h2 className="font-bold"> 7+ </h2>
                      </div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[0px]">
                    <h2 className="bg-green-100 text-green-700 text-[12px] font-semibold border-[2px[ rounded-[5px] py-[2px]">
                      . Active
                    </h2>
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
                            onClick={() => setCurrentPage("teacherView")}
                            className="flex gap-[10px] text-[#515B73] text-[14px] items-center py-[8px] px-[15px] rounded-[5px] hover:bg-slate-100"
                          >
                            <IoEyeOutline />
                            View Teacher
                          </button>

                          <button
                            onClick={() => handleCreateUpdate("teacherUpdate")}
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
    </div>
  );
};

export default AddClassList;
