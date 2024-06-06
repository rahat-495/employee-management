
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminPrivate = ({children}) => {

    const [role , isLoading] = useRole() ;
    const {user , loading} = useAuth() ;
    const location = useLocation() ;

    if(loading || isLoading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    if(user && role?.role === 'admin'){
        return children ;
    }

    return <Navigate state={location.pathname} to="/"></Navigate>
};

export default AdminPrivate;
