
const PaymentHistory = () => {
    return (
        <div className="ml-48 my-20">
            <div className="overflow-x-hidden rounded-lg w-3/4 mx-auto border-[#B0BEC5] border">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                // workSheets.map((item , index) => 
                                // <tr key={item._id}>
                                //     <th>{index + 1}</th>
                                //     <td>{item.task}</td>
                                //     <td>{item.hour}</td>
                                //     <td>{item.date}</td>
                                //     <td>
                                //         <Button onClick={() => handleDelete(item._id)} className="bg-transparent shadow-none hover:shadow-none border border-[#B0BEC5]">
                                //             <FaRegTrashAlt className="text-lg text-red-900"/>
                                //         </Button>
                                //     </td>
                                // </tr>
                                // )
                            }

                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default PaymentHistory;
