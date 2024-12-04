import React from "react";

const pill = ({ content }) => {
  return (
    <div>
      <span className="bg-orange text-black rounded-full px-1 py-[1px] w-fit text-xs">
        {content}{" "}
      </span>
    </div>
  );
};

export default pill;
