import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavList = ({ url, title, children_true, children }) => {
  let location = useLocation();

  return (
    <Link
      className={` ${
        location?.pathname == url
          ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
          : ""
      } flex gap-[15px] items-center py-[8px] px-[8px]  my-[8px] text-[#202C4B] 
  hover:bg-[#f2f5ff] hover:text-[#3D5EE1] hover:border-l-[2px] hover:border-[#3D5EE1] 
  rounded-l-[4px] transition-all duration-300`}
      to={url}
    >
      {children}
      <h2 className="text-[14px]"> {title}</h2>
    </Link>
  );
};

export default NavList;
