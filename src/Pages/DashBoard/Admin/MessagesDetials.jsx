
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MessagesDetials = () => {

    const {id} = useParams() ;
    const axiosSecure = useAxiosSecure() ;

    const {data : singleMessage} = useQuery({
        queryKey : ['singleMessage'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/message/${id}`) ;
            return data ;
        }
    })

    return (
        <div className="flex gro my-20 flex-col items-center justify-center gap-3">
            <h1 className="font-semibold text-xl">{singleMessage?.name}</h1>
            <p className="">{singleMessage?.email}</p>
            <p className="w-1/3 mx-auto text-center">{singleMessage?.message}</p>
        </div>
    );
};

export default MessagesDetials;
