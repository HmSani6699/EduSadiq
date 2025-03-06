import React from "react";

const InputField = ({ type, title, value, setValue, placeholder }) => {
  return (
    <div>
      <p className="text-[16px] mb-[13px] ">{title}</p>
      <input
        type={type}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        className="w-full border-none outline-none py-[6px] px-[25px] rounded-[20px] text-black"
      />
    </div>
  );
};

export default InputField;
