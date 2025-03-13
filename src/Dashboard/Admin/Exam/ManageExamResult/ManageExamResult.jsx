import React from "react";
import PageMenuDiraction from "../../../../Component/PageMenuDiraction/PageMenuDiraction";
import CustomSearchForm from "../../../../Component/CustomSearchForm/CustomSearchForm";
import user from "../../../../../public/najmul.png";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";
import { GoDotFill } from "react-icons/go";

const ManageExamResult = () => {
  return (
    <div>
      {/* =====> Tab Part Start <===== */}

      <PageMenuDiraction
        title="Exam Result"
        currentMenu="Admin"
        currentPage="Exam Result"
        addButton={false}
      />
      {/* =====> Tab Part End <===== */}
      <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-lg border">
        <div className="lg:flex items-center justify-between bg-white px-[20px] pt-[20px]">
          <h2 className="text-lg font-semibold">Exam Result</h2>

          <div className="lg:w-1/2 w-full flex items-center gap-[20px]">
            <div className="lg:w-1/2">
              <SelectInputField />
            </div>
            <div className="lg:w-1/2">
              <SelectInputField />
            </div>
          </div>
        </div>
        <div className="border h-[1px] border-gray-200 w-full my-[10px]"></div>
        {/* =====> Search Div  <====== */}
        <div className="flex justify-between items-center px-[20px]">
          <div className="flex items-center gap-[10px] lg:w-1/2 w-full">
            <p className="text-[#515B73] text-[14px]">Row Per Page</p>
            <select className="outline-none border py-[8px] px-[10px] rounded-[5px] text-[#515B73]">
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
            </select>
            <p className="text-[#515B73] text-[14px]">Entries</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <CustomSearchForm classAdd={"w-2/3"} />
          </div>
        </div>
        {/* =====> Responsive Table <====== */}
        <div className="overflow-auto table_scrollber">
          <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px] ">
            <thead>
              <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                <td className="whitespace-nowrap  h-10 px-[20px]  text-[#202C4B] text-[14px]">
                  ID
                </td>
                <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                  Student Name
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Bangla
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Math
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  English
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Arbi
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Biggan
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Somaz
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Hadich
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Total Marks
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Percent
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Grade
                </td>
                <td className="whitespace-nowrap  h-10 px-[30px] text-[#202C4B] text-[14px]">
                  Result
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((id, index) => (
                <tr
                  key={id}
                  className={
                    index % 2 === 1 ? "bg-[#f4f7fe] border-b" : "border-b"
                  }
                >
                  <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                    Ad748930
                  </td>
                  <td className="h-10 px-[20px] py-[13px]">
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[35px] h-[35px] rounded-full">
                        <img
                          className="w-full h-full object-cover rounded-full"
                          src={user}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-[14px] font-semibold">
                          Najmul Islam
                        </h2>
                        <p className="text-[14px] text-gray-400">Roll: 101</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 50</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 500</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> 90</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-[20px] py-[13px]">
                    <h2 className="text-center "> A+</h2>
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[0px]">
                    <button className="flex items-center ml-[10px] bg-green-100 text-[14px] text-green-500 font-semibold py-[2px] px-[10px] rounded-[5px]">
                      <GoDotFill />
                      <p>Pass</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageExamResult;
