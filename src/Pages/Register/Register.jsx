import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const key = import.meta.env.VITE_IMAGE_HOISTING_API_KEY;
const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

const Register = () => {

  const { createUser, setProfile, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [passInt, setPassInt] = useState("");
  const [eye, setEye] = useState(false);
  const [role, setRole] = useState("employee");
  const [designation, setDesignation] = useState("Sales Assistant");
  const axiosCommon = useAxiosCommon();

  const bank = ['4000056655665556' , '5555555555554444' , '5105105105105100' , '371449635398431'] ;
  const math = Math.floor(Math.random() * 4) ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const pass = form.password.value;
    const salary = parseInt(form.salary.value);
    const designation = form.designation.value;
    const bank_account_no = form.bank.value;

    const formData = new FormData();
    formData.append("image", image);

    const { data: imageUrl } = await axios.post(apiUrl, formData, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (remember && imageUrl?.success) {
      if (passInt.length >= 6) {
        if (/[!@#$%^&*(),.?":{}|<>]/.test(passInt)) {
          if (/[a-z]/.test(passInt) && /[A-Z]/.test(passInt)) {
            createUser(email, pass)
              .then((result) => {
                console.log(result.user);
                toast.success("Register Success Fully !");
                form.reset();

                const userInfo = {
                  name,
                  email,
                  image: imageUrl?.data?.display_url,
                  designation: designation,
                  role: role,
                  bank_account_no: bank_account_no,
                  salary: salary ,
                  pay : 0 ,
                  Verified : role === 'hr' ?  true : false ,
                };

                axiosCommon.put("/users", userInfo).then((res) => {
                  console.log(res.data);
                });

                setTimeout(() => {
                  navigate("/");
                }, 1000);
                setProfile(name, imageUrl?.data?.display_url);
              })
              .catch((error) => {
                console.log(error.message);
                if (
                  error.message.includes(
                    "Firebase: Error (auth/email-already-in-use)."
                  )
                ) {
                  toast.error("This Email Already in Use !");
                }
              });
          } else {
            toast.warning(
              "Your Password Have UpperCase or LowerCase Charecter's !"
            );
          }
        } else {
          toast.warning("Your password must have a specail charecter !");
        }
      } else {
        toast.warning("Your Password must have 6 Charecter's !");
      }
    } else {
      setErrorText("Please Accept Our Turms & Condition !");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Login Success Fully !");

        const userInfo = {
          name : result?.user?.displayName ,
          email : result?.user?.email ,
          image: result?.user?.photoURL,
          designation: "sales assistant",
          role: role,
          bank_account_no: bank[math] ,
          salary: 0 ,
          pay : 0 ,
          Verified : false ,
        };

        axiosCommon.put("/users", userInfo).then((res) => {
          console.log(res.data);
        });

        setTimeout(() => {
          if (location.state) {
            navigate(location.state);
          } else {
            navigate("/");
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setPassInt(e.target.value);
  };

  return (
    <div
      className={`min-h-[70vh] my-20 flex flex-col items-center justify-center`}
    >
      <Card className=" pt-11 gro shadow-none border my-20 lg:my-0">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-2 gap-4">
            <Input required type="text" name="name" label="Name" size="lg" />

            <div className="border border-[#B0BEC5] p-0 rounded-md">
              <input
                className="file-input w-full"
                type="file"
                name="image"
                id=""
              />
            </div>

            <Input required type="email" name="email" label="Email" size="lg" />

            <div className="relative">
              {eye ? (
                <IoMdEyeOff
                  onClick={() => setEye(!eye)}
                  className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                />
              ) : (
                <IoMdEye
                  onClick={() => setEye(!eye)}
                  className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                />
              )}
              <Input
                className="z-0"
                onChange={handleChange}
                type={eye ? "text" : "password"}
                name="password"
                label="Password"
                size="lg"
                required
              />
            </div>

            <Select
              value={role}
              onChange={(e) => setRole(e)}
              label="Select The Role"
              required
            >
              <Option value="employee">Employee</Option>
              <Option value="hr">HR</Option>
            </Select>

            <Input name="bank" type="number" label="Bank Account No"/>
            <Input name="salary" type="number" label="Salary"/>

            <Select
              value={designation}
              onChange={(e) => setDesignation(e)}
              name="designation"
              label="Designation"
              required
            >
              <Option value="Sales Assistant">Sales Assistant</Option>
              <Option value=" Social Media executive"> Social Media executive</Option>
              <Option value="Digital Marketer">Digital Marketer</Option>
            </Select>

            <div className="-ml-2.5">
              <Checkbox
                onClick={() => setRemember(!remember)}
                label="Turms & Condition"
              />
            </div>

            <div>
              {remember ? (
                <p></p>
              ) : (
                <p className="text-red-800 font-semibold">{errorText}</p>
              )}
            </div>

              <div className="col-span-2">
                <input  
                  type="submit"
                  className="w-full btn text-gray-800 btn-outline hover:bg-[#393939]"
                  value={"Sign Up"}
                />
              </div>
          </form>

          <div className="divider">OR</div>

          <Button
            onClick={handleGoogleLogin}
            className="text-lg gap-3 justify-center flex items-center bg-transparent text-black border border-[#343434] hover:shadow-none"
          >
            <FcGoogle className="text-2xl" />
            <p className="text-base">Login With Google</p>
          </Button>

        </CardBody>

        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link
              className="text-blue-gray-900 font-bold mx-1 hover:underline"
              to={"/login"}
            >
              Login
            </Link>
          </Typography>
        </CardFooter>
      </Card>

      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
