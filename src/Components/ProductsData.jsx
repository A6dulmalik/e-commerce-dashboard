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
      <div className="relative bg-white rounded-md px-4 py-4 mt-6 font-mullish h-[400px]">
        {/* Heading */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold">Products Data</h2>
          <span className="text-[#5541D7] text-sm font-semibold">Help</span>
        </div>

        {/* Chart and Chart Data */}
        <div className="relative border-t-2">
          {/* Chart Data */}
          <div className="absolute flex justify-between w-full mt-3">
            <div className="w-40 mt-">
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
            <div className="flex">
              <span className="text-sm font-semibold">TopAds Change</span>
              <div>
                <input type="checkbox" id="check" className="peer hidden" />
                <label
                  htmlFor="check"
                  className="relative inline-block w-[40px] h-[20px] rounded-full bg-[#E2E2EA] peer-checked:bg-[#20096d] cursor-pointer
               before:absolute before:content-[''] before:h-[15px] before:w-[15px] before:left-0.5 before:top-[2.5px] 
               before:rounded-full before:bg-white before:translate-x-0 before:peer-checked:translate-x-[20px] before:transition-transform before:duration-300"
                ></label>
              </div>
            </div>
          </div>

          {/*Chart  */}
          <div className="ml-48 top-0 right-0 border">
            <ProductsChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsData;
