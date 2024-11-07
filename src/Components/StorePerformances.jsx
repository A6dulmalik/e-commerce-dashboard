import React from "react";
import { RxCaretDown } from "react-icons/rx";
import IndicatorsCard from "./IndicatorsCard";

const indicators = [
  { text: "Message Respond", count: "10/10", color: "#5541D7" },
  { text: "Message Replied", count: "10/15", color: "#2D96EE" },
  { text: "Regular Order", count: "10/15", color: "#42BDA1" },
  { text: "Store Verified", count: "20/20", color: "#F2870D" },
  { text: "Sore Pinalty", count: "30/30", color: "#F04461" },
];

const StorePerformances = () => {
  return (
    <>
      <div className="bg-white rounded-md px-4 py-4 mt-6 font-mullish">
        {/* Heading */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold">Store Performances</h2>
          <span className="text-[#5541D7] text-sm font-semibold">
            View Detail
          </span>
        </div>

        {/* Weekly Progressbar */}
        <div>
          <div className="flex items-center gap-2 mb-3  ">
            <span className="font-bold text-sm">This Week</span>
            <RxCaretDown fontSize={24} />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-4">
            <progress
              id="file"
              value="85"
              max="100"
              fill={"red"}
              style={{
                color: "white",
                width: "100%",
                height: "13px",
                borderColor: "red",
              }}
              className="bg-white w-full"
            >
              85%
            </progress>
            <span className="text-sm text-[]">85%</span>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-4">
          <p className="font-bold text-sm mb-3">Indicators</p>
          <div className="grid grid-cols-4 gap-4 w-11/12">
            {indicators.map((indicator, index) => (
              <IndicatorsCard
                key={index}
                text={indicator.text}
                count={indicator.count}
                color={indicator.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePerformances;
