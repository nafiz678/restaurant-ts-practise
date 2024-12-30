import MainLayout from "@/MainLayout/MainLayout";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
 },
]);
export default router