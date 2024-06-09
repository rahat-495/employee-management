
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const EmployeeDetails = () => {

    const {email} = useParams() ;
    const axiosSecure = useAxiosSecure() ;

    const {data : singleUserData = []} = useQuery({
        queryKey : ['singleUserData'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/users/${email}`) ;
            return data ;
        }
    })

    const {data : paymentsData = []} = useQuery({
        queryKey : ['paymentsData'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/users/barCharts/${email}`) ;
            return data ;
        }
    })
    
    return (
        <div className="ml-52 my-20 ">
            
            <div className="flex flex-col items-center gap-3 w-3/4 mx-auto">
                <img className="w-14 h-14 rounded-full border border-[#BEBEFF]" src={singleUserData.image} alt="" />
                <h1 className="gro text-2xl font-semibold">{singleUserData.name}</h1>
                <p className="gro text-xl capitalize"> Designation : {singleUserData?.designation}</p>
            </div>

            <div className="w-3/4 my-14 mx-auto">
                <BarChart
                    width={1200}
                    height={500}
                    data={paymentsData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="monthYear" />
                        <YAxis label={{value: 'Salary' , position : 'insideBottom' , offset: 220 , angle: -90 , dx: -22}} tickFormatter={(value) => `$${value}`} tickCount={12} dataKey="amount" />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8" label={{ position: 'top' }}>
                            {paymentsData?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                </BarChart>
            </div>

        </div>
    );
};

export default EmployeeDetails;
