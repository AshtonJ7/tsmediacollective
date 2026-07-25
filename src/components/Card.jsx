import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, desc, img }) => {
  return (
    <div className="bg-white lg:min-w-3/12 lg:min-h-[280px] h-full p-10 shadow-md rounded mx-5 lg:m-0 hover:[text-orange-600] lg:hover:-translate-y-5 transition-all duration-300 cursor-pointer">
      <div style={{ color: "#C86B4A", fontSize: "36px" }}>{img}</div>

      <h1 className="primary-font lg:text-2xl text-lg font-semibold mt-3 mb-5">{title}</h1>

      {Array.isArray(desc) ? (
        <ul className="list-none lg:text-base text-sm text-zinc-700 space-y-1">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="secondary-font lg:text-base text-sm text-zinc-700">{desc}</p>
      )}
    </div>
  );
};
export default Card;
