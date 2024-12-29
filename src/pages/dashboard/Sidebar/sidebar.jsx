import React from "react";
import Header from "../Sidebar/Header/Header";
import Navigation from "../Sidebar/Navigation/Navigation";
import Footer from "../Sidebar/Footer/Footer";

const sidebar = () => {
  return (
    <div className="bg-grey w-[280px]">
      <div className="flex flex-col justify-between h-[97vh] pb-[24px] px-[20px] bg-white rounded-lg">
        <div className="">
          <Header />
          <Navigation />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
