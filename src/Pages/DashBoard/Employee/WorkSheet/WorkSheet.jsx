
import DatePicker from "react-datepicker";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form"
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2'
import { FaRegTrashAlt } from "react-icons/fa";

const WorkSheet = () => {

    const {user , loading} = useAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const [startDate , setStartDate] = useState(new Date()) ;
    const { register , handleSubmit } = useForm() ;

    const {data : workSheets = [] , refetch , isLoading} = useQuery({
        queryKey : ['workSheets'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/workSheets/${user?.email}`) ;
            return data ;
        }
    })

    const {mutateAsync : mutatePost} = useMutation({
        mutationFn : async (data) => {
            const {data : resData} = await axiosSecure.post('/workSheet' , data) ;
            return resData ;
        },
        onSuccess : () => {
            Swal.fire({
                title: "Good job!",
                text: "Work added success fully !",
                icon: "success"
            });
            refetch() ;
        }
    })

    const {mutate : mutateDelete , isPending} = useMutation({
        mutationFn : async (id) => {
            const {data : resData} = await axiosSecure.delete(`/workSheet/${id}`) ;
            return resData ;
        },
        onSuccess : () => {
            refetch() ;
        }
    })

    const onSubmit = async (data) => {
        const workSheet = {
            uid : user?.uid ,
            name : user?.displayName || 'anonymous' ,
            email : user?.email ,
            task : data?.task ,
            hour : parseInt(data?.hour) ,
            date : startDate ,
        }
        await mutatePost(workSheet) ;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "this work has been deleted !",
                icon: "success"
              });
              mutateDelete(id) ;
            }
        });
    }

    if(loading || isLoading || isPending) return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner text-primary"></span> ;

    return (
        <div className="flex flex-col gap-3 grid-rows-1 ml-48 my-20">
            
            <div className="w-3/4 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-4 gap-3">

                        <select required {...register("task")} className="border px-3 py-[7px] border-[#B0BEC5] cursor-pointer w-full items-center justify-center rounded-lg">
                            <option value="sales">Sales</option>
                            <option value="support">Support</option>
                            <option value="content">Content</option>
                            <option value="paper-work">Paper-work</option>
                        </select>

                        <Input required type="number" min={0} label="Hours Worked" {...register("hour")}/>

                        <div className="w-full">
                            <DatePicker 
                                required 
                                className="border px-3 py-[7px] border-[#B0BEC5] items-center w-[140%] justify-center rounded-lg" 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                dateFormat="yyyy/MM/dd"
                            />
                        </div>

                        <input type="submit" value={'Submit'} className="border px-3 py-[7px] cursor-pointer border-[#B0BEC5] w-full items-center justify-center rounded-lg"/>

                    </div>
                    
                </form>
            </div>

            <div className="w-3/4 mx-auto mt-5">
                <div className="overflow-x-auto rounded-lg border-[#B0BEC5] border">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tasks</th>
                                <th>Hours</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                workSheets.map((item , index) => 
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.task}</td>
                                    <td>{item.hour}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(item._id)} className="bg-transparent shadow-none hover:shadow-none border border-[#B0BEC5]">
                                            <FaRegTrashAlt className="text-lg text-red-900"/>
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

export default WorkSheet;
