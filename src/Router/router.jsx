
import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Layout/MainRoot";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashRoot from "../Layout/DashRoot";
import Private from "../Private/Private";
import WorkSheet from "../Pages/DashBoard/Employee/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/DashBoard/Employee/Payment/PaymentHistory";
import HrPrivate from "../Private/HrPrivate";

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <MainRoot /> ,
        children : [
            {
                path : '/' ,
                element : <Home />
            },
            {
                path : '/register' ,
                element : <Register />
            },
            {
                path : '/login' ,
                element : <Login />
            },
        ]
    },
    {
        path : '/dashBoard' ,
        element : <Private><DashRoot /></Private> ,
        children : [
            {
                path : 'workSheet' ,
                element : <Private><WorkSheet /></Private> ,
            },
            {
                path : 'paymentHistory' ,
                element : <Private><PaymentHistory /></Private> ,
            },
            {
                path : 'employeeList' ,
                element : <HrPrivate><PaymentHistory /></HrPrivate> ,
            },
        ]
    }
])

export default router ;
