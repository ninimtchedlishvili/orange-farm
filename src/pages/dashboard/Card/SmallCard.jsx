import React from "react";
import { SMALLCARDDATA } from "../../../components/util/SMCardData";
import Avatar from "../Avatar/Avatar";
// import Growth from "../../../components/Icon/GrowthChart";

const SmallCard = ({
  className,
  month,
  year,
  yearBold,
  avatar,
  description,
  title
}) => {
  return (
    <div className="flex gap-4">
      {SMALLCARDDATA.map((item, index) => (
        <div
          key={index}
          className={`bg-white flex flex-col p-4 shadow-md rounded-md justify-between ${className}`}
        >
          {item.title && (
            <p className="text-[16px] my-0 text-mid_gray font-semibold w-full">
              {item.title}
            </p>
          )}

          <div>


          {item.month && !yearBold && (
            <p className="text-[24px] font-semibold text-dark_orange w-full">
              {item.month}
            </p>
          )}

          {!item.month && item.yearBold && (
            <p className="text-[24px] font-semibold text-dark_orange w-full">
              {item.yearBold}
            </p>
          )}

          {item.year && (
            <p className="text-[16px] text-orange mt-0 font-semibold w-full">
              {item.year}
            </p>
          )}

          {item.description && (
            <p className="text-[14px] text-dark_grey font-semibold w-full ">
              {item.description}
            </p>
          )}
          </div>

          {item.avatar && (
            <p className=" font-semibold w-full">
              <Avatar
                className="flex flex-col items-start gap-2 mt-4"
                img="https://randomuser.me/api/portraits/women/7.jpg"
                name="Maggie Johnson"
                nameClass="font-medium text-[14px] text-darkGrey"
                description="Oasis Organic Inc."
                descriptionClass="text-[12px] text-dark_grey"
              />
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
