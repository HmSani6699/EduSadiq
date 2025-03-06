import React from "react";

const TabButton = ({ children, title, tabBtn, setTabBtn, tabValue }) => {
  return (
    <button
      onClick={() => setTabBtn(tabValue)}
      className={`flex gap-[6px] items-center text-[14px] rounded-b-[3px]  whitespace-nowrap hover:text-[#506EE4] hover:border-b-2 hover:border-b-[#506EE4] ${
        tabBtn === tabValue
          ? "border-b-2 border-b-[#506EE4] text-[#506EE4]"
          : "text-[#202C4B]"
      }  p-[6px]`}
    >
      {children}
      {title}
    </button>
  );
};

export default TabButton;
