
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button } from "@material-tailwind/react";
import { AiOutlineFire } from "react-icons/ai";

const AllEmployeeList = () => {

    const axiosSecure = useAxiosSecure() ;

    const {data : verifiedUsers = []} = useQuery({
        queryKey : ['verifiedUsers'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/verified-users`) ;
            return data ;
        }
    })

    const handleRoleChange = async (userData) => {
        console.log(userData);
        const {data} = await axiosSecure.patch(`/users-role-update/${userData?._id}` , {role : userData?.role === 'hr' ? 'employee' : 'hr'}) ;
        console.log(data);
    }

    return (
        <div className="ml-48 mt-20">
            <div className="w-3/4 mx-auto mt-5">
                <div className="overflow-x-auto rounded-lg border-[#B0BEC5] border">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Make HR</th>
                                <th>Fire</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                verifiedUsers.map((item , index) => 
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.designation}</td>
                                    <td>
                                        {
                                            item.role === 'hr' ?
                                            <Button onClick={() => handleRoleChange(item)} className="bg-transparent shadow-none w-2/5 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">Already HR</Button> : 
                                            <Button onClick={() => handleRoleChange(item)} className="bg-transparent shadow-none w-2/5 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">Make HR</Button> 
                                        }
                                    </td>
                                    <td>
                                        <Button className="bg-transparent shadow-none hover:shadow-none border-[#B0BEC5] border">
                                            <AiOutlineFire className="text-neutral-900 text-lg"/>
                                        </Button>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllEmployeeList;
