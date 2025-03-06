import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ExamResults = () => {
  const [openResult, setOpenResult] = useState();
  const handleClickResults = (id) => {
    setOpenResult((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="card_shadow mt-[30px]">
      <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
        <h2 className="text-[#202C4B] text-[16px] font-[500] ">
          Exams & Results
        </h2>
      </div>

      {/* ====> More content <===== */}
      <div className="p-[20px] flex flex-col gap-[20px]">
        {[1, 2, 3, 4].map((item, i) => (
          <div className="border ">
            <div
              onClick={() => handleClickResults(item)}
              className={`flex items-center justify-between p-[10px] cursor-pointer ${
                openResult === item && "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-[10px]">
                <div className="p-[6px] rounded-[5px] bg-[#3d5ee1]">
                  <IoCheckmarkDoneSharp className="text-white" />
                </div>
                <h2 className="text-[#202C4B] text-[14px]">First periodical</h2>
              </div>
              <IoIosArrowDown
                className={`${openResult === item && "hidden"}`}
              />
            </div>

            {/* ====> Open content <==== */}
            {openResult === item && (
              <div className="overflow-auto table_scrollber p-[20px]">
                <table className="w-full  text-left border-collapse table-auto min-w-[600px] ">
                  <thead>
                    <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                      <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                        Subject
                      </td>
                      <td className="whitespace-nowrap h-10 px-2 pl-[20px] text-[#202C4B] text-[14px]">
                        Max Marks
                      </td>
                      <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                        Min Marks
                      </td>
                      <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                        Marks Obtained
                      </td>
                      <td className="whitespace-nowrap text-center h-10 px-[20px] text-[#202C4B] text-[14px]">
                        Result
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {["Bangla", "Mathematics", "English", "Arbi"].map(
                      (item, index) => (
                        <tr key={index} className={"border-b"}>
                          <td className="whitespace-nowrap text-[#515B73] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                            {item}
                          </td>
                          <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                            100
                          </td>
                          <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                            35
                          </td>

                          <td className="whitespace-nowrap w-[100px] text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                            50
                          </td>
                          <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[0px]">
                            <h2 className="bg-green-100 text-green-700 text-[12px] font-semibold border-[2px[ rounded-[5px] py-[2px]">
                              . Pass
                            </h2>
                          </td>
                        </tr>
                      )
                    )}
                    <tr className="bg-[#202c4b] text-white text-[14px] py-[20px]">
                      <td className="text-[14px] h-10 px-2 whitespace-nowrap">
                        Rank: 20
                      </td>
                      <td className="text-[14px] h-10 px-2 whitespace-nowrap">
                        Total: 500
                      </td>
                      <td className="text-[14px] h-10 px-2 whitespace-nowrap"></td>
                      <td className="text-[14px] h-10 px-2 whitespace-nowrap">
                        Total : 20
                      </td>
                      <td className="text-[14px] h-10 px-2 whitespace-nowrap">
                        Result: pass
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div>
                <p>Rank: 20</p>
              </div> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResults;
