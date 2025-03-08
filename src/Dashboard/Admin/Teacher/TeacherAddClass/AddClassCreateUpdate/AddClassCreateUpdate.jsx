import React from "react";
import { IoClose } from "react-icons/io5";
import AddClass from "../../../../../Component/TeacherAdmissionForm/AddClass/AddClass";

const AddClassCreateUpdate = ({ create, setCurrentPage }) => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {create ? "  Update Class" : "  Add Class"}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Teacher</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Class</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage("addClassList")}
          className="text-[14px] font-semibold text-[#fff] flex items-center gap-[6px] bg-red-500 py-[6px] px-[15px] rounded-[5px]  border"
        >
          <IoClose className="text-[20px]" /> Close
        </button>
      </div>

      {/* ======> Add Class Form <===== */}
      <AddClass addClassSideMenu="addClassSideMenu" />

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

export default AddClassCreateUpdate;
