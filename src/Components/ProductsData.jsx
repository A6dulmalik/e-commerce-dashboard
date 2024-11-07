import React from "react";
import ProductsChart from "./ProductsChart";

const productData = [
  { label: "Product Viewed", count: 500, percent: "10%" },
  { label: "Success Transactions", count: 5, percent: "10%" },
  { label: "Conversion Rate", count: 25, percent: "12%" },
  { label: "Sold Product", count: 10, percent: "20%" },
];

const ProductsData = () => {
  return (
    <>
      <div className="relative bg-white rounded-md px-4 py-4 mt-6 font-mullish">
        {/* Heading */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold">Products Data</h2>
          <span className="text-[#5541D7] text-sm font-semibold">Help</span>
        </div>

        {/* Chart and Chart Data */}
        <div className="flex border-t-2">
          {/* Chart Data */}
          <div className="">
            <div className="w-40 mt-2">
              {productData.map((datum, index) => (
                <div key={index} className="py-2">
                  <div className="text-xs font-medium">{datum.label}</div>
                  <div className="flex gap-6 items-baseline">
                    <p className="text-2xl font-bold">{datum.count}</p>
                    <p className="text-xs text-[#92929D]">{datum.percent}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TopAds Toggle Button */}
            <div className="absolute right-4 top-16 flex gap-3">
              <span className="text-sm font-semibold">TopAds Change</span>
              <div>
                <input type="checkbox" id="check" className=" peer " />
                <label
                  htmlFor="check"
                  className="relative px-4 rounded-full bg-[#E2E2EA] peer-checked:bg-[#20096d] cursor-pointer  before:absolute before:h-[15px] before:w-[15px] before:left-0.5 before:top-[3px] before:rounded-full before:bg-white before:translate-x-0 before:peer-checked:translate-x-[20px] before:duration-[0.6s]"
                ></label>
              </div>
            </div>
          </div>

          {/*Chart  */}
          <ProductsChart />
        </div>
      </div>
    </>
  );
};

export default ProductsData;
