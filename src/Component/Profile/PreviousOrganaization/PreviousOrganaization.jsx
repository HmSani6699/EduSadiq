import React from "react";

const PreviousOrganaization = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Previous Organaization Details
      </h2>

      <div className="rounded-[5px] p-[20px] flex items-center justify-between ">
        <div>
          <h2 className="text-[#202C4B] text-[14px] font-semibold">
            Previous Organaization Name
          </h2>
          <p className="text-[14px] text-gray-500 mt-[4px]">
            Pakunda Islamia Madrasa
          </p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[14px] font-semibold">
            Organaization Address
          </h2>
          <p className="text-[14px] text-gray-500 mt-[4px]">
            Pakunda, Sonargon, Narayoungonj
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviousOrganaization;
