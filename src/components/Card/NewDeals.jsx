import React from "react";
import PlusDeals from "../Icon/PlusDeals";

const DEALS = [
  { name: "Fruit2Go" },
  { name: "Marshall's MKT" },
  { name: "CCNT" },
  { name: "Joana Mini-market" },
  { name: "Little Brazil Vegan" },
  { name: "Little Brazil Vegan" },
  { name: "Organic Place" },
];

const NewDeals = ({ className, title }) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col justify-start gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold w-full">{title}</h1>
      <div className="flex flex-wrap gap-[8px]">
        {DEALS.map((item, index) => (
          <div key={index} className="flex items-center gap-[8px] text-[14px] p-[12px]  bg-light_orange rounded-lg">
            <PlusDeals />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDeals;
