
import { Input } from "@material-tailwind/react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const Modal = ({userData , refetch , setUpdatedValue}) => {

    const axiosSecure = useAxiosSecure() ;

    const {mutateAsync} = useMutation({
        mutationFn : async (salary) => {
            const {data} = await axiosSecure.patch(`/user-salary-update/${userData?._id}` , {salary}) ;
            return data ;
        },
        onSuccess : () => {
            refetch() ;
        }
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const newSalary = form.newSalary.value ;
        await mutateAsync(newSalary) ;
        setUpdatedValue(newSalary) ;
        form.reset() ;
    }

  return (
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center my-3">Current Salary : ${userData?.salary}</h3>
          <form onSubmit={handleSubmit}>
            <Input name="newSalary" required min={parseInt(userData?.salary)} label="New Salary" type="number"/>
            <input type="submit" className="btn w-full my-3" value={'Update'}/>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
  );
};

export default Modal;
