import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AllMessages = () => {

    const axiosSecure = useAxiosSecure() ;

    const {data : allMessages = []} = useQuery({
        queryKey : ['messages'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get('/message') ;
            return data ;
        }
    })

    return (
        <div>

            <h1 className="text-center gro font-semibold my-10 text-3xl">All Messages</h1>

            <div className="w-3/4 mx-auto rounded-lg overflow-auto shadow-none border border-[#B0BEC5]">
                <table className="table table-zebra gro">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMessages.map((item , index) => <tr key={item._id}>
                                <th className="gro">{index + 1}</th>
                                <td className="gro">{item.name}</td>
                                <td className="gro">{item.email}</td>
                                <td className="gro">{item.message.length > 30 ? (item.message.slice(0,35) + '...') : item.message}</td>
                                <td>
                                    <Link to={`/dashBoard/messages/${item?._id}`}>
                                        <Button className="bg-transparent border border-[#BEBEFF] shadow-none text-neutral-900 capitalize">View Details</Button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllMessages;
