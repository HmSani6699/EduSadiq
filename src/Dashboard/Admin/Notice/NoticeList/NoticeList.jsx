import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import PageMenuDiraction from "../../../../Component/PageMenuDiraction/PageMenuDiraction";
import SelectInputField from "../../../../Component/SelectInputField/SelectInputField";
import { FiCalendar } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";

const NoticeList = ({ setCurrentPage, handleScheduleUpdateType }) => {
  const [openResult, setOpenResult] = useState();
  const handleClickResults = (id) => {
    setOpenResult((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <PageMenuDiraction
        title="Notice"
        currentMenu="Admin"
        setCurrentPage={setCurrentPage}
        buttonTitle="Add Notice"
        currentPage="Notice"
        addButton={true}
      />
      {/* ====== */}
      <div className="card_shadow mt-[30px]">
        <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
          <h2 className="text-[#202C4B] text-[16px] font-[500] ">Notice</h2>
          <SelectInputField
            options={[
              { id: 1, value: "নতুন" },
              { id: 2, value: "পুরাতন" },
            ]}
          />
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
                  <div>
                    {" "}
                    <h2 className="text-[#202C4B] text-[15px] font-semibold">
                      First periodical
                    </h2>
                    <p className="text-[13px] text-gray-400 flex items-center gap-[5px]">
                      <FiCalendar className="text-[14px] text-[#515B73]" />
                      Added on : 24 May 2024
                    </p>
                  </div>
                </div>
                <IoIosArrowDown
                  className={`${openResult === item && "hidden"}`}
                />
              </div>

              {/* ====> Open content <==== */}
              {openResult === item && (
                <div className=" p-[20px]">
                  {/*  */}

                  <h2 className="text-center text-[20px] font-bold underline mt-[30px]">
                    First Semister Notice
                  </h2>

                  <p className="mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi omnis accusamus tenetur labore ipsam architecto id
                    minus, optio facere quae dolorum, perspiciatis
                    necessitatibus earum aliquid nisi? Asperiores quae vel at
                    dolor beatae iure voluptatem quisquam ipsam obcaecati
                    ratione error excepturi totam culpa veritatis ex nisi,
                    aliquam alias expedita quia quis minus quo provident
                    corrupti molestiae. Explicabo, quo eaque obcaecati
                    accusantium perferendis magni illo consequuntur molestiae
                    ratione temporibus esse fuga alias accusamus voluptatibus
                    repellendus soluta veniam. Quaerat, culpa ea, est quasi
                    dicta tempore velit aliquam a amet magni ipsam sit quibusdam
                    laudantium soluta. Laboriosam laborum placeat velit eligendi
                    neque beatae voluptatum?
                  </p>

                  <div className="flex items-center justify-between ">
                    <p className="text-[13px] text-gray-400 flex items-center gap-[5px] mt-[20px]">
                      <FiCalendar className="text-[14px] text-[#515B73]" />
                      Added on : 24 May 2024
                    </p>
                    <div className="flex items-end justify-end">
                      <div className="flex gap-[20px] items-center">
                        <button onClick={() => handleDelete()}>
                          <RiDeleteBin6Line className="text-[18px] text-red-500" />
                        </button>
                        <button>
                          <FaRegPenToSquare
                            onClick={() => handleScheduleUpdateType()}
                            className="text-[16px] text-green-500"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
