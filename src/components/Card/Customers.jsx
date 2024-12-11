import React from "react";
import Avatar from "../Avatar/Avatar";

const Customers = ({ title, description, navLink, className }) => (
  <div
    className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
  >
    <h1 className="text-[20px] font-semibold w-full">{title}</h1>
    <div className="flex flex-col gap-4 mt-2">
      {description.map((item, index) => (
        <Avatar
          className="flex items-center gap-3"
          name={item.name}
          img={item.img}
          description={item.description}
          key={index}
        />
      ))}
    </div>
    <a
      href=""
      className="text-dark_orange text-[14px] mt-16 flex items-center gap-2 w-full"
    >
      {navLink}
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.916664 3.11162H9.08333M9.08333 3.11162L6.75 5.44496M9.08333 3.11162L6.75 0.77829"
          stroke="#734A00"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
);

export default Customers;
