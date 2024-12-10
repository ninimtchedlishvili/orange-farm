import React from "react";
import Avatar from "../Avatar/Avatar";

const Customers = ({ title, description, navLink, className }) => (
  <div
    className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
  >
    <h1 className="text-[20px] font-semibold w-full">{title}</h1>
    <div className="flex flex-col gap-4">
      {description.map((item, index) => (
        <Avatar
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
    </a>
  </div>
);

export default Customers;
