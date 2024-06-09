
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";

const DashRoot = () => {
    return (
        <div className="">
            
            <div className="bg-[#bfbfff] sticky top-0 z-10">
                <Nav/>
            </div>

            {/* <div className="flex min-h-[80vh] mx-auto overflow-x-hidden"> */}
{/*                 
                <div className="w-48 bg-[#BFBFFF] fixed min-h-screen">
                    <Navbar />
                </div> */}

                <div className="flex-1 min-h-[60vh]">
                    <Outlet />
                </div>

            {/* </div> */}
            
            <div className="">
                <Footer />
            </div>

        </div>
    );
};

export default DashRoot;
