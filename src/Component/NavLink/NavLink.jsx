import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ url, title }) => {
  return (
    <div className="group relative">
      <Link
        to={url}
        className="text-[#e7e7e7f0]  hover:text-[#1994c8] transition-colors duration-300 font-semibold"
      >
        {title}
      </Link>
      <div className="absolute left-0 bottom-0 h-[2px] bg-[#1994c8] w-0 group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default NavLink;
