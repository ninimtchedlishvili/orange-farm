import React from "react";
import P from "../Text/P";
import Pill from '../Pill/pill'
import Fallbackimage from "./Fallbackimage";

const Avatar = ({ img, name, isAdmin, description }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Fallbackimage img={img} name={name} />
        <div>
          <div className="flex flex-col">
          <P content={name} />
            {isAdmin && <Pill content="Admin" />}
            <P content={description} className="text-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
