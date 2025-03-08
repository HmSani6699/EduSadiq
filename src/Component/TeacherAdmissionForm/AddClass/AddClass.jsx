import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputField from "../../InputField/InputField";
import SelectInputField from "../../SelectInputField/SelectInputField";

const AddClass = () => {
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
        <h2 className="text-[#202C4B] font-semibold text-[18px]">Add Class</h2>
      </div>

      {/*  */}
      {addSibiling?.map((item, i) => {
        // console.log(addClass[i].teacherName);

        const newIndex = i + 1;
        return (
          <div className={`${i > 0 && "border-t pt-[10px]"}`}>
            {/* ======> class add delete <==== */}

            <div className="flex items-center justify-between px-[20px] pt-[20px]">
              <h2 className="text-[#202c4bab] text-[20px]">Class: {i + 1}</h2>

              {/*  */}
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

            {/*  */}
            <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
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
              <SelectInputField
                title={"Groupe No"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />
              <SelectInputField
                title={"Subject"}
                options={[
                  { id: 1, value: "নতুন" },
                  { id: 2, value: "পুরাতন" },
                ]}
              />

              <InputField title={"Start Time"} />
              <InputField title={"End Time"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddClass;
