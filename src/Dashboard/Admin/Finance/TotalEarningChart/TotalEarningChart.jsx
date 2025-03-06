import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { FaUsers } from "react-icons/fa";

const TotalEarningChart = () => {
  const data = [
    { month: "Jan", value: 30000 },
    { month: "Feb", value: 50000 },
    { month: "Mar", value: 45000 },
    { month: "Apr", value: 60000 },
    { month: "May", value: 55000 },
    { month: "Jun", value: 65000 },
  ];

  const getGradientColor = (id, color) => (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="2%" stopColor={color} stopOpacity={0.8} />
        <stop offset="95%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );

  return (
    <div className="bg-white rounded-[5px]  w-full relative overflow-hidden">
      {/* Header */}
      <div className="relative flex justify-between items-center mb-3 p-[20px]">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Earning</h2>
          <p className="text-2xl font-bold text-gray-900">$200,00</p>
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-lg bg-[#2563eb]`}
        >
          <FaUsers className="text-white text-lg" />
        </div>
      </div>

      {/* Chart Container with Full Width & Thick Border */}
      <div className="relative mt-2 w-full">
        {/* Thick Border */}
        <div
          className={`absolute top-0 left-0 right-0 h-[5px] border-[#2563eb]`}
        />

        {/* Chart */}
        <ResponsiveContainer width="100%" height={90}>
          <AreaChart data={data}>
            {getGradientColor("blueGradient", "#2563eb")}
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" className="opacity-0" />
            <Area
              type="monotone"
              dataKey="value"
              stroke={"#2563eb"}
              strokeWidth={5} // Mota Border
              fill={`url(#blueGradient)`}
              fillOpacity={5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalEarningChart;
