import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { IoOptionsOutline, IoReceiptOutline } from "react-icons/io5";
import { PiChartBarLight } from "react-icons/pi";
import { RiMessageLine } from "react-icons/ri";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const sections = [
  { icon: AiOutlineAppstore, text: "Dashboard", path: "/" },
  { icon: PiChartBarLight, text: "Statistics", path: "/statistics" },
  { icon: SlBag, text: "My Products", path: "/myproducts" },
  { icon: BsCart3, text: "Orders", path: "/orders" },
  { icon: GoCreditCard, text: "Transactions", path: "/transactions" },
  { icon: IoReceiptOutline, text: "Promotions", path: "promotions" },
  { icon: RiMessageLine, text: "Messages", path: "/messages" },
  { icon: BiMessageAltDetail, text: "Reviews", path: "/reviews" },
];

const Sidebar = () => {
  return (
    <>
      <div className="font-mulish w-52">
        {/* STORE NAME AND AVATAR */}

        {/* store avatar */}
        <div className="flex gap-4 items-center pb-6">
          <div className="h-16 w-16 rounded-md bg-[#E2E2EA]"></div>

          {/* store name */}
          <div className="">
            <p className="font-semibold text-lg">Broto Store</p>
            <span className="text-xs text-[#5541D7]">verified</span>
          </div>
        </div>

        <hr />

        {/* WEB/APP SECTIONS */}
        <div className="pt-4 pb-16">
          {sections.map((section, index) => (
            <Link
              to={section.path}
              key={index}
              className="flex items-center gap-5 py-4 px-2 my-2 hover:bg-[#5541D7] group-hover:text-white rounded-lg cursor-pointer"
            >
              <div className="text-xl text-[#9A9AB0]">
                <section.icon />
              </div>
              <span className="font-semibold text-sm text-[#11142D]">
                {section.text}
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-5 py-4 px-2 my-2 hover:bg-[#5541D7] group-hover:text-white rounded-lg mt-40 cursor-pointer">
            <IoOptionsOutline fontSize={20} color="#9A9AB0" />
            <span className="font-semibold text-sm text-[#11142D]">
              Settings
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
