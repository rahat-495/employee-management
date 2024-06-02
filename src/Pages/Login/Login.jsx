
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { FaGithub } from "react-icons/fa";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import 'react-toastify/dist/ReactToastify.css';
  import { IoMdEye, IoMdEyeOff } from "react-icons/io";
  import { useState } from "react";
  import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Login = () => {
  
    const {signIn , googleLogin , githubLogin , user} = useAuth() ;
    const location = useLocation() ;
    const navigate = useNavigate() ;
    const [eye , setEye] = useState(false) ;
    const [remember , setRemember] = useState(false) ;
    const [errorText , setErrorText] = useState(false) ;
    const axiosCommon = useAxiosCommon() ;

    const handleSubmit = (e) => {
      e.preventDefault() ;
  
      const form = e.target ;
      const email = form.email.value ;
      const pass = form.password.value ;
  
      if(remember){
        signIn(email , pass) 
        .then((result) => {
          console.log(result.user);
          form.reset() ;
          toast.success('Login Success Fully !') ;

          const userInfo = {
            name : result?.user?.displayName ,
            email : result?.user?.email ,
            image: result?.user?.photoURL,
            designation: "sales assistant",
            role: 'employee',
            bank_account_no: 0 ,
            salary: 0 ,
            pay : 0 ,
            Verified : false ,
            details : "Employee details",
          };
  
          axiosCommon.put("/users", userInfo).then((res) => {
            console.log(res.data);
          });

          setTimeout(() => {
            if(location.state){
              navigate(location.state) ;
            }
            else{
              navigate('/') ;
            }
          }, 1000);

        })
        .catch((error) => {
          console.log(error.message);
          if(error.message.includes('Firebase: Error (auth/invalid-credential).')){
            toast.error("Password Isn't Match") ;
          }
        })
      }
      else{
        setErrorText('Please Accept Our Turms & Condition !') ;
      }
    }
  
    const handleGoogleLogin = () => {
      googleLogin()
      .then((result) => {

        console.log(result);  
        toast.success('Login Success Fully !') ;
        
        const userInfo = {
          name : result?.user?.displayName ,
          email : result?.user?.email ,
          image: result?.user?.photoURL,
          designation: "sales assistant",
          role: 'employee',
          bank_account_no: 0 ,
          salary: 0 ,
          pay : 0 ,
          Verified : false ,
          details : "Employee details",
        };

        axiosCommon.put("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        
        setTimeout(() => {
          if(location.state){
            navigate(location.state) ;
          }
          else{
            navigate('/') ;
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  
    const handleGithubLogin = () => {
      githubLogin()
      .then((result) => {
        console.log(result);
        toast.success('Login Success Fully !') ;
        
        setTimeout(() => {
          if(location.state){
            navigate(location.state) ;
          }
          else{
            navigate('/') ;
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    if(user) return navigate('/') ;
    
    return (
      <div className={`min-h-[70vh] my-20 flex flex-col items-center justify-center`}>
        <Card className="w-96 gro pt-11 shadow-none border my-20 lg:my-0">
          
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Log In
            </Typography>
          </CardHeader>
  
          <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Input required name="email" label="Email" size="lg" />
                  <div className="relative">
                    {
                    eye ? 
                    <IoMdEyeOff onClick={() => setEye(!eye)} className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"/> :
                    <IoMdEye onClick={() => setEye(!eye)} className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"/>  
                    }
                    <Input 
                    className="z-0"
                    type={eye ? 'text' : 'password'} 
                    name="password" 
                    label="Password" 
                    size="lg" 
                    required />
                </div>

                  <div className="-ml-2.5">
                      <Checkbox onClick={() => setRemember(!remember)} label="Turms & Condition" />
                  </div>
                  <div className="">
                    {
                      remember || <p className="text-red-800 font-semibold">{errorText}</p>
                    }
                  </div>
                  <input 
                    type="submit" 
                    className="w-full btn text-gray-800 btn-outline hover:bg-[#393939]" 
                    value={'Log In'} 
                  />

                  <div className="divider">OR</div>

                    <Button onClick={handleGoogleLogin} className="text-lg gap-3 justify-center flex items-center bg-transparent text-black border border-[#343434] hover:shadow-none">
                        <FcGoogle  className="text-2xl"/>
                        <p className="text-base">Login With Google</p>
                    </Button>
                      
                    <Button onClick={handleGithubLogin} className="text-lg gap-3 justify-center flex items-center bg-transparent text-black border border-[#343434] hover:shadow-none">
                        <FaGithub className="text-2xl"/>
                        <p className="text-base">Login With GitHub</p>
                    </Button>
                    
              </form>
          </CardBody>
  
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link className="text-blue-gray-900 font-bold mx-1 hover:underline" to={'/register'}>
                Register
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
  
  export default Login;
  