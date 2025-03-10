import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Email = ({ setEmail }) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "sadiq@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px] px-[20px]  bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[500px]  w-full ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">Email</h2>
          <button onClick={() => setEmail(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>

        <div className="overflow-auto table_scrollber p-[20px]">
          <table className="w-full mt-5 text-left border-collapse table-auto min-w-[300px] ">
            <thead>
              <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                <td className="whitespace-nowrap  h-10 px-2 text-[#202C4B] text-[14px]">
                  Name
                </td>
                <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                  Phone
                </td>

                <td className="whitespace-nowrap h-10 px-[30px] text-[#202C4B] text-[14px] text-center">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((id, index) => (
                <tr key={id} className={"border-b"}>
                  <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                    Father
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    sadiq@gamil.com
                  </td>
                  <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                    <div className="flex items-center justify-center">
                      <FaRegCopy
                        className="cursor-pointer"
                        onClick={handleCopy}
                      />
                    </div>
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

export default Email;
