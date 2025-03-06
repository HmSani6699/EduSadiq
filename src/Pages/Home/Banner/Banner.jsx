import React from "react";
import "./Banner.css";
import banner from "../../../assets/images/banner.svg";
import sent from "../../../assets/svg/sent.svg";

const Banner = () => {
  return (
    <div className="banner p-[15px] overflow-hidden w-full lg:flex-row md:flex-row flex flex-col-reverse items-center relative lg:mt-[100px] md:mt-[50px] py-[50px]">
      {/* =====> Left Site <===== */}
      <div className="lg:w-[50%] md:w-[50%] relative p-[15px] lg:p-0 mt-[30px] lg:mt-0">
        <div className="relative z-10">
          <h2 className="italic text-[30px] lg:text-[50px] text-center lg:text-left md:text-left">
            You have the <span className="text-[#1994c8]">Idea</span>
          </h2>
          <h2 className="lg:text-[60px] text-[55px] lg:leading-[70px] leading-[55px] text-center font-bold lg:text-left md:text-left mt-[10px] lg:mt-0">
            We have the technology
          </h2>
          <p className="text-[18px] lg:mt-[15px] mt-[20px] text-center lg:text-left md:text-left">
            Agile PHP & JavaScript teams ready to elevate your business.
          </p>
          <div className="flex lg:block md:block justify-center">
            <button className="bg-[#1994c8] py-[8px] px-[20px] rounded-[20px] mt-[40px] flex items-center gap-3 ">
              See what we have for you
              {/* <img className="w-[20px] h-[20px]" src={sent} alt="" /> */}
            </button>
          </div>
        </div>
        <div className="banner_box h-[300px] w-full  top-0 left-0 opacity-[0.30]  -rotate-[50deg]  absolute"></div>
      </div>
      {/* =====> Right Site <===== */}
      <div className="lg:w-[50%] md:w-[50%] overflow-hidden lg:overflow-visible relative lg:mt-0 mt-[50px] lg:pl-[40px] md:pl-[40px]">
        <div className="relative z-10">
          <img
            className=" w-[250px] lg:w-[500px] md:w-[350px]"
            src={banner}
            alt=""
          />
        </div>
        <div className="banner_box hidden lg:block h-[400px] w-full  top-0 left-0 opacity-[0.30] -rotate-[50deg]  absolute"></div>
      </div>
    </div>
  );
};

export default Banner;
