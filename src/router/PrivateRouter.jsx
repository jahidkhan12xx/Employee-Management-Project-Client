import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";


const PrivateRouter = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;