import React from "react";

const Cards = ({ icon, text, count, bg }) => {
  return (
    <>
      <div
        className="border w-full bg-white rounded-md py-6 px-4 text-white"
        style={{ background: bg }}
      >
        <div className="flex justify-between items-center">
          <div className="text-3xl">
            {icon}
            <span className="text-sm">{text}</span>
          </div>
          <span className="text-4xl font-semibold">{count}</span>
        </div>
      </div>
    </>
  );
};

export default Cards;
