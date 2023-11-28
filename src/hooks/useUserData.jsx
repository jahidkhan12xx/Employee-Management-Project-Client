import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useUserData = () => {
    const {user} = useAuth();
    const [role,setRole] = useState();
    const [userc,setUserc] = useState();
    const axiosSecure = useAxiosSecure();
    const getUsers = async() =>{
        const res = await axiosSecure.get("/users")
        return res;
    }

    const {data,isLoading,refetch} = useQuery({
        queryKey:["users"],
        queryFn:getUsers
    })
    // useEffect(() => {
    //     const cUser = data?.data?.filter((u) => u.email == user.email);
    //     setUserc(cUser)
    //     const rol = cUser?.map(item => setRole(item.role))
       
    //   }, [data, user.email]);
    

    
    return [data?.data,isLoading,refetch]
};

export default useUserData;