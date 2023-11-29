import { useEffect, useState } from "react";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useUserData from "../../../../hooks/useUserData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const AllEmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const [userData,isLoading,refetch] = useUserData();
    const [users,setUsers] = useState();
    useEffect(()=>{
        const result = userData.filter(item => item.role !== "admin" && item.isVerified === true);
        setUsers(result)

    },[userData])

    const handleHr = (email,name) =>{
        console.log(email);

        axiosSecure.patch(`/updateRole/${email}`,
        )
        .then(res=>{
            console.log(res.data);
            toast.success(`${name} is now HR`)
            refetch();
        })

    }

    const handleFire = (email,name) =>{
        console.log(email);

        axiosSecure.patch(`/fireEmployee/${email}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                toast.success(`${name} is Fired`)
                refetch();
            }
        })

    }

    console.log(users);
    return (
        <div>
            <SectionHeader header={"Employee List"}></SectionHeader>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className=" text-xl font-bold">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Designation</th>
        <th>Make HR</th>
        <th>Fire</th>
      </tr>
    </thead>
    <tbody className=" text-xl font-light ">
      {
        users?.map((us,idx) =>  <tr key={us._id}>
            <td>{idx+1}</td>
            <td>{us.name}</td>
            <td className=" uppercase ">{us.role}</td>
            <td className="">
                {
                    us.role == "hr" ? <h2 className=" ml-5">HR</h2> :<button onClick={()=>handleHr(us.email,us.name)} className=" btn bg-blue-700 rounded-none text-white btn-sm btn-ghost">Make HR</button>
                }
                
                </td>
            <td>
                {
                    us.isFired ? <h2 className=" text-red-800 font-semibold">Fired</h2> : <button onClick={()=>handleFire(us.email,us.name)} className=" btn btn-sm btn-ghost">X</button>
                }
            </td>
          </tr>)
      }
     
      </tbody>
      </table>
      </div>
        </div>
    );
};

export default AllEmployeeList;