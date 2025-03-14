import React, { useState } from "react";
import user from "../../../public/najmul.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Outlet } from "react-router";
import close_icon from "../../../public/svg/close_icon.svg";
import seting_icon from "../../../public/svg/seting.svg";
import edu_logo from "../../../public/svg/edulogo.svg";
import logo_out from "../../../public/svg/logout.svg";
import full_screen from "../../../public/svg/fullscreen.svg";
import AdminLeftNavber from "../../Pages/Navber/AdminLeftNavber/AdminLeftNavber";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="flex max-w-[1400px] mx-auto bg-[#fff] min-h-screen relative">
      {/* ====> Sidebar (Fixed for Large Devices, Toggle for Mobile) <==== */}
      <div
        className={`lg:block  ${
          isSidebarOpen ? "block" : "hidden"
        } fixed z-50 w-[270px] min-h-screen bg-white shadow-lg`}
      >
        <div className="flex items-end justify-end lg:hidden p-[20px]">
          <button onClick={() => setIsSidebarOpen(false)}>
            <img src={close_icon} alt="" />
          </button>
        </div>
        {/* ====> Logo div (Fixed) <==== */}
        <div className="flex items-center pl-[20px]  mt-[20px] pb-4 ">
          <img
            className="transition-all duration-300 w-[40px] h-[40px]"
            src={edu_logo}
            alt="website logo"
          />
          <h2 className=" text-[24px]">
            <span className="font-bold text-[#3d5ee1]">Edu</span>Sadiq
          </h2>
        </div>
        {/* ====> Scrollable Navbar <==== */}
        <nav
          onClick={() => setIsSidebarOpen(false)}
          className="mt-[10px] px-[10px] h-[calc(100vh-140px)] overflow-y-auto adminScrollbar"
        >
          <AdminLeftNavber />
        </nav>
        <div className="flex items-center justify-center gap-[20px] w-full pt-[15px] border-t  h-full">
          <button className="text-[16px] text-[#515B73] font-semibold">
            Log Out
          </button>
          <img src={logo_out} alt="" />
        </div>
      </div>

      {/* ====> Right Content <==== */}
      <div className="transition-all duration-300 w-full lg:pl-[270px] relative">
        {/* ====> Top Navbar (Fixed) <==== */}
        <div className="fixed top-0 left-0  right-0 lg:pr-[15px] z-40 w-full bg-white shadow-sm">
          <div className="flex items-center justify-between py-[8px] px-[10px] w-full max-w-[1400px] mx-auto">
            {/* Sidebar Toggle Button (Mobile Only) */}
            <button
              className="lg:hidden block"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu className="text-2xl" />
            </button>

            {/* Title */}
            <h2 className="font-semibold lg:pl-[270px] lg:block hidden text-[24px]">
              Welcome to Admin
            </h2>

            {/* Right Side */}
            <div className="flex items-center gap-5 justify-between">
              <img src={seting_icon} alt="Settings Icon" />
              <IoNotificationsOutline className="text-[18px] cursor-pointer" />
              <button className="lg:block hidden" onClick={toggleFullScreen}>
                <img src={full_screen} alt="" />
              </button>
              <div className="flex items-center gap-[6px]">
                <h2 className="font-medium whitespace-nowrap lg:block hidden">
                  Md: Nujmul Islam
                </h2>

                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={user}
                    alt="User Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====> Main Content <==== */}
        <div className="container mx-auto lg:p-[20px] p-[10px] overflow-y-auto mt-[50px] lg:mt-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
