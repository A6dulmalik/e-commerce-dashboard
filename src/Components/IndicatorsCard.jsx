import React from "react";

const IndicatorsCard = ({ text, count, color }) => {
  return (
    <>
      <div className="flex items-center gap-3 bg-[#F7F7FC] text-sm px-2 py-2 rounded-lg w-fit">
        <p>{text}</p>
        <span
          style={{ background: color }}
          className="text-white rounded-md px-1 "
        >
          {count}
        </span>
      </div>
    </>
  );
};

export default IndicatorsCard;
