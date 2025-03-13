import React, { useState } from "react";
import user from "../../../../../../public/najmul.png";
import { FaFilter, FaRegClock } from "react-icons/fa";
import PageMenuDiraction from "../../../../../Component/PageMenuDiraction/PageMenuDiraction";
import { IoIosArrowUp } from "react-icons/io";
import SelectInputField from "../../../../../Component/SelectInputField/SelectInputField";

const TimeTableList = ({ setCurrentPage }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <PageMenuDiraction
        title="Time Table"
        currentMenu="Admin"
        setCurrentPage={setCurrentPage}
        buttonTitle="Add Time Table"
        currentPage="Time Table"
        addButton={true}
      />{" "}
      <div className="card_shadow  relative">
        <div className="flex items-center justify-between px-[20px] py-[15px] border-b">
          <h2 className="text-[#202C4B] text-[16px] font-[500] ">Time Table</h2>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="border px-3 py-[6px] rounded-[5px] text-[14px] flex items-center gap-2 text-gray-600"
          >
            <FaFilter className="text-[14px]" /> Filter{" "}
            <IoIosArrowUp className="rotate-[180deg]" />
          </button>
        </div>

        {/* ====> Class roting   <==== */}
        <div className="p-[20px] flex gap-[20px] overflow-y-auto feesCollect">
          {[
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ].map((item) => (
            <div>
              <h2 className="text-[18px] text-[#202C4B] mb-[10px]">{item}</h2>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div
                    key={item}
                    className="bg-green-100 p-[10px] rounded-[5px] flex flex-col justify-center w-[180px]"
                  >
                    <div className="flex gap-[10px] items-center">
                      <FaRegClock className="text-gray-500" />
                      <p className="text-[13px] text-gray-500">
                        09:00 AM - 09:45 AM
                      </p>
                    </div>
                    <h2 className="text-[14px] text-center mt-[6px]">
                      Subject: <span>English</span>
                    </h2>
                    <div className="bg-white rounded-full flex items-center gap-[10px] mt-[10px] ">
                      <img
                        className="w-[30px] h-[30px] rounded-full"
                        src={user}
                        alt="User Avatar"
                      />
                      <h2 className="text-[14px]">Najmul Islam</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* =====> filter box <====== */}
        {filterOpen && (
          <div className="absolute top-[50px] right-[50px] bg-white lg:w-[350px]  border rounded-[5px] ">
            <h2 className="border-b p-[20px]">Filter</h2>
            <div className="flex flex-col gap-[20px] p-[20px]">
              <SelectInputField
                title={"Section"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
              <SelectInputField
                title={"Class"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
            </div>
            <div className="flex items-end justify-end gap-[10px]  p-[20px]">
              <div className="flex gap-[20px] items-center">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-[14px] font-semibold text-[#202c4bab] hover:bg-red-500 hover:text-white py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border"
                >
                  Cancle
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeTableList;
