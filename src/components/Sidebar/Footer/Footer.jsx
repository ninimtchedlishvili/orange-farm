import React from "react";
import Avatar from "../../Avatar/Avatar";
import { NAVIGATIONFOOTER } from "../../util/navigationFooter";
import P from "../../Text/P";

const Footer = () => {
  return (
    <div>
      <Avatar img={null} name="John Doe" isAdmin={true} description={null} className="flex items-center gap-3" />
      <ul>
        {NAVIGATIONFOOTER?.map((item, index) => (
          <li key={index} className="flex items-center py-[12px] gap-3">
            {item.icon} 
            <P content={item.label} className={item?.className}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
