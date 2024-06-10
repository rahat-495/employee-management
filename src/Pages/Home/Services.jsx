import { Button } from "@material-tailwind/react";

const Services = () => {
    return (
        <div className="mt-40 mb-20">
            
            <h1 className="capitalize font-semibold gro text-4xl text-center">Services</h1>
            <p className="text-center mx-auto w-[370px] mt-3 gro">Our team of experts is dedicated to helping you achive your goals .</p>

            <div className="flex flex-col items-center gap-10 mt-16">

                <div className="bg-[#8a8aff25] rounded-lg p-5 flex items-center justify-around flex-col text-center w-full gro lg:px-6 lg:h-52 lg:text-start lg:flex lg:flex-row lg:items-center lg:justify-between lg:rounded-l-full lg:rounded-r-lg lg:bg-gradient-to-r lg:from-[#EDEDFC] lg:to-[#ededfc25]">
                    <img className="w-44 h-44 rounded-full border border-neutral-600 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVX_gwiUMrH-CVnR2POZRT65w7Rlx8RzAPg&s" alt="" />
                    <div className="flex flex-col items-start gap-3 mt-2">
                        <h1 className=" text-2xl font-bold mb-2">Attendance Tracking and Time Management</h1>
                        <p className="w-[400px] mb-3 text-center mx-auto lg:text-start lg:mx-0">Effortlessly monitor attendance, manage schedules, and optimize workforce productivity with our advanced time-tracking tools.</p>
                        <Button className="bg-[#bfbfff] mx-auto lg:mx-0">Learn More</Button>
                    </div>
                    
                </div>

                <div className="bg-[#8a8aff25] rounded-lg p-5 flex items-center justify-around flex-col text-center w-full gro lg:px-6 lg:h-52 lg:text-start lg:flex lg:flex-row lg:items-center lg:justify-between lg:rounded-r-full lg:rounded-l-lg lg:bg-gradient-to-r lg:from-[#ededfc25] lg:to-[#EDEDFC]">
                    <img className="w-44 h-44 rounded-full border border-neutral-600 flex lg:hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDTQH2YbviI3SNdrZ-DEV-eeYY5SRo5TRfo5jQ_mP7mvj_MF8EZtSHAHYUGsYq0yi4C4&usqp=CAU" alt="" />
                    <div className="flex flex-col items-start gap-3 mt-2 lg:hidden">
                        <h1 className=" text-2xl font-bold mb-2">Attendance Tracking and Time Management</h1>
                        <p className="w-[400px] mb-3 text-center mx-auto lg:text-start lg:mx-0">Effortlessly monitor attendance, manage schedules, and optimize workforce productivity with our advanced time-tracking tools.</p>
                        <Button className="bg-[#bfbfff] mx-auto lg:mx-0">Learn More</Button>
                    </div>

                    <div className="hidden lg:flex flex-col items-start">
                        <h1 className=" text-2xl font-bold mb-2">HR Document Management and Compliance</h1>
                        <p className="w-[400px] mb-3">Simplify document storage, ensure regulatory compliance, and streamline HR workflows with our secure document management system.</p>
                        <Button className="bg-[#bfbfff] mx-auto lg:mx-0">Learn More</Button>
                    </div>
                    <img className="w-44 h-44 hidden rounded-full border border-neutral-600 lg:flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDTQH2YbviI3SNdrZ-DEV-eeYY5SRo5TRfo5jQ_mP7mvj_MF8EZtSHAHYUGsYq0yi4C4&usqp=CAU" alt="" />
                </div>

                <div className="bg-[#8a8aff25] rounded-lg p-5 flex items-center justify-around flex-col text-center w-full gro lg:px-6 lg:h-52 lg:text-start lg:flex lg:flex-row lg:items-center lg:justify-between lg:rounded-l-full lg:rounded-r-lg lg:bg-gradient-to-r lg:from-[#EDEDFC] lg:to-[#ededfc25]">
                    <img className="w-44 h-44 rounded-full border border-neutral-600" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" alt="" />
                    <div className="flex flex-col items-start gap-3 mt-2 ">
                        <h1 className="text-2xl font-bold mb-2">Task and Project Management Integration</h1>
                        <p className="w-[400px] mb-3 text-center mx-auto lg:text-start lg:mx-0">Gain valuable insights into employee performance trends, and make data-driven decisions with our comprehensive analytics and reporting tools.</p>
                        <Button className="bg-[#bfbfff] mx-auto lg:mx-0">Learn More</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;
