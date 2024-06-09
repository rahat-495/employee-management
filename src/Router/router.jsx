
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
import EmployeeList from "../Pages/DashBoard/Moderetor/EmployeeList";
import EmployeeDetails from "../Pages/DashBoard/Moderetor/EmployeeDetails";
import Progress from "../Pages/DashBoard/Moderetor/Progress";
import AdminPrivate from "../Private/AdminPrivate";
import AllEmployeeList from "../Pages/DashBoard/Admin/AllEmployeeList";
import DashPrivate from "../Private/DashPrivate";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
                path : '/contactUs' ,
                element : <ContactUs />
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
        element : <DashPrivate><DashRoot /></DashPrivate> ,
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
                element : <HrPrivate><EmployeeList /></HrPrivate> ,
            },
            {
                path : 'employee/:email' ,
                element : <HrPrivate><EmployeeDetails /></HrPrivate> ,
            },
            {
                path : 'progress' ,
                element : <HrPrivate><Progress /></HrPrivate> ,
            },
            {
                path : 'all-employee-list' ,
                element : <AdminPrivate><AllEmployeeList /></AdminPrivate> ,
            },
        ]
    }
])

export default router ;
