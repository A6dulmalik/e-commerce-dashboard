import React from "react";
import Button from "../Components/Button";
import { FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const button = ["View Etalage", "Set at Once"];
const MyProducts = () => {
  return (
    <>
      <div className="font-mullish bg-[#f0efef] px-4 pt-4 w-full">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-bold">Product List</h1>
          <div className="flex items-center gap-3">
            {button.map((btn, index) => (
              <Button key={index} text={btn} />
            ))}
            <button className="flex items-center gap-3 bg-[#5541D7] text-xs text-white rounded px-4 py-1 ">
              Add Products
              <FiPlus fontSize={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
