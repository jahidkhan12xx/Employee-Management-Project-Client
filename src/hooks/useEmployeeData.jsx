import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeeData = () => {
    
    
   
    const axiosSecure = useAxiosSecure();
    const getUsers = async() =>{
        const res = await axiosSecure.get("/users/employee")
        return res;
    }

    const {data,isLoading,refetch} = useQuery({
        queryKey:["users"],
        queryFn:getUsers
    })
    
    

    
    return [data?.data,isLoading,refetch]
};

export default useEmployeeData;