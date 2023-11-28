import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth;
    const  [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default AdminRoute;