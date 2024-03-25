import React, { useState } from "react";
import {
  CartIcon,
  CrossIcon,
  DropDownIcon,
  MenuIcon,
  ProfileIcon,
} from "@/icons";
import { Link } from "react-router-dom";
import { HeaderData } from "@/constant";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative">
      {/* Main header content */}
      <div className="mx-auto px-4 sm:px-6 py-4 sm:py-2 sm:pt-4">
        <div className="flex items-center justify-between w-full">
          {/* Menu Icon */}
          <div className="sm:hidden">
            <span onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </span>
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              {" "}
              ShopNow
            </Link>
          </div>
          {/* Search Box */}
          <div className="hidden sm:flex sm:w-[54%] lg:w-[40%] mx-4">
            <input
              type="text"
              className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Search products..."
            />
          </div>
          {/* Cart and Profile Icons */}
          <div className="flex items-center">
            <div className="relative mr-6 cursor-pointer">
              <span>
                <CartIcon />
              </span>
              <span className="absolute -top-1 -right-0.5 px-[4.5px] text-xs text-white bg-red-500 rounded-full">
                2
              </span>
            </div>
            <div>
              <Link to={"/profile"}>   <span className="cursor-pointer">
                <ProfileIcon />
              </span></Link>
            
            </div>
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:block pt-4">
          <div className="flex justify-evenly">
            {HeaderData.menu.map((item, index) => (
              <span key={index} className="flex gap-2 items-center">
                <Link to={item.path}>{item.title}</Link>
                <span>
                  <DropDownIcon className="hover:rotate-180 transition-transform duration-500 ease-in-out" />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <div
        className={`${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        } absolute left-0 top-0 bg-white shadow-lg sm:hidden py-2 z-50 transition-transform duration-500 ease-in-out`}
      >
        {/* Close Button */}
        <div>
          <span
            onClick={() => setIsOpen(false)}
            className="relative left-4 top-2"
          >
            <CrossIcon />
          </span>
        </div>
        {/* Sidebar Content */}
        <div className="flex-col items-center justify-center w-[180px] py-2">
          {HeaderData.menu.map((item, index) => (
            <span
              key={index}
              className="text-center py-2 flex gap-2 items-center justify-center"
            >
              <Link to={item.path}>{item.title}</Link>
              {/* <span>
                <DropDownIcon className="hover:rotate-180 transition-transform duration-500 ease-in-out" />
              </span> */}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
