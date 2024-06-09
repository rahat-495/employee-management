
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AdminPrivate = ({children}) => {

    const {user , loading} = useAuth() ;
    const location = useLocation() ;
    const axiosSecure = useAxiosSecure() ;

    const { data : role , isLoading} = useQuery({
        queryKey : ['userRole' , user] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/userRole/${user?.email}`) ;
            return data ;
        }
    })
    
    if(loading || isLoading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    if(user && role?.role === 'admin'){
        return children ;
    }

    if(!user || role?.role !== 'admin'){
        return <Navigate state={location.pathname} to="/"></Navigate>
    }
};

export default AdminPrivate;
