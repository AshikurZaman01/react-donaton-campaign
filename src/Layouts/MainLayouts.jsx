import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Logo from "../Components/Header/Logo/Logo";
import Banner from "../Components/Header/Banner/Banner";

const MainLayouts = () => {
    return (
        <div className="w-[90%] mx-auto p-6 ">
            
            <div>
                <div className="flex justify-between items-center">
                    <Logo></Logo>
                    <Navbar></Navbar>
                </div>
                
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayouts;