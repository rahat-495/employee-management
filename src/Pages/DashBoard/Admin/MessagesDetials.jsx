
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";

const MessagesDetials = () => {

    const {loading} = useAuth() ;
    const {id} = useParams() ;
    const axiosSecure = useAxiosSecure() ;

    const {data : singleMessage , isLoading} = useQuery({
        queryKey : ['singleMessage'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/message/${id}`) ;
            return data ;
        }
    })

    if(loading , isLoading) return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner text-[#CCCCFF]"></span> ;

    return (
        <div className="flex gro my-20 flex-col items-center justify-center gap-3">
            <h1 className="font-semibold text-xl">{singleMessage?.name}</h1>
            <p className="">Email : {singleMessage?.email}</p>
            <p className="lg:w-1/3 mx-auto text-center">{singleMessage?.message}</p>
        </div>
    );
};

export default MessagesDetials;
