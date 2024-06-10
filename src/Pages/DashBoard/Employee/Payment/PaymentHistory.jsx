
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth() ;

    const {data : allPayments = []} = useQuery({
        queryKey : ['employeePayments'] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/user/monthly/payments/${user?.email}`) ;
            return data ;
        }
    })

    return (
        <div className="my-28">
            <h1 className="gro text-3xl font-semibold text-center mb-10">Payment History</h1>
            <div className="overflow-x-auto rounded-lg max-h-96 overflow-y-auto mx-3 lg:w-3/4 lg:mx-auto border-[#B0BEC5] border">
                    <table className="table table-zebra ">
                        {/* head */}
                        <thead className="sticky top-0 z-10 text-white text-lg bg-[#BFBFFF]">
                            <tr>
                                <th>#</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody className={`${allPayments.length > 5 && 'h-[550px]'}`}>

                            {
                                allPayments.map((item , index) => 
                                <tr key={item._id}>
                                    <th className="gro">{index + 1}</th>
                                    <td className="gro">{item.month}/{item.year}</td>
                                    <td className="gro">{item.amount}</td>
                                    <td className="gro">{item.transactionId}</td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default PaymentHistory;
