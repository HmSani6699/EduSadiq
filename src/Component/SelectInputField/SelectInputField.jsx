import React from "react";

const SelectInputField = ({ title, options, setValue }) => {
  console.log(options);
  return (
    <div>
      <p className="text-[14px] text-[#202C4B] font-[500] leading-[22px]">
        {title ? title : ""}
      </p>
      <select
        onChange={(e) => setValue(e.target.value)}
        className=" w-full py-[9px] px-2 text-[14px] font-[400] rounded-[5px] leading-[22px] text-[#515B73] border border-[#E3E5E8] outline-[#506EE4] input_filed_gray mt-1.5"
      >
        <option value="">Please Select</option>

        {options &&
          options?.map((item) => {
            return <option value={item?.value}>{item?.value}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectInputField;
