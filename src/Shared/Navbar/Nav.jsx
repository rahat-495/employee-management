
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {Link, NavLink} from 'react-router-dom' ;
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'
import { FaChevronDown } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";

const Nav = () => {
  
    const {user , logOut} = useAuth() ;
    const [openNav, setOpenNav] = useState(false);
    const axiosSecure = useAxiosSecure() ;

    const { data : role} = useQuery({
        queryKey : ['userRole' , user] ,
        queryFn : async () => {
            const {data} = await axiosSecure.get(`/userRole/${user?.email}`) ;
            return data ;
        }
    })
  
    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

          <Typography
            as="li"
            className="p-1 font-normal gro"
          >
            <NavLink to={'/'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
            }>
              Home
            </NavLink>
          </Typography>

          <Typography
            as="li"
            className="p-1 font-normal gro"
          >
            <NavLink to={'/contactUs'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
            }>
              Contact Us
            </NavLink>
          </Typography>
            
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <Typography
                className="p-1 font-normal gro"
              >
                <NavLink to={'/dashBoard/home'} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                }>
                  <p className="flex items-center gap-2">DashBoard <FaChevronDown /></p>
                </NavLink>
              </Typography>
            </div>
            {
              user?.email &&
              <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-[#adadff] border border-[#ffffff] rounded-box w-52">

              {
                  role?.role === 'admin' && <>
                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/all-employee-list"}
                        end
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        All Employee List
                      </NavLink>
                    </Typography>
                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/messages"}
                        end
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        Messages
                      </NavLink>
                    </Typography>
                  </>
                }

                {
                  role?.role === 'hr' && <>
                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/employeeList"}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        Employee List
                      </NavLink>
                    </Typography>

                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/progress"}
                        end
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        Progress
                      </NavLink>
                    </Typography>
                  </>
                }

                {
                  role?.role === 'employee' && <>
                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/workSheet"}
                        end
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        Work Sheet
                      </NavLink>
                    </Typography>

                    <Typography as="li" className="p-1 font-normal gro">
                      <NavLink
                        to={"/dashBoard/paymentHistory"}
                        end
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                        }
                      >
                        Payment History
                      </NavLink>
                    </Typography>
                  </>
                }

              </ul>
            }
          </div>

        </ul>
    );

    const handlelogOut = () => {
      logOut() ;
    }

    return (
        <div className="sticky top-0 z-10 ">
            <Navbar className="sticky top-0 z-10 h-max max-w-screen-2xl mx-auto border-none bg-[#CCCCFF] shadow-none border-2 rounded-none px-4 py-2 lg:px-4 lg:py-1 my-0">

                <div className="flex items-center justify-between text-neutral-950">
                    <div className="flex items-center gap-3">
                      <Typography
                          className="mr-4 w-28 gro text-xl cursor-pointer py-1.5 font-medium"
                      > <Link to={'/'} className=" flex items-center gap-3">
                          <img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/previews/007/121/544/non_2x/customer-retention-and-returning-clients-line-icon-vector.jpg" alt="" />
                          EmployeeFlow
                        </Link>
                      </Typography>
                    </div>

                    <div className="flex items-center gap-4 text-white">

                        <div className="mr-4 hidden lg:block text-neutral-950">{navList}</div>

                        <div className="flex items-center gap-x-1">
                          {user ? (
                            <div className="flex items-center justify-between">
                                <div className="dropdown dropdown-hover z-30">
                                  <div
                                    tabIndex={0}
                                    role="button"
                                    className=" m-1 hidden lg:flex"
                                  >
                                    <img
                                      className="w-[45px] h-[45px] rounded-full hidden lg:flex"
                                      src={user?.photoURL}
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    tabIndex={0}
                                    className="dropdown-content z-50 menu p-2 shadow bg-[#adadff] rounded-box w-52"
                                  >
                                    <h1 className="m-1 border p-1 rounded-md font-semibold">
                                      {user?.displayName}
                                    </h1>
                                    <h1 className="m-1 border p-1 rounded-md font-semibold">
                                      {user?.email}
                                    </h1>
                                    <Button onClick={handlelogOut} className="my-2 w-full">
                                      Log Out
                                    </Button>
                                  </div>
                                </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <Link to={"/login"}>
                                <Button
                                  variant="text"
                                  size="sm"
                                  className="hidden lg:inline-block border border-[#282828] hover:shadow-none hover:bg-transparent"
                                >
                                  Login
                                </Button>
                              </Link>

                              <Link to={"/Register"}>
                                <Button
                                  variant="gradient"
                                  size="sm"
                                  className="hidden lg:inline-block border border-[#282828] hover:shadow-none"
                                >
                                  Sign Up
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>

                        <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        >
                        {openNav ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        </IconButton>

                    </div>
                </div>

                <MobileNav open={openNav}>
                <div className="flex items-center gap-x-1">
                          {user ? (
                            <div className="flex items-center justify-between">
                                <div className="dropdown dropdown-hover z-30">
                                  <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex lg:hidden"
                                    >
                                      <img
                                        className="w-[45px] h-[45px] relative left-[344px] md:left-[685px] rounded-full flex lg:hidden"
                                        src={user?.photoURL}
                                        alt=""
                                        />
                                  </div>
                                  <div
                                    tabIndex={0}
                                    className="dropdown-content absolute z-50 menu p-2 left-[180px] md:left-[525px] shadow bg-[#adadff] border border-neutral-100 rounded-box w-52"
                                    >
                                    <h1 className="m-1 border p-1 rounded-md font-semibold">
                                      {user?.displayName}
                                    </h1>
                                    <h1 className="m-1 border p-1 rounded-md font-semibold">
                                      {user?.email}
                                    </h1>
                                    <Button onClick={handlelogOut} className="my-2 w-full">
                                      Log Out
                                    </Button>
                                  </div>
                                </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-5 absolute bottom-6 right-12 md:bottom-8 md:right-20">
                              <Link to={"/login"}>
                                <Button
                                  variant="text"
                                  size="sm"
                                  className="flex lg:hidden border border-[#282828] hover:shadow-none hover:bg-transparent"
                                  >
                                  Login
                                </Button>
                              </Link>

                              <Link to={"/Register"}>
                                <Button
                                  variant="gradient"
                                  size="sm"
                                  className="flex lg:hidden border border-[#282828] hover:shadow-none"
                                  >
                                  Sign Up
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>

                        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

                          <Typography
                            as="li"
                            className="p-1 font-normal gro"
                          >
                            <NavLink to={'/'} className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                            }>
                              Home
                            </NavLink>
                          </Typography>

                          <Typography
                            as="li"
                            className="p-1 font-normal gro"
                          >
                            <NavLink to={'/contactUs'} className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                            }>
                              Contact Us
                            </NavLink>
                          </Typography>
                            
                          <div className="">
                              <Typography
                                className="p-1 font-normal gro"
                              >
                                <NavLink to={'/dashBoard/home'} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                }>
                                  <p className="flex items-center gap-2">DashBoard <FaArrowTurnDown /></p>
                                </NavLink>
                              </Typography>
                            {
                              user?.email &&
                              <ul tabIndex={0} className="mt-1 gap-1 flex flex-col w-52 h-auto">

                              {
                                  role?.role === 'admin' && <>
                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/all-employee-list"}
                                        end
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        All Employee List
                                      </NavLink>
                                    </Typography>

                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/messages"}
                                        end
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        Messages
                                      </NavLink>
                                    </Typography>
                                  </>
                                }

                                {
                                  role?.role === 'hr' && <>
                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/employeeList"}
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        Employee List
                                      </NavLink>
                                    </Typography>

                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/progress"}
                                        end
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        Progress
                                      </NavLink>
                                    </Typography>
                                  </>
                                }

                                {
                                  role?.role === 'employee' && <>
                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/workSheet"}
                                        end
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        Work Sheet
                                      </NavLink>
                                    </Typography>

                                    <Typography as="li" className="p-1 font-normal gro">
                                      <NavLink
                                        to={"/dashBoard/paymentHistory"}
                                        end
                                        className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "underline font-bold text-white" : ""
                                        }
                                      >
                                        Payment History
                                      </NavLink>
                                    </Typography>
                                  </>
                                }

                              </ul>
                            }
                          </div>

                        </ul>

                </MobileNav>

            </Navbar>
        </div>
    );
};

export default Nav;
