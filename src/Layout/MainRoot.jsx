
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";

const MainRoot = () => {
    return (
        <div className="">
            
            <div className="">
                <Nav />
            </div>

            <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
                <Outlet />
            </div>
            
            <div className="">
                <Footer />
            </div>

        </div>
    );
};

export default MainRoot;
