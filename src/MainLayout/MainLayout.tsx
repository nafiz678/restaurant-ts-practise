import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;