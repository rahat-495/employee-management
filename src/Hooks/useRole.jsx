import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {

    const {user} = useAuth() ;
    const axiosSecure = useAxiosSecure() ;

    const { data : role , isLoading , refetch} = useQuery({
        queryKey : ['userRole'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/user/${user?.email}`) ;
            return data ;
        }
    })

    return [ role , isLoading , refetch ] ;
};

export default useRole;
