import React from "react";
import P from "../Text/P";
import Fallbackimage from "./Fallbackimage";

const Avatar = ({ img, name, isAdmin, description }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Fallbackimage img={img} name={name} />
        <div>
          <P content={name} />
          <div className="bg-orange inline-block px-[6px] rounded-full">
            {isAdmin && <P content={"Admin"} />}
            <P content={description} className="text-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
