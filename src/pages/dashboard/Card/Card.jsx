import React from "react";
import TextCard from "./TextCard";
import Chart from "./Chart";
import Customers from "./Customers";
import Growth from "./Growth";
import SmallCard from "./SmallCard";
import Chats from "../Card/Chats";
import TopStates from "../Card/TopStates";
import NewDeals from './NewDeals';

const Card = ({
  title,
  value,
  description,
  navLink,
  className,
  theme,
  increase,
  boldDate,
  year,
  notification,
  img,
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
      case "Customers":
        return (
          <Customers
            title={title}
            description={description}
            navLink={navLink}
            className={className}
          />
        );
      case "growth":
        return <Growth title={title} className={className} />;
      case "SmallCard":
        return (
          <SmallCard
            title={title}
            className={className}
            boldDate={boldDate}
            description={description}
            year={year}
          />
        );

      case "chats":
        return (
          <Chats
            title={title}
            className={className}
            notification={notification}
            description={description}
          />
        );

      case "topStates":
        return <TopStates title={title} className={className} />;

      case "newDeals":
        return <NewDeals title={title} className={className} />;

      default:
        return null;
    }
  };

  return <>{renderCard()}</>;
};

export default Card;
