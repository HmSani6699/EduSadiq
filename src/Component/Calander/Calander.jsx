// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Calendar = ({ monthData }) => {
//   const { month, present_date, absent_date } = monthData;

//   const monthMap = {
//     january: 0,
//     february: 1,
//     march: 2,
//     april: 3,
//     may: 4,
//     june: 5,
//     july: 6,
//     august: 7,
//     september: 8,
//     october: 9,
//     november: 10,
//     december: 11,
//   };

//   const year = 2025;
//   const monthIndex = monthMap[month.toLowerCase()];
//   const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
//   const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

//   const presentDates = present_date.map((item) => item.date);
//   const absentDates = absent_date.map((item) => item.date);

//   const calendarDays = Array.from(
//     { length: daysInMonth + firstDayOfMonth },
//     (_, i) => (i < firstDayOfMonth ? null : i - firstDayOfMonth + 1)
//   );

//   const getDayBgColor = (date) => {
//     if (presentDates.includes(date)) return "bg-green-200 hover:bg-green-300";
//     if (absentDates.includes(date)) return "bg-red-200 hover:bg-red-300";
//     return "hover:bg-gray-200";
//   };

//   // Pie Chart Data
//   const pieData = [
//     { name: "Present", value: presentDates.length, color: "#4CAF50" }, // Green
//     { name: "Absent", value: absentDates.length, color: "#F44336" }, // Red
//   ];

//   return (
//     <div className="flex rounded-lg bg-white">
//       <div className="w-[50%] p-4 rounded-lg ">
//         <h2 className="text-center text-xl font-semibold mb-[8px]">
//           Attendance Overview
//         </h2>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#8884d8"
//               label
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>

//         {/* Total Present & Absent (Text View) */}
//         <div className="mt-4 text-center">
//           <p className="text-lg font-semibold text-green-600">
//             Total Present: {presentDates.length}
//           </p>
//           <p className="text-lg font-semibold text-red-600">
//             Total Absent: {absentDates.length}
//           </p>
//         </div>
//       </div>
//       <div className=" w-[50%] p-4 shadow-lg ">
//         <h2 className="text-[25px] font-semibold text-center mb-4 capitalize">
//           {month}
//         </h2>
//         <div className="grid grid-cols-7 gap-2">
//           {/* সপ্তাহের দিন */}
//           {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
//             <div
//               key={day}
//               className={`font-bold text-center ${
//                 day === "FRI" ? "text-red-600" : "text-gray-700"
//               }`}
//             >
//               {day}
//             </div>
//           ))}

//           {/* ক্যালেন্ডারের দিন */}
//           {calendarDays.map((day, index) => {
//             if (day === null) {
//               return <div key={index} className="p-2"></div>;
//             }

//             const date = `${String(monthIndex + 1).padStart(2, "0")}/${String(
//               day
//             ).padStart(2, "0")}/${year}`;
//             const bgColor = getDayBgColor(date);

//             const isFriday = new Date(year, monthIndex, day).getDay() === 5;

//             return (
//               <div
//                 key={index}
//                 className={`rounded-full border text-center p-2 ${bgColor} ${
//                   isFriday ? "text-red-600 font-bold" : "text-gray-800"
//                 }`}
//                 title={
//                   presentDates.includes(date)
//                     ? "Present"
//                     : absentDates.includes(date)
//                     ? "Absent"
//                     : "No Data"
//                 }
//               >
//                 {day}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Calendar = ({ monthData }) => {
  const { month, present_date, absent_date } = monthData;

  const monthMap = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const year = 2025;
  const monthIndex = monthMap[month.toLowerCase()];
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  const presentDates = present_date.map((item) => item.date);
  const absentDates = absent_date.map((item) => item.date);

  const calendarDays = Array.from(
    { length: daysInMonth + firstDayOfMonth },
    (_, i) => (i < firstDayOfMonth ? null : i - firstDayOfMonth + 1)
  );

  const getDayBgColor = (date) => {
    if (presentDates.includes(date)) return "bg-green-200 hover:bg-green-300";
    if (absentDates.includes(date)) return "bg-red-200 hover:bg-red-300";
    return "hover:bg-gray-200";
  };

  // Pie Chart Data
  const pieData = [
    { name: "Present", value: presentDates.length, color: "#4CAF50" }, // Green
    { name: "Absent", value: absentDates.length, color: "#F44336" }, // Red
  ];

  return (
    <div className="rounded-lg bg-white">
      <div className=" w-full p-4">
        <h2 className="text-[25px] font-semibold text-center mb-4 capitalize">
          {month}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {/* সপ্তাহের দিন */}
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div
              key={day}
              className={`font-bold text-center ${
                day === "FRI" ? "text-red-600" : "text-gray-700"
              }`}
            >
              {day}
            </div>
          ))}

          {/* ক্যালেন্ডারের দিন */}
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className="p-2"></div>;
            }

            const date = `${String(monthIndex + 1).padStart(2, "0")}/${String(
              day
            ).padStart(2, "0")}/${year}`;
            const bgColor = getDayBgColor(date);

            const isFriday = new Date(year, monthIndex, day).getDay() === 5;

            return (
              <div
                key={index}
                className={`rounded-full border text-center p-2 text-[14px] ${bgColor} ${
                  isFriday ? "text-red-600 font-bold" : "text-gray-800"
                }`}
                title={
                  presentDates.includes(date)
                    ? "Present"
                    : absentDates.includes(date)
                    ? "Absent"
                    : "No Data"
                }
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
