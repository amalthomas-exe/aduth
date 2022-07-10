
import CustomerDashBoard from "views/customerDashBoard";
import Dashboard from "views/Dashboard.js";
import Orders from "views/Orders";
import ShopEdit from "views/shopEdit";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var AdminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Your Items",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path:"/orders",
    name:"Orders",
    icon:"tim-icons icon-app",
    component:Orders,
    layout:"/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/shop",
    name:"Your Shop",
    icon:"tim-icons icon-basket-simple",
    component:ShopEdit,
    layout:"/admin"
  }
];
export default AdminRoutes;
