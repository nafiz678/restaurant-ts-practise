import MainLayout from "@/MainLayout/MainLayout";
import Home from "@/pages/Home/Home";
import Menu from "@/pages/menu/Menu";
import Order from "@/pages/order/Order";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/ourMenu",
            element: <Menu></Menu>
        },
        {
            path: "/order",
            element: <Order></Order>
        },
    ]
 },
]);
export default router