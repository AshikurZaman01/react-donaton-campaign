import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="text-[18px] font-semibold ">
                    <ul className="flex gap-6">
                        <li>
                        <NavLink to="/" className={({ isActive, isPending }) => 
                                   isPending ? "pending" : isActive ? "text-red-500 underline" : "" } >
                                    Home </NavLink>
                        </li>

                        <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) => 
                                   isPending ? "pending" : isActive ? "text-red-500 underline" : "" } >
                                    Donation </NavLink>
                        </li>

                        <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) => 
                                   isPending ? "pending" : isActive ? "text-red-500 underline" : "" } >
                                    Statistics </NavLink>
                        </li>
                       
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;