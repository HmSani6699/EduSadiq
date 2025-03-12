import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../../../../Component/InputField/InputField";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import SelectInputField from "../../../../../Component/SelectInputField/SelectInputField";

const ExamScheduleCreateUpdate = ({ setCurrentPage, type }) => {
  const [addSibiling, setAddSibiling] = useState([
    {
      teacherName: "Sadiq",
      category: "Mogtob",
      class: "one",
      classeGroup: "One",
      subject: "arabic",
      startTime: "10:10:02 PM",
      endTime: "11:00:00 PM",
    },
  ]);

  // =====> Add new class <======//
  const handeAddNewSibiling = () => {
    setAddSibiling([
      ...addSibiling,
      {
        teacherName: "Sadiq",
        category: "Mogtob",
        class: "one",
        classeGroup: "One",
        subject: "arabic",
        startTime: "10:10:02 PM",
        endTime: "11:00:00 PM",
      },
    ]);
  };

  // =====> Delete sibiling <=====//
  const handleSibilingDelete = (value) => {
    const filterValue = addSibiling?.filter((item, i) => i !== value);
    console.log(filterValue);
    setAddSibiling(filterValue);
  };
  return (
    <div>
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pt-[10px] pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            {type === "create"
              ? "  Add Exam Schedule"
              : "  Update Exam Schedule"}
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Add Exam Type</p>
          </div>
        </div>
      </div>

      <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
        <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
          <div className="bg-white p-[5px] rounded-[5px]">
            <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
          </div>
          <h2 className="text-[#202C4B] font-semibold text-[18px]">
            Exam Schedule
          </h2>
        </div>
        {/*  */}

        <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] border-b">
          <SelectInputField
            title={"Exam Name"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Section"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <SelectInputField
            title={"Class"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
          <InputField title={"Start Time"} />
          <InputField title={"End Time"} />
          <SelectInputField
            title={"Duration"}
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
        </div>

        {/*  */}
        <div>
          {addSibiling?.map((item, i) => {
            const newIndex = i + 1;
            return (
              <div>
                {/*  */}
                <div className="px-[20px] py-[10px] grid grid-cols-2 lg:grid-cols-5 gap-[20px] border-b lg:border-b-0">
                  <InputField type={"date"} title={"Exam Date"} />
                  <SelectInputField
                    title={"Subject"}
                    options={[
                      { id: 1, value: "নতুন" },
                      { id: 2, value: "পুরাতন" },
                    ]}
                  />
                  <SelectInputField
                    title={"Room NO"}
                    options={[
                      { id: 1, value: "নতুন" },
                      { id: 2, value: "পুরাতন" },
                    ]}
                  />

                  <SelectInputField
                    title={"Max Marks "}
                    options={[
                      { id: 1, value: "নতুন" },
                      { id: 2, value: "পুরাতন" },
                    ]}
                  />
                  <div className="flex items-center gap-[10px] col-span-2 lg:col-span-1 ">
                    <div className="lg:w-[90%] w-full">
                      <SelectInputField
                        title={"Min Marks "}
                        options={[
                          { id: 1, value: "নতুন" },
                          { id: 2, value: "পুরাতন" },
                        ]}
                      />
                    </div>
                    {newIndex > 1 && (
                      <div>
                        <button
                          onClick={() => handleSibilingDelete(i)}
                          className="mt-[25px] bg-red-200 p-[5px] rounded-[5px] "
                        >
                          <RiDeleteBin6Line className="text-[17px] text-red-500 " />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-[10px] mb-[15px] p-[20px]">
          <div className="flex items-center gap-[10px] justify-end">
            <button
              className="text-[14px] flex items-center gap-[10px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
              onClick={handeAddNewSibiling}
            >
              <FaPlus className="text-[12px]" /> Add New
            </button>
          </div>
          <div className="flex gap-[20px] items-center">
            <button
              onClick={() => setCurrentPage(true)}
              className="text-[14px] font-semibold text-[#202c4bab] hover:bg-red-500 hover:text-white py-[8px] px-[15px] bg-gray-200 rounded-[5px]  border"
            >
              Cancle
            </button>
            <button
              onClick={() => setCurrentPage(true)}
              className="text-[14px] font-semibold text-[#fff] bg-[#506EE4] py-[8px] px-[15px] rounded-[5px]  border"
            >
              Add Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamScheduleCreateUpdate;
