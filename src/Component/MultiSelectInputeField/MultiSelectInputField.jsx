import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MultiSelectInputField = ({ title }) => {
  const options = [
    { id: 1, label: "January" },
    { id: 2, label: "February" },
    { id: 3, label: "March" },
    { id: 4, label: "April" },
    { id: 5, label: "May" },
    { id: 6, label: "June" },
    { id: 7, label: "July" },
    { id: 8, label: "August" },
    { id: 9, label: "September" },
    { id: 10, label: "October" },
    { id: 11, label: "November" },
    { id: 12, label: "December" },
  ];

  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (!selected.find((item) => item.id === option.id)) {
      setSelected([...selected, option]);
    }
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((item) => item.id !== id));
  };
  return (
    <div className=" w-full  rounded-[5px]">
      <p className="text-[14px] text-[#202C4B] font-[500] leading-[22px]">
        {title ? title : ""}
      </p>
      <div
        className={`rounded  border   ${
          selected.length > 0 ? "p-[10px] " : "p-[20px]"
        } cursor-pointer relative bg-white mt-1.5`}
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-2">
          {selected.map((item) => (
            <span
              key={item.id}
              className="bg-[#506ee4] text-white  flex items-center gap-1 px-[6px] py-[2px] rounded-[5px]"
            >
              {item.label}
              <button
                className=""
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item.id);
                }}
              >
                <IoClose />
              </button>
            </span>
          ))}
        </div>

        <IoIosArrowUp className="absolute right-2 top-1/2 -translate-y-1/2" />
      </div>
      {isOpen && (
        <div className="absolute bg-white border border-gray-300 mt-1 w-[293px] max-h-40 overflow-auto shadow-md rounded-md">
          {options.map((option) => (
            <div
              key={option.id}
              className="px-3 py-2 cursor-pointer hover:bg-blue-200"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectInputField;
