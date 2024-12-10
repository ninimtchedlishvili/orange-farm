import React from "react";
import { SMALLCARDDATA } from "../util/SMCardData";
import Avatar from "../Avatar/Avatar";

const SmallCard = ({
  className,
  month,
  year,
  yearBold,
  avatar,
  description,
  title,
}) => {
  return (
    <div className="flex gap-4">
      {SMALLCARDDATA.map((item, index) => (
        <div
          className={`bg-white flex flex-col p-4 shadow-md rounded-md gap-2 ${className}`}
        >
          {item.title && (
            <p
              key={index}
              className="text-[16px] text-mid_gray font-semibold w-full"
            >
              {item.title}
            </p>
          )}

          {item.month && !yearBold && (
            <p
              key={index}
              className="text-[24px] font-semibold text-dark_orange w-full mt-[20px]"
            >
              {item.month}
            </p>
          )}

          {!item.month && item.yearBold && (
            <h2
              key={index}
              className="text-[24px] font-semibold text-dark_orange w-full mt-[20px]"
            >
              {item.yearBold}
            </h2>
          )}

          {item.year && (
            <p
              key={index}
              className="text-[16px] text-orange font-semibold w-full"
            >
              {item.year}
            </p>
          )}

          {item.description && (
            <p
              key={index}
              className="text-[14px] text-dark_grey font-semibold w-full "
            >
              {item.description}
            </p>
          )}

          {item.avatar && (
            <p key={index} className=" font-semibold w-full">
              <Avatar
                img={null}
                name="Maggie Johnson"
                description="Oasis Organic Inc."
              />
            </p>
          )}

        </div>
      ))}
    </div>
  );
};

export default SmallCard;
