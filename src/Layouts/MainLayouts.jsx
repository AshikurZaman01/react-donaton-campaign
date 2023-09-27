import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Logo from "../Components/Header/Logo/Logo";

const MainLayouts = () => {
    return (
        <div className="w-[90%] mx-auto p-6 ">
            
            <div>
                <div className="flex flex-col  md:flex-row md:justify-between items-center">
                    <Logo></Logo>
                    <div className="md:my-0 my-4">
                        <Navbar></Navbar>
                    </div>
                    
                </div>
                
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayouts;