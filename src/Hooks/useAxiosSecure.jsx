
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL : 'http://localhost:5555',
})

const useAxiosSecure = () => {

    const navigate = useNavigate() ;
    const {logOut , user} = useAuth() ;
    
    axiosSecure.interceptors.request.use((res) => {
        const token = localStorage.getItem('access-token') ;
        res.headers.authorization = `bearer ${token}` ;
        return res ;
    },(error) => {  
        console.log(error);
    })

    axiosSecure.interceptors.response.use((res) => {
        return res ;
    } , (error) => {
        if(error.response.status === 401 || error.response.status === 403 && !user){
            logOut()
            .then(() => {navigate('/login')})
            .then(() => {})
        }
        return Promise.reject(error) ;
    })

    return axiosSecure ;
};

export default useAxiosSecure;
