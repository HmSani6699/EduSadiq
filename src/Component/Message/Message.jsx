import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import TextareaFiled from "../InputField/TextareaFiled";

const Message = ({ setMessage }) => {
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px]   bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[500px]  ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">Message</h2>
          <button onClick={() => setMessage(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
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
