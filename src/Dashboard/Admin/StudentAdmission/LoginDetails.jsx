import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import user from "../../../../public/sadiq.jpg";

const LoginDetails = ({ setLoginDetails }) => {
  return (
    <div className="fixed inset-0 z-[70] flex justify-center items-center  py-[30px]   bg-black bg-opacity-50">
      <div className="bg-white   rounded-lg shadow-lg relative lg:w-[800px]  ">
        <div className="flex items-center justify-between border-b p-[15px]">
          <h2 className="text-[20px] text-[#202C4B] font-bold">
            Login Details
          </h2>
          <button onClick={() => setLoginDetails(false)}>
            <IoIosCloseCircle className="text-[#838A9B] text-[23px] hover:text-red-500" />
          </button>
        </div>

        {/* =====> MAin content <-====== */}
        <div className="">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-[6px] mt-[20px]">
              <div className="h-[50px] w-[50px] rounded-[5px]">
                <img className="rounded-[5px]" src={user} alt="user image" />
              </div>
              <div>
                <p>Sadiqur Rahman</p>
                <p>One</p>
              </div>
            </div>
          </div>

          <div className="overflow-auto table_scrollber p-[20px] ">
            <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px]  border">
              <thead>
                <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
                  <td className="whitespace-nowrap h-10 px-[20px]  text-[#202C4B] text-[14px]">
                    User Type
                  </td>
                  <td className="whitespace-nowrap h-10 px-2 pl-[20px] text-[#202C4B] text-[14px]">
                    User Name
                  </td>
                  <td className="whitespace-nowrap text-center h-10 px-[50px] text-[#202C4B] text-[14px]">
                    Password
                  </td>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((id, index) => (
                  <tr key={id} className="border-b">
                    <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                      Md Nivale
                    </td>
                    <td className="whitespace-nowrap text-[#515B73] text-[14px]  h-10 px-2 py-[13px]">
                      Md Nivale
                    </td>
                    <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                      AD12345
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
