// import Dashboard from "../components/Icon/Dashboard";
import Dashboard from "../Icon/Dashboard"
import Customers from "../Icon/Customers";
import Reports from "../Icon/Reports";
import Geography from "../Icon/Geography";
import Conversations from "../Icon/Conversations";
import Deals from "../Icon/Deals";
import Export from "../Icon/Export";


export const NAVIGATION = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    href: "/"
  },
  {
    label: "Customers",
    icon: <Customers />,
    href: "/customers",

    subMenu: [
      {
        label: "All Customers",
        icon: "PeopleIcon",
      },
      {
        label: "Add Customer",
        icon: "AddIcon",
      },
    ],
  },
  {
    label: "all Products",
    icon: <Reports />,
    href: "/allproducts"

  },
  {
    label: "Geography",
    icon: <Geography />,
    href: "/geography"

  },
  {
    label: "Conversations",
    icon: <Conversations />,
    href: "/conversations"

  },
  {
    label: "Deals",
    icon: <Deals />,
    href: "/deals"

  },
  {
    label: "Export",
    icon: <Export />,
    href: "/export"

  },
];