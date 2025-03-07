import React from "react";

const BankDetails = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Bank Details
      </h2>

      {/* =====> Main content <==== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]  p-[20px]  rounded-[5px]">
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">
            Father’s Name
          </h2>
          <p className="text-[14px] text-gray-500">Francis Saviour</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">
            Mother’s Name
          </h2>
          <p className="text-[14px] text-gray-500">Francis Saviour</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">
            Date of Birth
          </h2>
          <p className="text-[14px] text-gray-500">01/01/2000</p>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
