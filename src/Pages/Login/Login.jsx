import React, { useState } from "react";
import "./Login.css";
import login_image from "../../assets/images/login.svg";
import logo from "../../assets/images/lg1.png";
import InputField from "../../Component/InputField/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [isTypeText, setIsTypeText] = useState(false);

  return (
    <div className=" text-white lg:w-full  h-screen flex items-center justify-center relative p-[10px] lg:p-0">
      <div className="login_box hidden lg:block md:block h-full w-full  top-0 left-0 opacity-[0.30] absolute"></div>
      <div className="relative z-10 lg:flex md:flex  md:justify-center items-center w-full max-w-[1280px] mx-0 lg:gap-[200px] ">
        {/* =====> Left site <===== */}
        <div className="hidden lg:block ">
          <img className="w-[500px]" src={login_image} alt="" />
        </div>
        {/* =====> Right site <===== */}
        <div className=" w-full h-full lg:h-[470px] lg:w-[470px]  md:h-[400px] md:w-[400px]   relative overflow-hidden border-[2px] rounded-[15px] border-[#ffffff26] shadow-md ">
          <div className="login_right_box min-h-full min-w-full  -top-[30px] left-0 opacity-[0.30]  rotate-[90deg]  absolute"></div>
          <div className="relative z-10 p-[30px]">
            <div className="flex flex-col text-white items-center justify-center ">
              <div className="relative">
                <img className=" w-[100px] lg:w-[200px] " src={logo} alt="" />
                <h2 className="logo_text text-white text-[37px] absolute top-[-12px] left-0">
                  Micr
                </h2>
              </div>
              <h2 className="text-[25px] font-bold my-[20px]">Login</h2>
            </div>

            {/* =====> Login From <====== */}
            <div className="flex flex-col gap-[20px]">
              <InputField
                type="text"
                title="Email"
                placeholder="Enter Your Email"
              />
              <div className="relative ">
                <InputField
                  type={isTypeText ? "text" : "password"}
                  title="Password"
                  placeholder="Enter Your Email"
                />
                <div className=" absolute top-[42px] right-[15px] z-10">
                  {isTypeText ? (
                    <button onClick={() => setIsTypeText(false)}>
                      <IoMdEye className="text-black text-[23px]" />
                    </button>
                  ) : (
                    <button onClick={() => setIsTypeText(true)}>
                      <IoMdEyeOff className="text-black text-[23px]" />
                    </button>
                  )}
                </div>
              </div>
              <div className="w-full">
                <button className="bg-[#1994c8] py-[8px] px-[20px] mt-[20px] rounded-[20px] w-full font-bold">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
