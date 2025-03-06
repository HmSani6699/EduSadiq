import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const CustomSearchForm = ({
  handleSearch,
  position,
  placeholder,
  type,
  icon,
  classAdd,
}) => {
  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className={`flex ${position ? position : "justify-end"}`}
      >
        <div
          className={`${
            classAdd ? classAdd : "w-1/3"
          }  flex items-center gap-3`}
        >
          <input
            className="w-full p-2 text-[14px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#506EE4] input_filed_gray rounded"
            type={type ? type : "text"}
            name="search"
            placeholder={placeholder ? placeholder : "Search here"}
          />
          <button type="submit" className="py-3 px-3 rounded bg-[#506EE4] ">
            <IoSearchSharp className="text-white" size={15} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomSearchForm;
