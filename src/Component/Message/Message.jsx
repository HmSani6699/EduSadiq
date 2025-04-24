import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import TextareaFiled from "../InputField/TextareaFiled";

const Message = ({ setMessage }) => {
  const [selectedGuardian, setSelectedGuardian] = useState("Father");
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px] px-[10px] bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[500px] w-full  ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">Message</h2>
          <button onClick={() => setMessage(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>

        {/* ====> */}
        <div className=" lg:flex items-center gap-[20px] p-[20px]">
          <span className="text-gray-600 text-sm font-medium ">
            If Guardian Is
          </span>

          {/* Radio Options */}
          <div className="flex items-center gap-[20px] mt-[15px] lg:mt-0">
            {["Father", "Mother", "Guardian"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="guardian"
                  value={option}
                  checked={selectedGuardian === option}
                  onChange={() => setSelectedGuardian(option)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                    selectedGuardian === option
                      ? "border-blue-600"
                      : "border-gray-400"
                  }`}
                >
                  {selectedGuardian === option && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
        {/* ====> Message box <==== */}
        <div className="p-[20px]">
          <TextareaFiled
            title={"Writing the Message"}
            defaultValue={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one"
            }
          />
          <div className="flex items-end justify-end mt-[20px]">
            <button className="font-bold py-[6px] px-[15px] rounded-[5px] text-white bg-[#3d5ee1]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
