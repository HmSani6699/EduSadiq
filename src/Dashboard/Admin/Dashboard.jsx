import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import student from "../../../public/student.png";
import teacher from "../../../public/teacher.png";
import staff from "../../../public/svg/staff.svg";
import subject from "../../../public/svg/subject.svg";
import banner_tab from "../../../public/banner_tab.png";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import TotalEarningChart from "./Finance/TotalEarningChart/TotalEarningChart";
import TotalExpensesChart from "./Finance/TotalExpensesChart/TotalExpensesChart";
import MonthlyFeesCollected from "./Finance/MonthlyFeesCollected/MonthlyFeesCollected";
import FoodFeesCollected from "./Finance/FoodFeesCollected/FoodFeesCollected";
import DonationCollected from "./Finance/DonationCollected/DonationCollected";
import FineCollected from "./Finance/FineCollected/FineCollected";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  const data = [
    { name: "2023", value1: 5, value2: 5 },
    { name: "2023", value1: 10, value2: 10 },
    { name: "2023", value1: 15, value2: 20 },
    { name: "2023", value1: 20, value2: 30 },
    { name: "2023", value1: 25, value2: 40 },
    { name: "2023", value1: 30, value2: 50 },
    { name: "2023", value1: 35, value2: 60 },
    { name: "2023", value1: 40, value2: 70 },
  ];

  const data1 = [
    { name: "Emergency", value: 28, color: "#3B82F6" },
    { name: "Absent", value: 1, color: "#06B6D4" },
    { name: "Late", value: 1, color: "#10B981" },
  ];

  const [selectedTab, setSelectedTab] = useState("Students");
  const total = data1.reduce((acc, item) => acc + item.value, 0);
  const presentPercentage = ((total - 1) / total) * 100;
  return (
    <div className="">
      {/* =====> Tab Part Start <===== */}
      <div className="lg:flex items-center justify-between pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {t("Admin_dashboard")}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">{t("Dashboard")}</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">{t("Admin_dashboard")}</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px] mt-[15px]">
          <Link to={"/admin/student_admission"}>
            <button className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[10px] shadow-sm">
              <FaPlus className="text-[12px]" /> Add New Student
            </button>
          </Link>
          <Link to={"/admin/fees_collect"}>
            <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[10px] shadow-sm">
              Fees Details
            </button>
          </Link>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}

      <div className="w-full h-[100px] overflow-hidden rounded-[5px] relative lg:mb-[30px] mb-[15px]">
        <img className="w-full " src={banner_tab} alt="" />
        <div className="absolute top-1/2  left-[20px] -translate-y-1/2">
          <h2 className="text-[25px] text-white font-bold">
            Welcome Back, Md. Nujmul Islam
          </h2>
          <p className="text-[14px] text-white ">Have a Good day at work</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4  gap-[20px] w-full mb-[30px]">
        {[
          { image: student, title: t("Total_Student"), value: 120 },
          { image: teacher, title: t("Total_Teacher"), value: 120 },
          { image: staff, title: t("Total_Staff"), value: 120 },
          { image: subject, title: t("Total_Subject"), value: 120 },
        ].map((item, i) => (
          <div key={i} className="bg-white p-[10px] shadow-md rounded-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="h-[50px] w-[50px] bg-[#86ddff28] p-[8px] rounded-[8px]">
                <img src={item?.image} alt="image" />
              </div>
              <div>
                <h2 className="text-[25px] font-bold text-[#202C4B]">
                  {item?.value}
                </h2>
                <p className="text-gray-500 text-[14px]">{item?.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== */}
      <div className="lg:flex gap-[20px]">
        <div className="bg-white shadow-md rounded-[8px] lg:w-[60%] lg:p-[20px]">
          <h2 className="text-[25px] font-bold mb-[20px]">
            Total Fees Collect
          </h2>
          <hr className="mb-[20px]" />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" angle={-30} textAnchor="end" />
              {/* <YAxis /> */}
              <Tooltip shape={<RoundedBar />} />
              {/* <Legend /> */}
              <Bar
                dataKey="value1"
                stackId="a"
                fill="#3d5ee1"
                // shape={<RoundedBar />}
              />
              <Bar
                dataKey="value2"
                stackId="a"
                fill="#E5E8F3"
                shape={<RoundedBar />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* === */}
        <div className="bg-white shadow-md rounded-lg p-5 lg:w-96 w-full mt-[15px] lg:mt-0">
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <h2 className="text-lg font-semibold">Attendance</h2>
            <button className="text-sm text-gray-600">📅 Today</button>
          </div>
          <div className="flex space-x-4 border-b pb-2 mb-3">
            {["Students", "Teachers", "Staff"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-sm font-medium ${
                  selectedTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            {data1.map((item) => (
              <div key={item.name} className="bg-gray-100 p-3 rounded-lg">
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-xs text-gray-600">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-3">
            <PieChart width={150} height={150}>
              <Pie
                data={data1}
                dataKey="value"
                outerRadius={60}
                innerRadius={40}
                stroke="none"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <p className="text-center font-semibold text-xl text-blue-600">
            {presentPercentage.toFixed(1)}%
          </p>
          <div className="mt-4 text-center">
            <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 flex items-center">
              📅 View All
            </button>
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

export default Dashboard;

const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // Adjust border radius here

  return (
    <path
      d={`
        M ${x},${y + height} 
        L ${x},${y + radius} 
        Q ${x},${y} ${x + radius},${y} 
        L ${x + width - radius},${y} 
        Q ${x + width},${y} ${x + width},${y + radius} 
        L ${x + width},${y + height} 
        Z
      `}
      fill={fill}
    />
  );
};
