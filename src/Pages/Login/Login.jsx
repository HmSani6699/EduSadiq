import React, { useState } from "react";
import logo from "../../../public/svg/edulogo.svg";
import InputField from "../../Component/InputField/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full lg:shadow-lg h-screen flex items-center justify-center lg:bg-slate-100 bg-white">
      <div className="lg:border p-[30px] rounded-[5px] bg-white">
        <div className="flex items-center justify-center">
          <div className="flex items-center pl-[20px] gap-[5px] pb-4 ">
            <img
              className="transition-all duration-300 w-[40px] h-[40px]"
              src={logo}
              alt="website logo"
            />
            <h2 className=" text-[24px]">
              <span className="font-bold">Edu</span>Sadiq
            </h2>
          </div>
        </div>
        <h2 className="text-[18px] my-[15px] text-center">
          A complete solution for your educational institution
        </h2>

        {/* =====> Form  <===== */}
        <div className="flex flex-col gap-[20px]">
          <InputField
            setValue={"4534534"}
            defaultValue={"01996359111"}
            title={"Phone"}
          />
          <InputField defaultValue={123456} title={"Password"} />
          <Link to="/admin">
            <button className="py-[10px] rounded-[5px] text-white bg-[#3d5ee1] w-full font-bold mt-[15px]">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
