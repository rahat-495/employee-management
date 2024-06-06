
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import useRole from "../../Hooks/useRole";

const Navbar = () => {

  const [role] = useRole() ;

  return (
    <div className="flex flex-col gap-5 px-6">

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


    </div>
  );
};

export default Navbar;
