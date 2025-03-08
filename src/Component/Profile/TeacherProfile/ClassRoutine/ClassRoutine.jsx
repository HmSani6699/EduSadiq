import React from "react";
import { FaRegClock } from "react-icons/fa";

const ClassRoutine = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Class Roting
      </h2>

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
                  className="bg-green-100  rounded-[5px]  w-[200px]"
                >
                  <div className="bg-gray-300 w-full rounded-t-[5px] py-[10px] text-center ">
                    <h2 className="font-semibold"> Rome: 01</h2>
                  </div>
                  <div className="p-[20px]">
                    <h2 className="text-[14px]">
                      Class: <span>English</span>
                    </h2>
                    <h2 className="text-[14px]  mt-[6px]">
                      Subject: <span>English</span>
                    </h2>
                    <div className="flex gap-[10px] items-center mt-[10px]">
                      <FaRegClock className="text-gray-500" />
                      <p className="text-[13px] text-gray-500">
                        09:00 AM - 09:45 AM
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassRoutine;
