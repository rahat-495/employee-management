
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Button, Input } from "@material-tailwind/react";
import Swal from 'sweetalert2'
import { FaFire, FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

const AllEmployeeList = () => {

    const [value , setValue] = useState(true) ;
    const [userData , setUserData] = useState({}) ;
    const axiosSecure = useAxiosSecure() ;

    const {mutateAsync} = useMutation({
        mutationFn : async (salary) => {
            const {data} = await axiosSecure.patch(`/user-salary-update/${userData?._id}` , {salary}) ;
            return data ;
        },
        onSuccess : () => {
            refetch() ;
            const modal = document.getElementById('my_modal_2') ;
            modal.close() ;
            Swal.fire({
                title: "Success !",
                text: "Salary Update Success Full !",
                icon: "success"
            });
        }
    })

    const {data : verifiedUsers = [] , refetch} = useQuery({
        queryKey : ['verifiedUsers'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/verified-users`) ;
            return data ;
        }
    })

    const handleRoleChange = async (userData) => {
        console.log(userData);
        const {data} = await axiosSecure.patch(`/users-role-update/${userData?._id}` , {role : userData?.role === 'hr' ? 'employee' : 'hr'}) ;
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "Good job!",
                text: 'Role update success fully !',
                icon: "success"
            });
            refetch() ;
        }
    }

    const handleFireing = async (userData) => {
        Swal.fire({
            title: "Are you sure?",
            text: userData?.isFired ? "You won't be able to unFired him!" : "You won't be able to fire him!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users-isFired/${userData?._id}` , {isFired : userData?.isFired ? false : true})
                .then((res) => {
                    if(res.data.modifiedCount > 0){
                        refetch() ;
                        Swal.fire({
                        title: "Success",
                        text: userData?.isFired ? "Success fully unfired !" : "Success fully fired !",
                        icon: "success"
                        });
                    }
                })
            }
        });
    }

    const handleSalary = async (userData) => {
        setUserData(userData) ;
        const modal = document.getElementById('my_modal_2') ;
        modal.showModal() ;
    }

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const newSalary = form.newSalary.value ;
        await mutateAsync(newSalary) ;
        form.reset() ;
    }

    return (
        <div className=" mt-20">
            <div className="w-3/4 mx-auto mt-5 flex flex-col">

                <div className="">
                    {
                        value ? 
                        <Button onClick={() => setValue(!value)} className="bg-transparent shadow-none hover:shadow-none my-3 border border-[#B0BEC5] text-neutral-900 text-xl"><CgMenuGridO /></Button> :
                        <Button onClick={() => setValue(!value)} className="bg-transparent shadow-none hover:shadow-none my-3 border border-[#B0BEC5] text-neutral-900 text-xl"><HiMenu /></Button> 
                    }
                </div>

                {
                    value ? 

                    <div className="overflow-x-auto rounded-lg border-[#B0BEC5] border">
                        <table className="table table-zebra">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Make HR</th>
                                    <th>Fire</th>
                                    <th>Adjust Salary</th>
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
                                                <Button onClick={() => handleRoleChange(item)} className="bg-transparent flex items-center justify-center gap-2 shadow-none w-1/2 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">
                                                    Already HR <FaStar  className="text-orange-500 text-sm"/>
                                                </Button> : 
                                                <Button onClick={() => (item.isFired ? Swal.fire({
                                                    title: "Oops !",
                                                    html: `You cannot make a fired employee HR <br/> To make them HR first unfire them.`,
                                                    icon: "error"
                                                }) : handleRoleChange(item))} className="bg-transparent flex items-center justify-center gap-2 shadow-none w-1/2 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">
                                                    Make HR <FaRegStar className="text-orange-500 text-sm"/>
                                                </Button> 
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.isFired ? 
                                                <Button size="md" onClick={() => handleFireing(item)} className="bg-transparent w-2/5 flex justify-center text-center shadow-none gro hover:shadow-none border-[#B0BEC5] border text-neutral-900 capitalize gro">Fired</Button> :
                                                <Button size="md" onClick={() => handleFireing(item)} className="bg-transparent w-2/5 flex justify-center text-center gro shadow-none hover:shadow-none border-[#B0BEC5] border">
                                                    <FaFire className="text-neutral-900 text-lg"/>
                                                </Button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.isFired ? 
                                                    <Button  
                                                        onClick={() => Swal.fire({
                                                            title: "Oops !",
                                                            html: `Can't Adjust fired employee salary <br/> Plz unFired to Adjust !`,
                                                            icon: "error"
                                                        })}
                                                        className="border-[#B0BEC5] border text-neutral-900 capitalize shadow-none hover:shadow-none bg-transparent "
                                                    >
                                                        Adjust
                                                    </Button> :
                                                    <Button  
                                                        onClick={() => handleSalary(item)}
                                                        className="border-[#B0BEC5] border text-neutral-900 capitalize shadow-none hover:shadow-none bg-transparent "
                                                    >
                                                        Adjust
                                                    </Button>
                                            }
                                        </td>
                                    </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div> :

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            verifiedUsers?.map((user) => <div key={user._id}>
                                <div className="card p-5 rounded-lg border bg-base-100">
                                    <div className="card-body">

                                        <h1 className="text-xl text-center font-bold gro">{user?.name}</h1>
                                        <h2 className="card-title mx-auto gro mon font-medium text-2xl mb-2">{user?.designation}</h2>

                                        <div className="flex items-center justify-between gap-3">
                                            {
                                                user.role === 'hr' ?
                                                <Button onClick={() => handleRoleChange(user)} className="bg-transparent flex items-center justify-center gap-2 shadow-none w-1/2 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">
                                                    Already HR <FaStar  className="text-orange-500 text-sm"/>
                                                </Button> : 
                                                <Button onClick={() => handleRoleChange(user)} className="bg-transparent flex items-center justify-center gap-2 shadow-none w-1/2 hover:shadow-none text-neutral-900 capitalize border-[#B0BEC5] border">
                                                    Make HR <FaRegStar className="text-orange-500 text-sm"/>
                                                </Button> 
                                            }
                                            {
                                                user.isFired ? 
                                                <Button size="md" onClick={() => handleFireing(user)} className="bg-transparent w-1/2 flex justify-center text-center shadow-none gro hover:shadow-none border-[#B0BEC5] border text-neutral-900 capitalize gro">Fired</Button> :
                                                <Button size="md" onClick={() => handleFireing(user)} className="bg-transparent text-neutral-900 gap-3 w-1/2 flex justify-center text-center gro shadow-none hover:shadow-none border-[#B0BEC5] border">
                                                    Fire <FaFire className="text-lg"/>
                                                </Button>
                                            }
                                        </div>

                                        <div className="">
                                            {
                                                user.isFired ? 
                                                    <Button  
                                                        onClick={() => Swal.fire({
                                                            title: "Oops !",
                                                            html: `Can't Adjust fired employee salary <br/> Plz unFired to Adjust !`,
                                                            icon: "error"
                                                        })}
                                                        className="border-[#B0BEC5] border text-neutral-900 capitalize shadow-none w-full hover:shadow-none bg-transparent "
                                                    >
                                                        Adjust
                                                    </Button> :
                                                    <Button  
                                                        onClick={() => handleSalary(user)}
                                                        className="border-[#B0BEC5] border text-neutral-900 capitalize shadow-none w-full hover:shadow-none bg-transparent "
                                                    >
                                                        Adjust
                                                    </Button>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                }

                <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center my-3">Current Salary : ${userData?.salary}</h3>
                                <form onSubmit={handleSubmit}>
                                    <Input name="newSalary" required min={userData?.salary} label="New Salary" type="number"/>
                                    <input type="submit" className="btn w-full my-3" value={'Update'}/>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button></button>
                            </form>
                </dialog>

            </div>
        </div>
    );
};

export default AllEmployeeList;
