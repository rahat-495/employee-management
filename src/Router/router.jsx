
import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Layout/MainRoot";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
    }
])

export default router ;
