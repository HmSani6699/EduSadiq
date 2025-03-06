import React from "react";
import "./Footer.css";
import logo from "../../assets/images/lg1.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_container text-white w-full mt-[200px] relative p-[15px]">
      <div className="footer_box h-full w-full  top-0 left-0 opacity-[0.30] absolute"></div>
      <div className="max-w-[1280px] mx-auto relative z-10 py-[50px] lg:px-0 px-[15px] lg:flex">
        <div className="lg:w-[60%] md:w-[100%] w-full lg:flex md:flex ">
          {/* ======> Address <====== */}
          <div className="lg:w-[60%] md:w-[100%] w-full">
            <div className="flex justify-center lg:block ">
              {/* <img className="w-[170px]" src={logo} alt="" /> */}
              <div className="relative">
                <img className="w-[170px]" src={logo} alt="" />
                <h2 className="logo_text text-white text-[31px] absolute top-[-9px] left-0">
                  Micr
                </h2>
              </div>
            </div>
            <p className="text-white text-[18px] mt-[30px] text-center lg:text-left ">
              Address: 8th & 13th Floor, 52/1 Hasan Holdings <br /> Limited, New
              Eskaton Road, Dhaka - 1000
            </p>
            {/* ====> Social link <===== */}
            <div className="flex justify-center lg:justify-start gap-[15px] mt-[30px]">
              <div className="group hover:bg-[#1994c8] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaFacebookF className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#1994c8] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <IoLogoTwitter className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#1994c8] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaLinkedinIn className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#1994c8] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <AiFillInstagram className="text-black text-[20px] group-hover:text-white " />
              </div>
            </div>
          </div>
          {/* ======> Quick Info <====== */}
          <div className="lg:w-[40%] md:hidden lg:block w-full mt-[50px] lg:mt-0 md:mt-0">
            <h2 className="text-[25px] font-semibold mb-[30px] ">Quick Info</h2>

            <p className="text-[18px] mb-[10px] ">
              <Link>Technologies</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Our Team</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Portfolio</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Career</Link>
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-[100%] w-full lg:flex md:flex ">
          {/* =====> Md Device er jonno <===== */}
          <div className="lg:w-[40%] hidden lg:hidden md:block w-full mt-[50px] lg:mt-0">
            <h2 className="text-[25px] font-semibold mb-[30px] ">Quick Info</h2>
            <p className="text-[18px] mb-[10px] ">
              <Link>Technologies</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Our Team</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Portfolio</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Career</Link>
            </p>
          </div>

          {/* ======> Services <====== */}
          <div className="lg:w-[50%] w-full mt-[50px] lg:mt-0 ">
            <h2 className="text-[25px] font-semibold mb-[30px] ">Services</h2>
            <p className="text-[18px] mb-[10px] ">
              <Link>Digital/Social Marketing</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>Affordable SEO</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>e-Commerce</Link>
            </p>
            <p className="text-[18px] mb-[10px] ">
              <Link>HRM System</Link>
            </p>
          </div>
          {/* ======> Contact us <====== */}
          <div className="lg:w-[50%] w-full mt-[50px] lg:mt-0 ">
            <h2 className="text-[25px] font-semibold mb-[30px] ">
              Contact with us
            </h2>
            <p className="text-[18px] mb-[10px] ">
              <span>Mobile: </span> 01996359111
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>Email: </span> sadiq@gmail.com
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>EMS QUERY : </span> 01996359111
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>SUPPORT : </span> 01996359111
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#ffffff26] py-[20px]">
        <p className="text-center text-[14px]">
          © Microhub It Solution. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
