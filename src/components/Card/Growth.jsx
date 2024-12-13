import React from "react";
import GrowthChart from "../Icon/GrowthChart";
import { useState } from "react";

const Growth = ({ title, className }) => {
  
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <div className="flex justify-between">
        <h1 className="text-[20px] font-semibold w-full">{title}</h1>
        <select>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="mt-2">
        <GrowthChart />
      </div>
    </div>
  );
};

export default Growth;
