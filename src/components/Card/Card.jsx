import React from "react";
import TextCard from "./TextCard";
import Chart from "./Chart";
import AvatarCard from "./AvatarCard";


const Card = ({
  title,
  value,
  description,
  navLink,
  className,
  theme,
  increase,
}) => {
  const renderCard = () => {
    switch (theme) {
      case "text":
        return (
          <TextCard
            className={className}
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            increase={increase}
          />
        );
      case "chart":
        return (
          <Chart
            title={title}
            value={value}
            description={description}
            navLink={navLink}
            className={className}
          />
        );
      case "avatarCard":
        return (
          <AvatarCard
            title={title}
            description={description}
            navLink={navLink}
            className={className}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderCard()}</>;
};

export default Card;
