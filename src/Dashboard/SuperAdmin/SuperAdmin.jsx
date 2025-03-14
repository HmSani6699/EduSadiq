import React from "react";
import student from "../../../public/student.png";
import teacher from "../../../public/teacher.png";
import staff from "../../../public/svg/staff.svg";
import subject from "../../../public/svg/subject.svg";
import TotalEarningChart from "../Admin/Finance/TotalEarningChart/TotalEarningChart";
import TotalExpensesChart from "../Admin/Finance/TotalExpensesChart/TotalExpensesChart";
import MonthlyFeesCollected from "../Admin/Finance/MonthlyFeesCollected/MonthlyFeesCollected";
import FoodFeesCollected from "../Admin/Finance/FoodFeesCollected/FoodFeesCollected";
import DonationCollected from "../Admin/Finance/DonationCollected/DonationCollected";
import FineCollected from "../Admin/Finance/FineCollected/FineCollected";

const SuperAdmin = () => {
  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-[20px] w-full mb-[30px]">
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md border rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#86ddff28] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md border rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#fde9ed86] p-[8px] rounded-[8px]">
              <img src={teacher} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">20</h2>
              <p className="text-gray-500 text-[14px]">Total Teacher</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md border rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FEF8EA] p-[8px] rounded-[8px]">
              <img src={staff} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">10</h2>
              <p className="text-gray-500 text-[14px]">Total Staff</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md border rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={subject} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">10</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
        </div>
      </div>
      {/* =====> Finance <====== */}
      <div className="lg:flex gap-[20px] mt-[30px]">
        <div className="lg:w-1/2 flex flex-col gap-[20px]">
          <TotalEarningChart />
          <TotalExpensesChart />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-[10px]">
          <MonthlyFeesCollected />
          <FoodFeesCollected />
          <DonationCollected />
          <FineCollected />
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
