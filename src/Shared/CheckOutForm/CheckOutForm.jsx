
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CheckOutForm = ({userData , month , year}) => {

    const [clientSecret , setClientSecret] = useState('') ;
    const stripe = useStripe() ; 
    const elements = useElements() ;
    const axiosSecure = useAxiosSecure() ;

    useEffect(() => {
        const amount = {amount : userData?.salary , accountId : userData?.bank_account_no} ;
        
        if(userData?.salary){
            axiosSecure.post('/create-payment-intent' , amount)
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            })
        }

    } , [axiosSecure , userData])

    const handleSubmit = async (e) => {
        e.preventDefault() ;

        if(!stripe || !elements) return ;

        const card = elements.getElement(CardElement) ;
        if(card == null) return ;

        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type : 'card' ,
            card ,
        })

        if(error){
            console.log(error);
        }
        else{
            console.log(paymentMethod);
        }

        const {paymentIntent , error : confrimError} = await stripe.confirmCardPayment(clientSecret , {
            payment_method : {
                card : card ,
                billing_details : {
                    email : userData?.email || 'anonymous' ,
                    name : userData?.displayName || 'anonymous' ,
                }
            }
        })

        if(confrimError){
            console.log(confrimError);
        }
        else{
            console.log(paymentIntent);

            if(paymentIntent?.status === 'succeeded'){
                const modal = document.getElementById("my_modal_2");
                modal.close() ;
                
                const dataObj = {
                    month : month , 
                    year : year , 
                    name : userData?.name , 
                    email : userData?.email ,
                    transactionId : paymentIntent?.id , 
                    amount : (paymentIntent?.amount / 100) ,
                }
                const {data} = await axiosSecure.post('/payment-data' , dataObj) ;
                console.log(data);

                if(!data?.success){
                    return toast.warning("This Month Salary already given !") ;
                }
                else{
                    Swal.fire({
                        title: "Success!",
                        text: "Payment SuccessFull !",
                        icon: "success"
                    });
                }

            }
        }
        
    }

    return (
        <div className="mt-5">
            <form className="border p-3 rounded-lg" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button className="btn w-full my-5 gro text-lg" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;
