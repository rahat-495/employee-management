
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const EmployeeDetails = () => {

    const {email} = useParams() ;
    const axiosSecure = useAxiosSecure() ;

    const {data : singleUserData = []} = useQuery({
        queryKey : ['singleUserData'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/users/${email}`) ;
            return data ;
        }
    })

    return (
        <div className="ml-48">
            <div className="flex items-center gap-5">
                <h1 className="">{singleUserData.name}</h1>
            </div>
        </div>
    );
};

export default EmployeeDetails;
