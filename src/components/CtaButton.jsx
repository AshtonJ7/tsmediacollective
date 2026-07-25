import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-[#1F3D3A] hover:bg-[#1B4B44] hover:shadow hover:shadow-[#C86B4A] text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
