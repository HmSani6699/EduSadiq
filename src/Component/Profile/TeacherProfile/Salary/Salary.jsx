import React from "react";
import { TbMoneybag, TbUserDollar } from "react-icons/tb";

const Salary = () => {
  const allMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div className="card_shadow mt-[30px] flex items-center justify-between p-[15px]">
          <div>
            <h2 className="text-gray-500">Total Net Salary</h2>
            <p className="text-[#202C4B] font-semibold">
              <span className="text-[20px]">৳</span> 20000
            </p>
          </div>
          <div className="p-[6px] rounded-[5px] bg-blue-100 text-blue-700">
            <TbUserDollar className="text-[25px]" />
          </div>
        </div>
        <div className="card_shadow mt-[30px] flex items-center justify-between p-[15px]">
          <div>
            <h2 className="text-gray-500">Total Bonus</h2>
            <p className="text-[#202C4B] font-semibold">
              <span className="text-[20px]">৳</span> 20000
            </p>
          </div>
          <div className="p-[6px] rounded-[5px] bg-green-100 text-green-700">
            <TbMoneybag className="text-[25px]" />
          </div>
        </div>
      </div>

      {/* =====> Paid & Unpaid month <=====  */}
      <div className="card_shadow mt-[30px]">
        <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
          <h2 className="text-[#202C4B] text-[16px] font-[500] ">
            Salary Paid & Unpaid Month
          </h2>
        </div>
        {/* =====> Month <==== */}
        <div className="p-[20px] grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
          {allMonth.map((item, i) => (
            <div
              key={item}
              className={` py-[6px] px-[15px] rounded-[5px] ${
                [0, 1, 2, 3, 4, 5].includes(i) ? "bg-green-200" : "bg-red-200"
              }`}
            >
              <h2>{item}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* =====> Slary history tabel <===== */}
      <div className="card_shadow mt-[30px]">
        <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
          <h2 className="text-[#202C4B] text-[16px] font-[500] ">
            Salary History
          </h2>
        </div>
        {/* ====> list <==== */}
        <div>
          <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-sm">
            {/* =====> Responsive Table <====== */}
            <div className="overflow-auto table_scrollber">
              <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px] ">
                <thead>
                  <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                    <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                      Leave Type
                    </td>
                    <td className="whitespace-nowrap h-10 px-2 pl-[20px] text-[#202C4B] text-[14px]">
                      Leave Date
                    </td>
                    <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                      No of Days
                    </td>
                    <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                      Applied On
                    </td>
                    <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                      Status
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
                    <tr key={id} className={"border-b"}>
                      <td className="whitespace-nowrap text-[#515B73] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                        Casual Leave
                      </td>
                      <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                        07 May 2024 - 07 may 2024
                      </td>
                      <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                        1
                      </td>

                      <td className="whitespace-nowrap w-[100px] text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                        07 May 2024
                      </td>
                      <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[0px]">
                        <h2 className="bg-green-100 text-green-700 text-[12px] font-semibold border-[2px[ rounded-[5px] py-[2px]">
                          . Active
                        </h2>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
