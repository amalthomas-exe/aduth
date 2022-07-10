import CustomerDashBoard from "views/customerDashBoard";
import CustomerOrders from "views/customerOrders";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var CustomerRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: CustomerDashBoard,
    layout: "/customer"
  },
  {
    path:"/orders",
    name:"Your Orders",
    icon:"tim-icons icon-basket-simple",
    component:CustomerOrders,
    layout:"/customer"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/customer"
  }
];
export default CustomerRoutes;
