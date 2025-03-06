import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/lg1.png";
import sent from "../../assets/svg/sent.svg";
import NavLink from "../../Component/NavLink/NavLink";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    //

    <div className="border-b-[1px] border-[#ffffff26] text-white h-[50px] lg:h-[70px] md:h-[70px] bg-[#020617]  px-[15px] z-20  fixed w-full top-0">
      <nav className="lg:flex md:flex items-center justify-between max-w-[1280px] mx-auto  h-[70px]  py-[5px] ">
        {/* ======> Left site <===== */}
        <div className="flex justify-between items-center p-[10px] lg:p-[0px] md:block lg:block">
          <div className="relative">
            <img className=" w-[100px] lg:w-[200px] " src={logo} alt="" />
            <h2 className="logo_text text-white text-[37px] absolute top-[-12px] left-0">
              Micr
            </h2>
          </div>
          <div className=" md:hidden lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoMdClose
                  className={`text-[20px] transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                  }`}
                />
              ) : (
                <IoMdMenu
                  className={`text-[20px] transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
        {/* ======> PC or ipat nav <===== */}
        <div className=" hidden md:block lg:block">
          <ul className="flex items-center gap-[50px] text-white">
            <li>
              <NavLink title="Home" url="/" />
            </li>
            <li>
              <NavLink title="About" url="/" />
            </li>
            <li>
              <NavLink title="Services" url="/" />
            </li>
            <li>
              <NavLink title="Achievement" url="/" />
            </li>
            <li>
              <NavLink title="Contact" url="/" />
            </li>
            <li>
              <Link to="/login">
                <button className="bg-[#1994c8] py-[6px] px-[20px] rounded-[20px] flex items-center gap-3 font-bold">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* ======> Mobile nav <===== */}

        <div
          className={`block md:hidden lg:hidden bg-[#020617] absolute top-[50px] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 pt-[30px] pb-[50px]"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center  gap-[20px] text-white">
            <li>
              <NavLink title="Home" url="/" />
            </li>
            <li>
              <NavLink title="About" url="/" />
            </li>
            <li>
              <NavLink title="Services" url="/" />
            </li>
            <li>
              <NavLink title="Achievement" url="/" />
            </li>
            <li>
              <NavLink title="Contact" url="/" />
            </li>
            <li>
              <Link to="/login">
                <button className="bg-[#1994c8] py-[6px] px-[20px] rounded-[20px] flex items-center gap-3 font-bold">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
