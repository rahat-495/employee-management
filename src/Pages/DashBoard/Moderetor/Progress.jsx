import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button, Option, Select } from "@material-tailwind/react";
import { useState } from "react";

const Progress = () => {

    const [month , setMonth] = useState(0) ;
    const [name , setName] = useState('') ;
    const axiosSecure = useAxiosSecure() ;

    const {data : allWorks = [] , refetch} = useQuery({
        queryKey : ['allWorks' , name , month] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/all-users-works?month=${month}&name=${name}`) ;
            return data ;
        }
    })

    const {data : allUsers = []} = useQuery({
        queryKey : ['allUsers'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/users`) ;
            return data ;
        }
    })

    const handleName = (e) => {
        setName(e);
        refetch() ;
    }
    
    const handleMonth = (e) => {
        setMonth(parseInt(e));
        refetch() ;
    }

    return (
        <div className="ml-48 my-14">
            
            <div className="w-3/4 mx-auto grid grid-cols-3 gap-5">

                <Select onChange={(e) => handleName(e)} label="Employees Name">
                    {
                        allUsers.map((user) => <Option key={user._id} value={user.name}>{user.name}</Option>)
                    }
                </Select>

                <Select onChange={(e) => handleMonth(e)} label="Month">
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="8">9</Option>
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                </Select>

                <Button onClick={() => (setMonth(0) , setName(''))} className="bg-transparent shadow-none hover:shadow-none border border-[#B0BEC5] text-neutral-800 gro">Reset</Button>

            </div>

            <div className="w-3/4 mx-auto mt-5">
                <div className="overflow-x-auto rounded-lg border-[#B0BEC5] border">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Tasks</th>
                                <th>Hours</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allWorks.map((item , index) => 
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.task}</td>
                                    <td>{item.hour}</td>
                                    <td>{item.date.split('T')[0]}</td>
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

export default Progress;
