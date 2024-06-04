
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { MdOutlineDoneAll } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../Shared/CheckOutForm/CheckOutForm";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify'

const TABLE_HEAD = [
  "Name",
  "Email",
  "Bank Account",
  "Salary",
  "Details",
  "Pay",
  "Verified",
];

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const EmployeeList = () => {

  const [singleUser, setSingleUser] = useState({});
  const [month , setMonth] = useState(parseInt(new Date().getMonth() + 1)) ;
  const [year , setYear] = useState(parseInt(new Date().getFullYear())) ;
  const [value, setValue] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { loading } = useAuth();

  const {
    data: employee = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/employees`);
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      const { fetchData } = await axiosSecure.patch(
        `/user/verify/${data.id}`,
        data
      );
      return fetchData;
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleToggole = async (user) => {
    const data = {
      id: user._id,
      Verified: user.Verified === false ? true : false,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to change this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(data);
      }
    });
  };

  const handlePayment = async (e, user) => {
    e.preventDefault();
    setValue(true) ;

    setSingleUser(user);
  };

  if (loading || isLoading) return <span className="loading loading-spinner text-primary"></span>;

  return (
    <div className="ml-48 my-20">
      <Card className="h-full w-3/4 mx-auto overflow-auto shadow-none border border-[#B0BEC5]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employee.map((user) => (
              <tr key={user._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.bank_account_no}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    ${user.salary}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {user.details}
                  </Typography>
                </td>

                <td className="p-4">
                  <Button
                    disabled={!user.Verified}
                    onClick={() =>{
                        setSingleUser(user) ;
                        document.getElementById("my_modal_2").showModal()
                    }
                    }
                    className="bg-[#BFBFFF] border cursor-pointer border-[#BFBFFF] shadow-none"
                  >
                    Pay
                  </Button>
                </td>

                <td className="p-4">
                  {user.Verified ? (
                    <Button
                      onClick={() => handleToggole(user)}
                      className="bg-transparent border border-[#B0BEC5] shadow-none"
                    >
                      <MdOutlineDoneAll className="text-lg text-green-600" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleToggole(user)}
                      className="bg-transparent border border-[#B0BEC5] shadow-none"
                    >
                      <RxCross2 className="text-lg text-red-900" />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Employee Salary : ${singleUser?.salary}
            </h3>
            <form
              onSubmit={(e) => handlePayment(e, singleUser)}
              className="my-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 ">
                <Input
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                  defaultValue={parseInt(new Date().getMonth() + 1)}
                  name="month"
                  type="number"
                  min={1}
                  max={12}
                  label="Month"
                  required
                />
                <Input
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  defaultValue={parseInt(new Date().getFullYear())}
                  name="year"
                  type="number"
                  min={1990}
                  max={new Date().getFullYear() + 1}
                  label="Year"
                  required
                />
              </div>

            </form>
              <Elements stripe={stripePromise}>
                <CheckOutForm userData={singleUser} month={month} year={year} />
              </Elements>
          </div>
          <form method="dialog" className="modal-backdrop">
            {
              value ? 
              <span onClick={() => toast.warning("You can't close after submit date !")}></span> :
              <button></button>
            }
          </form>
        </dialog>

      </Card>
      <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      />
    </div>
  );
};

export default EmployeeList;
