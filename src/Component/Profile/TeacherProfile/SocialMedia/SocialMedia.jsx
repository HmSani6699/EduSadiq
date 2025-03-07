import React from "react";

const SocialMedia = () => {
  return (
    <div className="card_shadow mt-[30px]">
      <h2 className="text-[#202C4B] text-[16px] font-[500] px-[20px] py-[15px] border-b">
        Parents Information
      </h2>

      {/* =====> Main content <==== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] p-[20px]  rounded-[5px]">
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">Facebook</h2>
          <p className="text-[14px] text-gray-500">www.facebook.com</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">Twitter</h2>
          <p className="text-[14px] text-gray-500">www.twitter.com</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">Instagram</h2>
          <p className="text-[14px] text-gray-500">www.instagram.com</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">Linkedin</h2>
          <p className="text-[14px] text-gray-500">www.linkedin.com</p>
        </div>
        <div>
          <h2 className="text-[#202C4B] text-[15px] font-[500]">Youtube</h2>
          <p className="text-[14px] text-gray-500">www.youtube.com</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
