import React from "react";
import { NAVIGATION } from "../../../../components/util/navigation";
import P from "../../../../pages/dashboard/Text/P";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          {NAVIGATION?.map((item, index) => (
            <NavLink key={index} to={item.href}>
              <li className="flex items-center py-[12px] gap-3 capitalize">
                {item.icon} <P content={item.label} />
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
