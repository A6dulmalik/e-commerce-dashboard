import React from "react";
import Button from "../Components/Button";
import { FiPlus } from "react-icons/fi";

const button = ["View Etalage", "Set at Once"];

const itemsCategory = [
  { text: "All Items", number: 100 },
  { text: "For Sale", number: 70 },
  { text: "Not For Sale", number: 10 },
  { text: "Drafts", number: 20 },
];

const filters = [
  { category: "Filter", option: "Filter" },
  { category: "Category", option: "Filter" },
  { category: "Newest", option: "Filter" },
  { category: "30 per page", option: "Page" },
];

const ItemFilters = [
  { category: "Statistics", option: "Filter" },
  { category: "Prices", option: "Filter" },
  { category: "Stocks", option: "Filter" },
  { category: "Status", option: "Page" },
];

const MyProducts = () => {
  return (
    <>
      <div className="font-mullish bg-[#f5f4f4] px-4 pt-4 w-full">
        {/* Heading and Buttons */}
        <div className="flex justify-between items-center ">
          {/* Heading */}
          <h1 className="text-2xl font-bold">Product List</h1>

          {/* Buttons */}
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

        {/* All Items, Sale and Drafts*/}
        <div className="mt-8 flex items-center gap-4 font-semibold text-[#92929D] text-sm">
          {itemsCategory.map((category, index) => (
            <p key={index}>
              {category.text} <span>({category.number})</span>
            </p>
          ))}
        </div>

        {/* Search Bar and Filters */}
        <div className="mt-4 flex items-center gap-6 bg-white px-2 py-2 w-full">
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="border border-[#5541D7] w-2/5 placeholder:text-[#9A9AB0] outline-none px-2 py-1 text-sm"
          />

          {/* filters */}
          <div className="flex gap-8">
            {filters.map((filter, index) => (
              <select
                key={index}
                name={filter.category}
                id=""
                className="outline-none w-32 text-[#11142D] font-semibold"
              >
                <option value="cat" className="">
                  {filter.category}
                </option>
              </select>
            ))}
          </div>
        </div>

        {/* Items Stats/Info */}
        <div className="">
          {/* Items, stats, prices, stocks and status */}
          <div className="mt-4 flex items-center justify-between bg-white px-2 py-2 w-full">
            <div className="flex gap-4">
              <input
                type="checkbox"
                id="search"
                placeholder="Search"
                className="border border-[#5541D7] placeholder:text-[#9A9AB0] outline-none px-2 py-1 text-sm"
              />{" "}
              Items
            </div>
            {/* filters */}
            <div className="flex gap-8">
              {ItemFilters.map((ItemFilter, index) => (
                <select
                  key={index}
                  name={ItemFilter.category}
                  id=""
                  className="outline-none w-44 text-[#494a52] font-semibold text-sm"
                >
                  <option value="cat" className="">
                    {ItemFilter.category}
                  </option>
                </select>
              ))}
            </div>
          </div>
        </div>

        <table className=" bg-white w-full">
          {/* Table Heading */}
          <thead className="border border-red-700 w-full">
            <td className="pl-1 flex gap-5 border border-green-700">
              {" "}
              <input
                type="checkbox"
                id="search"
                placeholder="Search"
                className="border border-[#5541D7] placeholder:text-[#9A9AB0] outline-none px-2 py-1 text-sm"
              />
              <span>Items</span>
            </td>

            <td className="border border-green-900 text-right">
              {ItemFilters.map((ItemFilter, index) => (
                <select
                  key={index}
                  name={ItemFilter.category}
                  id=""
                  className="outline-none   text-[#494a52] border border-yellow-600 w-44 ml-9 font-semibold text-sm"
                >
                  <option value="cat" className="">
                    {ItemFilter.category}
                  </option>
                </select>
              ))}
            </td>
          </thead>

          {/* Table rows */}
          <tr className="border  w-full py-8">
            <td className="pl-1 flex items-start gap-5 border border-green-700">
              {" "}
              <input
                type="checkbox"
                id="search"
                placeholder="Search"
                className="border border-[#5541D7] placeholder:text-[#9A9AB0] outline-none px-2 py-1 text-sm"
              />
              <span className="px-5 py-5 bg-[#E2E2EA] rounded"></span>
            </td>

            <td className="border border-green-900 text-right">
              {ItemFilters.map((ItemFilter, index) => (
                <select
                  key={index}
                  name={ItemFilter.category}
                  id=""
                  className="outline-none   text-[#494a52] border border-yellow-600 w-44 ml-9 font-semibold text-sm"
                >
                  <option value="cat" className="">
                    {ItemFilter.category}
                  </option>
                </select>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default MyProducts;
