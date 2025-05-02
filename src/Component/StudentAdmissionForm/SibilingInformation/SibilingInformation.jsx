import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";
import SelectInputField from "../../SelectInputField/SelectInputField";
import { RiDeleteBin6Line } from "react-icons/ri";
import FileUploadFiled from "../../FileUploadFiled/FileUploadFiled";

const SibilingInformation = () => {
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
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">Sibilings</h2>
      </div>
      {/*  */}

      {/*  */}
      {addSibiling?.map((item, i) => {
        // console.log(addClass[i].teacherName);

        const newIndex = i + 1;
        return (
          <div className={`${i > 0 && "border-t pt-[10px]"}`}>
            {/* ======> class add delete <==== */}

            <div className="flex items-center justify-between px-[20px] mt-[20px]">
              <FileUploadFiled />

              {/* =====> Sibiling info <====== */}
              <div className="lg:block hidden">
                {addSibiling?.length === 1 ? (
                  <div className="flex items-center gap-[10px] justify-end">
                    <button
                      className="text-[14px] flex items-center gap-[10px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
                      onClick={handeAddNewSibiling}
                    >
                      <FaPlus className="text-[12px]" /> Add New
                    </button>
                  </div>
                ) : addSibiling?.length === newIndex ? (
                  <div className="flex items-center gap-[10px] justify-end">
                    <button
                      className="text-[14px] flex items-center gap-[10px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
                      onClick={handeAddNewSibiling}
                    >
                      <FaPlus className="text-[12px]" /> Add New
                    </button>

                    <button
                      onClick={() => handleSibilingDelete(i)}
                      className="text-[14px] flex items-center gap-[10px] text-[#ff1a1a] bg-[#e1a8a8ab] py-[6px] px-[15px] rounded-[5px]  border"
                    >
                      <RiDeleteBin6Line className="text-[12px]" /> Delete
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-[10px] justify-end mb-[25px]">
                    <button
                      onClick={() => handleSibilingDelete(i)}
                      className="text-[14px] flex items-center gap-[10px] text-[#ff1a1a] bg-[#e1a8a8ab] py-[6px] px-[15px] rounded-[5px]  border"
                    >
                      <RiDeleteBin6Line className="text-[12px]" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/*  */}
            <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
              <InputField title={"Admission Number"} />
              <InputField title={"Admission Date"} type={"date"} />
              <InputField title={"Roll Number"} />

              <InputField title={"First Name"} />
              <InputField title={"Last Name"} />
              <SelectInputField
                title={"Gender"}
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
              <SelectInputField
                title={"Section"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
              <SelectInputField
                title={"Category"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />

              <InputField title={"Date of Birth"} />
              <SelectInputField
                title={"Blood Group"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
              <SelectInputField
                title={"Status"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
            </div>

            {/* =====> Sibiling info <====== */}
            <div className="lg:hidden  block mb-[20px] px-[20px]">
              {addSibiling?.length === 1 ? (
                <div className="flex items-center gap-[10px] justify-end">
                  <button
                    className="text-[14px] flex items-center gap-[10px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
                    onClick={handeAddNewSibiling}
                  >
                    <FaPlus className="text-[12px]" /> Add New
                  </button>
                </div>
              ) : addSibiling?.length === newIndex ? (
                <div className="flex items-center gap-[10px] justify-end">
                  <button
                    className="text-[14px] flex items-center gap-[10px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
                    onClick={handeAddNewSibiling}
                  >
                    <FaPlus className="text-[12px]" /> Add New
                  </button>

                  <button
                    onClick={() => handleSibilingDelete(i)}
                    className="text-[14px] flex items-center gap-[10px] text-[#ff1a1a] bg-[#e1a8a8ab] py-[6px] px-[15px] rounded-[5px]  border"
                  >
                    <RiDeleteBin6Line className="text-[12px]" /> Delete
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-[10px] justify-end mb-[25px]">
                  <button
                    onClick={() => handleSibilingDelete(i)}
                    className="text-[14px] flex items-center gap-[10px] text-[#ff1a1a] bg-[#e1a8a8ab] py-[6px] px-[15px] rounded-[5px]  border"
                  >
                    <RiDeleteBin6Line className="text-[12px]" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SibilingInformation;
