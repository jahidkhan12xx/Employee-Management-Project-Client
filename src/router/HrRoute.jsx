import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useHR from "../hooks/useHR";




const HrRoute = ({children}) => {
   
    const {user,loading} = useAuth();
    const [isHR, isHRLoading] = useHR();
 

    if(loading || isHRLoading){
        return <Loader></Loader>
    }
    
console.log(isHR);
    if(user && isHR){
        return children;
    }
    
    return <Navigate to="/login" replace></Navigate>
};

export default HrRoute;