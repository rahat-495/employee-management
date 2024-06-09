
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Input, Textarea } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

const ContactUs = () => {

    const {user} = useAuth() ;
    const axiosCommon = useAxiosCommon() ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;

        const form = e.target ;
        const name = form.name.value ;
        const email = form.email.value ;
        const message = form.message.value ;

        const messageData = {name , email , message} ;
        const {data} = await axiosCommon.post('/message' , messageData) ;
        if(data?.insertedId){
            Swal.fire({
                title: "Success !",
                text: "Your message send success fully !",
                icon: "success"
            });
            form.reset() ;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full min-h-[70vh]">
            
            <h1 className="gro my-10 text-4xl font-semibold">Contact Us</h1>

            <div className="flex flex-col items-start justify-between gro gap-10">
                    
                <div className="flex items-center justify-between gap-10">

                    <div className="flex items-center flex-col justify-center">
                        <p className="p-3 bg-[#E91E63] rounded-full text-center text-white">
                            <IoCall className="text-3xl"/>
                        </p>
                        <p className="my-2 text-xl">Call us from 10 am to 7 pm</p>
                        <p className="">+61 383 765 284</p>
                    </div>

                    <div className="flex items-center flex-col justify-center">
                        <p className="p-3 bg-[#E91E63] rounded-full text-center text-white">
                            <FaLocationDot className="text-3xl"/>
                        </p>
                        <p className="my-2 text-xl">Our location</p>
                        <p className="">245 Quigley Blvd, Ste K</p>
                    </div>

                    <div className="flex items-center flex-col justify-center">
                        <p className="p-3 bg-[#E91E63] rounded-full text-center text-white">
                            <MdEmail className="text-3xl"/>
                        </p>
                        <p className="my-2 text-xl">Our Team Email</p>
                        <p className="">+61 383 765 284</p>
                    </div>

                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col items-center gap-5">
                            <Input defaultValue={user?.displayName} name="name" className="" type="text" label="Name" required/>
                            <Input defaultValue={user?.email} name="email" className="" type="email" label="Email" required/>
                        </div>
                        <Textarea name="message" required label="Enter Your Message"/>
                        <input type="submit" value={'Send'} className="btn btn-outline hover:bg-[#E91E63]"/>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;
