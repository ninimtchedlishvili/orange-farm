import React from "react";
import P from "../Text/P";
import Pill from "../Pill/pill";
import Fallbackimage from "./Fallbackimage";

const Avatar = ({ img, name, isAdmin, className, description, nameClass, descriptionClass }) => {
  return (
    <div className={className}>
      <Fallbackimage img={img} name={name} />
      <div className="flex flex-col">
        <P 
          content={name}
          className={nameClass || "text-[12px]"}/>
        {isAdmin && <Pill content="Admin" />}
        {description && <P content={description}  className={descriptionClass || "text-[12px]"} />}
      </div>
    </div>
  );
};

export default Avatar;
