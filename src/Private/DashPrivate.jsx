
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashPrivate = ({children}) => {

    const {user , loading} = useAuth() ;

    if(loading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner text-[#CCCCFF]"></span>
    }

    if(user){
        return children ;
    }

    return <Navigate state={'/dashBoard/home'} to="/login"></Navigate>
};

export default DashPrivate;
