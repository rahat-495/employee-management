
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const DashHome = () => {
    
    const {user} = useAuth() ;
    const [role] = useRole() ;

    return (
        <div className="w-3/4 my-20 mx-auto">
            <h1 className="hand text-3xl my-10"><span className="font-semibold gro ">WellCome Back </span>{user?.displayName}</h1>
            <div className="hero min-h-[50vh] my-20 rounded-lg" style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/03/12/37/360_F_303123713_D396PWXkVS4pLX9ucYwsRa8X3ybyMJFP.jpg)'}}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <div className="gro flex items-center justify-center flex-col">
                            <img className="rounded-full w-h-28 h-28 mb-3" src={user?.photoURL} alt="" />
                            <p className="capitalize text-white bg-[#BEBEFF] px-3 py-1 rounded-2xl my-3">{role?.role}</p>
                            <h1 className="text-center">{user?.displayName}</h1>
                            <h1 className="text-center">{user?.email}</h1>
                            <h1 className="text-center">{user?.uid}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;
