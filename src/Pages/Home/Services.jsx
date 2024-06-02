import { Button } from "@material-tailwind/react";

const Services = () => {
    return (
        <div className="mt-40 mb-20">
            
            <h1 className="capitalize font-semibold gro text-4xl text-center">How we help you</h1>
            <p className="text-center mx-auto w-[370px] mt-3 gro">Our team of experts is dedicated to helping you achive your goals .</p>

            <div className="flex flex-col items-center gap-10 mt-16">

                <div className="w-full gro px-6 h-52 flex items-center justify-between rounded-l-full rounded-r-lg bg-gradient-to-r from-[#EDEDFC] to-[#ededfc25]">
                    <img className="w-44 h-44 rounded-full" src="https://t4.ftcdn.net/jpg/03/03/49/75/360_F_303497515_ZHOwfTtuo5sYpAeoqWRZnkXZNZDKZeMz.jpg" alt="" />
                    <div className="flex flex-col items-start">
                        <h1 className=" text-2xl font-bold mb-2">Attendance Tracking and Time Management</h1>
                        <p className="w-[400px] mb-3">Effortlessly monitor attendance, manage schedules, and optimize workforce productivity with our advanced time-tracking tools.</p>
                        <Button className="bg-[#bfbfff]">Learn More</Button>
                    </div>
                </div>

                <div className="w-full gro px-6 h-52 flex items-center justify-between rounded-r-full rounded-l-lg bg-gradient-to-r from-[#ededfc25] to-[#EDEDFC]">
                    <div className="flex flex-col items-start">
                        <h1 className=" text-2xl font-bold mb-2">HR Document Management and Compliance</h1>
                        <p className="w-[400px] mb-3">Simplify document storage, ensure regulatory compliance, and streamline HR workflows with our secure document management system.</p>
                        <Button className="bg-[#bfbfff]">Learn More</Button>
                    </div>
                    <img className="w-44 h-44 rounded-full" src="https://t4.ftcdn.net/jpg/03/03/49/75/360_F_303497515_ZHOwfTtuo5sYpAeoqWRZnkXZNZDKZeMz.jpg" alt="" />
                </div>

                <div className="w-full gro px-6 h-52 flex items-center justify-between rounded-l-full rounded-r-lg bg-gradient-to-r from-[#EDEDFC] to-[#ededfc25]">
                    <img className="w-44 h-44 rounded-full" src="https://t4.ftcdn.net/jpg/03/03/49/75/360_F_303497515_ZHOwfTtuo5sYpAeoqWRZnkXZNZDKZeMz.jpg" alt="" />
                    <div className="flex flex-col items-start ">
                        <h1 className="text-2xl font-bold mb-2">Task and Project Management Integration</h1>
                        <p className="w-[400px] mb-3">Gain valuable insights into employee performance trends, identify areas for improvement, and make data-driven decisions with our comprehensive analytics and reporting tools.</p>
                        <Button className="bg-[#bfbfff]">Learn More</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;
