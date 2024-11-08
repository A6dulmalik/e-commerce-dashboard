import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className=" border border-[#5541D7] text-xs rounded px-4 py-1 bg-white">
        {text}
      </button>
    </>
  );
};

export default Button;
