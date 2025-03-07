import React from "react";

const TextareaFiled = ({ title, placeholder, setValue, defaultValue }) => {
  return (
    <div>
      <p className="text-[16px] font-[400] leading-[22px]">
        {title ? title : ""}
      </p>
      <textarea
        rows={6}
        placeholder={placeholder ? placeholder : "Wright the text"}
        onChange={(e) => setValue(e.target.value)}
        value={defaultValue}
        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#506EE4] input_filed_gray mt-1.5"
      />
    </div>
  );
};

export default TextareaFiled;
