
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";

const DashRoot = () => {
    return (
        <div className="">
            
            <div className="bg-[#CCCCFF] sticky top-0 z-10">
                <Nav/>
            </div>

            <div className="flex-1 min-h-[60vh]">
                <Outlet />
            </div>
            
            <div className="">
                <Footer />
            </div>

        </div>
    );
};

export default DashRoot;
