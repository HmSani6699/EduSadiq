import React from "react";
import { FaRegClock } from "react-icons/fa";
import user from "../../../../../public/man.png";

const ClassRoting = () => {
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
                  className="bg-green-100 p-[10px] rounded-[5px] flex flex-col justify-center w-[200px]"
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
                    <h2 className="text-[14px]">Sadiqur Rahman</h2>
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

export default ClassRoting;
