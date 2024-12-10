import React from "react";
import GrowthChart from "../Icon/GrowthChart";

const Growth = ({ title, className }) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold w-full">{title}</h1>
      <GrowthChart />
    
    </div>
  );
};

export default Growth;
