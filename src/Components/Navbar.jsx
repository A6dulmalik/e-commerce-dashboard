import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { openSidebar, toggleSidebar } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 lg:gap-14 sm:items-center justify-center  py-2 w-full px-2 sm:px-0">
        {/* LOGO */}
        <div className="flex gap-2 items-center font-mullish">
          <div className="flex items-center justify-center  bg-[#766EDA] text-white rounded-[100%] px-2 py-0 sm:px-3 sm:py-1">
            #
          </div>
          <span className="font-semibold text-lg sm:text-2xl">Snack</span>
        </div>

        {/*SEARCH BAR, BELL ICON AND NAME */}
        <div className="flex items-center sm:gap-8 gap-3">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md w-full xl:w-[55rem] lg:w-[35rem] md:w-[20rem] px-2">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none w-full"
            />
            <MdSearch color="gray" />
          </div>

          {/* BELL ICON AND NAME */}
          <div className={`sm:flex items-center sm:gap-4 `}>
            {/* Bell Icon */}
            <VscBell className="relative -bottom-4 sm:bottom-0 left-4 sm:left-0 text-2xl sm:text-3xl text-gray-400" />

            {/* INITIALS, NAME, EMAIL AND DROPDOWN */}
            <div className="relative -top-16 sm:top-0 -right-10 sm:right-0 flex items-center gap-2">
              {/* Initials */}
              <div className="bg-[#DBD7F4] text-[#5541D7] text-center font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                SB
              </div>

              {/* Name and Email */}
              <div
                className={`sm:block ${
                  isOpen
                    ? "absolute -top-10 sm:top-0 right-0.5 sm:right-0 transition-all  duration-300 border sm:border-none rounded-sm border-gray-100 backdrop-blur-sm sm:backdrop-blur-none opacity-0"
                    : "absolute top-10 sm:top-0 right-0.5 sm:right-0 transition-all ease-in-out duration-300 border sm:border-none rounded-sm border-gray-100 backdrop-blur-sm sm:backdrop-blur-none p-1 h-32"
                }`}
              >
                <p className="font-medium sm:text-">Shoo Bro Thoo</p>
                <span className="text-xs">shoobro@email.com</span>
              </div>
              {/* <select className="outline-none"></select> */}
              <button>
                <IoCaretDown
                  className="sm:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                />
                <IoCaretDown className="hidden sm:block" />
              </button>
            </div>
          </div>

          {/* Hamburger menu */}
          <button onClick={toggleSidebar} className="sm:hidden">
            {openSidebar ? <FaBars /> : <FaTimes />}
          </button>
          <button className="z-50 -translate-y-1 -translate-x-4">
            {/* {!openSidebar && <FaTimes />} */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
