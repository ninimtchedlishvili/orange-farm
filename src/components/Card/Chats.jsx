import React from "react";
import Avatar from "../Avatar/Avatar";

const AvatarCard = ({
  title,
  description,
  navLink,
  className,
  notification,
}) => (
  <div
    className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
  >
    <h1 className="text-[20px] font-semibold w-full">{title}</h1>
    <p>{notification}</p>
    <div className="flex gap-4">
      {description.map((item, index) => (
        <Avatar 
          key={index} 
          img={item.img}
        />
      ))}
    </div>
  </div>
);

export default AvatarCard;
