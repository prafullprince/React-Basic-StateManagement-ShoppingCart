import React from "react";
import { FcShop } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { RiShoppingBag2Fill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className=" bg-slate-800 h-24 flex items-center">
      <div className=" w-[70%] mx-auto flex justify-between items-center text-white">
        <div>
          <NavLink to={"/"}>
            <FcShop className="w-[60px] h-[60px]"  />
          </NavLink>
        </div>
        <div className="flex items-center gap-16">
            <div className=" w-[24px] h-[24px]">
                <NavLink to={'/'}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to={'/cart'}>
                    <RiShoppingBag2Fill className=" w-[24px] h-[24px]" />
                </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
