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
  },
  {
    label: "Customers",
    icon: <Customers />,
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
    label: "all reports",
    icon: <Reports />,
  },
  {
    label: "Geography",
    icon: <Geography />,
  },
  {
    label: "Conversations",
    icon: <Conversations />,
  },
  {
    label: "Deals",
    icon: <Deals />,
  },
  {
    label: "Export",
    icon: <Export />,
  },
];