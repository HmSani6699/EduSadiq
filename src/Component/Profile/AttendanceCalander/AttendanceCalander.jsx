import React, { useState } from "react";

import Calander from "../../Calander/Calander";
import SelectInputField from "../../SelectInputField/SelectInputField";

const AttendanceCalander = () => {
  const [calendarData, setCalendarData] = useState([
    {
      month: "january",
      present_date: [
        {
          date: "01/01/2025",
          status: true,
        },
        {
          date: "01/03/2025",
          status: true,
        },
        {
          date: "01/06/2025",
          status: true,
        },
      ],
      absent_date: [
        {
          date: "01/02/2025",
          status: false,
        },
        {
          date: "01/05/2025",
          status: false,
        },
      ],
    },
    // {
    //   month: "december",
    //   present_date: [
    //     {
    //       date: "12/01/2025",
    //       status: true,
    //     },
    //     {
    //       date: "12/03/2025",
    //       status: true,
    //     },
    //     {
    //       date: "12/06/2025",
    //       status: true,
    //     },
    //   ],
    //   absent_date: [
    //     {
    //       date: "12/02/2025",
    //       status: false,
    //     },
    //     {
    //       date: "12/05/2025",
    //       status: false,
    //     },
    //   ],
    // },
  ]);

  return (
    <div className="card_shadow mt-[30px]">
      <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
        <h2 className="text-[#202C4B] text-[16px] font-[500] ">Attendance</h2>
        <div className="flex items-center gap-[20px]">
          <SelectInputField />
        </div>
      </div>
      <div className="p-4">
        {calendarData.map((monthData, index) => (
          <Calander key={index} monthData={monthData} />
        ))}
      </div>
    </div>
  );
};

export default AttendanceCalander;
