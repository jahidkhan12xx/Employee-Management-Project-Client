import React, { useEffect, useState } from "react";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useUserData from "../../../../hooks/useUserData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaTable } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";



const AllEmployeeList = () => {
    const [view,setView] = useState(true);
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
           <div className=" ml-5">
           <h2 className=" text-lg">{view?"Table view" : "Card view"}</h2>
            <button onClick={()=> setView(!view)} className=" btn btn-primary">{view? <FaTable/>:<CiCreditCard2/>}</button>
           </div>
           {
            view ?  <div className="overflow-x-auto">
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
                </div> : 
                <div className=" grid grid-cols-3 gap-8 my-3">
                     {
                        users.map(item => <div key={item._id} className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                        <div className="p-6">
                          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {item.name}
                          </h5>
                          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                           {item.role}
                          </p>
                        </div>
                        <div className="p-6 pt-0 flex gap-3 justify-center items-center">
                          <div>
                          {
                              item.role == "hr" ? <h2 className=" ">This user is HR</h2> :<button onClick={()=>handleHr(item.email,item.name)} className=" btn bg-blue-700 rounded-none text-white btn-sm btn-ghost">Make HR</button>
                          }
                          </div>
                          <div>
                          {
                              item.isFired ? <h2 className=" text-red-800 font-semibold">Fired</h2> : <button onClick={()=>handleFire(item.email,item.name)} className=" btn btn-sm btn-ghost bg-red-800 text-white">Fire</button>
                          }
                          </div>
                        </div>
                      </div>)
                     }
                </div>
           }
        </div>
    );
};

export default AllEmployeeList;