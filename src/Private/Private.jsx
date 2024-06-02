
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({children}) => {

    const {user , loading} = useAuth() ;
    const location = useLocation() ;

    if(loading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    if(user){
        return children ;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;
