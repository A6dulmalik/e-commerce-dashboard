import React from "react";
import { BsCart3 } from "react-icons/bs";
import { RiEBike2Line, RiMessageLine } from "react-icons/ri";
import Cards from "../Components/Cards";
import { BiMessageAltDetail } from "react-icons/bi";
import ProductsData from "../Components/ProductsData";

const cardData = [
  { icon: <BsCart3 />, text: "New order", count: 5, bg: "#55AAF1" },
  { icon: <RiEBike2Line />, text: "Ready to Deliver", count: 2, bg: "#F5A851" },
  { icon: <RiMessageLine />, text: "New Message", count: 3, bg: "#77CFBB" },
  { icon: <BiMessageAltDetail />, text: "Reviews", count: 4, bg: "#766EDA" },
];

const Dashboard = () => {
  return (
    <>
      <div className="w-full bg-[#E1E1E1] py-10 px-5">
        {/* Cards Section */}
        <div className=" grid grid-cols-4 gap-4">
          {cardData.map((datum, index) => (
            <Cards
              icon={datum.icon}
              text={datum.text}
              count={datum.count}
              bg={datum.bg}
            />
          ))}
        </div>

        {/* Products Data */}
        <ProductsData />
      </div>
    </>
  );
};

export default Dashboard;
