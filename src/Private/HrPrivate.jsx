
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const HrPrivate = ({children}) => {

    const [role , isLoading] = useRole() ;
    const {user , loading} = useAuth() ;

    if(!user || loading || isLoading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner text-[#CCCCFF]"></span>
    }

    if(user && role?.role === 'hr'){
        return children ;
    }

    if(!user || role?.role !== 'hr'){
        return <Navigate to="/"></Navigate>
    }
};

export default HrPrivate;
