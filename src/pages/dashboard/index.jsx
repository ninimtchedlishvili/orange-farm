import React from "react";
import Card from "../dashboard/Card/Card"
import { CUSTOMERSDATA } from "../../components/util/customersData";
import { CARDDATA } from "../../components/util/cardData";


const index = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full gap-4 ">
        {CARDDATA.map((data, index) => (
          <Card
            className={data.className}
            key={index}
            title={data.title}
            value={data.value}
            description={data.description}
            navLink={data.navLink}
            theme={data.theme}
            increase={data.increase}
          />
        ))}
      </div>

      <div className="flex w-full gap-4">
        <Card
          className="w-1/2"
          title="Customers"
          description={CUSTOMERSDATA}
          navLink="All customers"
          theme="Customers"
        />
        <div className="flex flex-col gap-4 w-1/2">
          <Card className="w-full" title="Growth" theme="growth" />

          <Card className="w-1/3" theme="SmallCard" />
        </div>
      </div>

      <div className="flex gap-4">
        <Card
          className="w-1/4"
          title="Chats"
          notification="2 unread messages"
          description={CUSTOMERSDATA}
          theme="chats"
        />

        <Card className="w-1/3" title="Top states" theme="topStates" />

        <Card className="w-1/2" title="New deals" theme="newDeals" />
      </div>
    </div>
  );
};

export default index;
