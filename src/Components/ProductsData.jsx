import React from "react";

const productData = [
  { label: "Product Viewed", count: 500, percent: "10%" },
  { label: "Success Transactions", count: 5, percent: "10%" },
  { label: "Conversion Rate", count: 25, percent: "12%" },
  { label: "Sold Product", count: 10, percent: "20%" },
];

const ProductsData = () => {
  return (
    <>
      <div className="bg-white rounded-md px-4 py-6 mt-6 font-mullish">
        {/* Heading */}
        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Products Data</h2>
          <span className="text-[#5541D7] font-semibold">Help</span>
        </div>

        {/* Chart and Chart Data */}
        <div className="border-t-2">
          {/* Chart Data */}
          <div className="w-40 mt-2">
            {productData.map((datum, index) => (
              <div key={index} className="py-3">
                <div className="text-xs font-medium">{datum.label}</div>
                <div className="flex gap-6 items-baseline">
                  <p className="text-2xl font-bold">{datum.count}</p>
                  <p className="text-xs text-[#92929D]">{datum.percent}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default ProductsData;
