import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    
    <div className="side-bar-main w-[15%] h-screen flex flex-col items-center align-middle justify-center text-2xl ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-white w-[15px] h-[15px] rounded mb-3"
            : "bg-[#868484] w-[15px] h-[15px] rounded mb-3 "
        }
      >
        {" "}
        <p className="mb-3 font-medium cursor-pointer navigate-icone w-[15px] h-[15px] rounded"></p>
        </NavLink>
    
      <p className="text-[#868484]">|</p>  
      <NavLink to="/PersonalInformation" className={({ isActive }) =>
          isActive
            ? "bg-white text-white w-[15px] h-[15px] rounded mb-3 mt-3"
            : "bg-[#868484] w-[15px] h-[15px] rounded mb-3 mt-3"
        }
      >
        {" "}
        <p className="mb-3 font-medium cursor-pointer navigate-icone w-[15px] h-[15px] rounded"></p>
      </NavLink>
      <p className="text-[#868484]">|</p>
      <NavLink to="/DeliveryInfo" className={({ isActive }) =>
          isActive
            ? "bg-white text-white w-[15px] h-[15px] rounded mb-3 mt-3"
            : "bg-[#868484] w-[15px] h-[15px] rounded mb-3 mt-3"
        }
      >
        {" "}
        <p className="mb-3 font-medium cursor-pointer navigate-icone w-[15px] h-[15px] rounded"></p></NavLink>
      <p className="text-[#868484]">|</p>
      <NavLink to="/BuyInfo" className={({ isActive }) =>
          isActive
            ? "bg-white text-white w-[15px] h-[15px] rounded mb-3 mt-3"
            : "bg-[#868484] w-[15px] h-[15px] rounded mb-3 mt-3"
        }
      >
        {" "}
        <p className="mb-3 font-medium cursor-pointer navigate-icone w-[15px] h-[15px] rounded"></p>
      </NavLink>
    </div>

  );
};

export default Sidebar;
