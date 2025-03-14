import React from "react";
import signature from "../../../public/signature.png";
import "./invoice.css";

const Invoice = ({ instituteName, invoiceNO, pay, invoiceDate, dueDate }) => {
  return (
    <div className="border w-[600px] h-[900px] relative bg_image">
      {/* <img src={invoice_image} alt="invoice image" /> */}
      <h2 className="absolute top-[198px] left-[125px]">{instituteName}</h2>
      <p className="absolute top-[276px] left-[105px] text-[13px] font-semibold">
        {pay}
      </p>
      <p className="absolute top-[199px] right-[114px] text-[14px] font-semibold">
        {invoiceNO}
      </p>
      <p className="absolute top-[218px] right-[76px] text-[12px] font-semibold">
        {invoiceDate}
      </p>
      <p className="absolute top-[235px] right-[76px] text-[12px] font-semibold">
        {dueDate}
      </p>

      <div className="  mt-[330px]">
        <table className="w-full  text-left border-collapse table-auto min-w-[600px] ">
          <thead>
            <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
              <td className="whitespace-nowrap h-10 px-2 pl-[20px]  text-[#202C4B] text-[14px]">
                Item
              </td>
              <td className="whitespace-nowrap h-10 px-2  text-[#202C4B] text-[14px]">
                Name
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Rate
              </td>
              <td className="whitespace-nowrap h-10 px-2 text-center text-[#202C4B] text-[14px]">
                Amount
              </td>
            </tr>
          </thead>
          <tbody>
            {["Bangla", "Mathematics", "English", "Arbi"].map((item, index) => (
              <tr key={index} className={"border-b"}>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] pl-[20px] h-10 px-2 py-[13px]">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px]  h-10 px-2 py-[13px]">
                  Fees
                </td>

                <td className="whitespace-nowrap  text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  50
                </td>
                <td className="whitespace-nowrap  text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  50
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-end font-semibold mt-[20px] pr-[80px]">
          Total Amount: 500
        </h2>

        {/* =====signature ===== */}
        <div className="absolute bottom-[135px] right-[45px]">
          <img className="w-[200px]" src={signature} alt="signature " />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
