import React from "react";
import { FaArrowUp } from "react-icons/fa";

const MonthlyFeesCollected = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex justify-between items-center w-full">
      {/* Left Side: Title & Amount */}
      <div>
        <h2 className="text-gray-500 text-md">Total Fees Collected</h2>
        <p className="text-[18px] font-bold text-gray-900 mt-[6px]">
          $25,000,02
        </p>
      </div>

      {/* Right Side: Growth Indicator */}
      <div className="flex items-center bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-semibold">
        <FaArrowUp className="text-xs mr-1" />
        1.2%
      </div>
    </div>
  );
};

export default MonthlyFeesCollected;
