import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Loader";
import { useEffect, useState } from "react";
import useEmployeeData from "../../../../hooks/useEmployeeData";


const Progress = () => {
    const axiosSecure = useAxiosSecure();
    const [name,setName] = useState("")
    const [month,setMonth] = useState("")
    const [userData] = useEmployeeData();
    const getProgressData = async()=>{
        const res = await axiosSecure(`/progress?name=${name}&month=${month}`)
        return res;
    }

   

    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey:["progressData"],
        queryFn: getProgressData
    })
    useEffect(()=>{
        refetch();
    },[month,name])
    console.log(name,month);
    // const convertToDateMonth = (dateString) => {
    //     const date = new Date(dateString);
    //     const options = { month: "long" };
    //     return new Intl.DateTimeFormat("en-US", options).format(date);
    //   };
     

    if(isLoading){
        return <Loader></Loader>
    }
    // if(isFetching){
    //     return <Loader></Loader>
    // }
    
    const uniqueNames = Array.from(new Set(data?.data.map((task) => task?.name)));
    // const uniqueMonths = Array.from(
    //     new Set(data?.data.map((task) => convertToDateMonth(task?.date)))
    //   );
    console.log(userData);
    return (
        <div>
            <SectionHeader header={"Progress"}></SectionHeader>

            <form className=" my-5 ml-4 flex gap-3">
                
                <label> <span className=" text-lg">Name:</span>
                <select className=" p-2 ml-2" onChange={(e)=> setName(e.target.value)} name="task" id="">
                    <option  value="">All</option>
                {userData?.map((user, idx) => (
                
            <option value={user?.name} key={idx}>{user?.name}</option>
          ))}
                </select>
                </label>
                <label> <span className=" text-lg">Month :</span>
                <select className=" p-2 ml-2" onChange={(e)=> setMonth(e.target.value) } name="month" id="">
                    <option  value="">All</option>
         <option value="01">January</option>
         <option value="02">February</option>
         <option value="03">March</option>
         <option value="04">April</option>
         <option value="05">May</option>
         <option value="06">June</option>
         <option value="07">July</option>
         <option value="08">August</option>
         <option value="09">September</option>
         <option value="10">October</option>
         <option value="11">November</option>
         <option value="12">December</option>
        </select>
                </label>
            </form>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className=" text-lg text-blue-800">
        <th></th>
        <th>Name</th>
        <th>Task</th>
        <th>Work-Duration</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.data.map((dat,idx) => <tr key={dat._id}>
            <th>{idx+1}</th>
            <td>{dat?.name}</td>
            <td>{dat?.task}</td>
            <td>{dat?.hour} hours</td>
            <td>{dat?.date}</td>
          </tr>)
      }
      
      </tbody>
      </table>
      </div>
        </div>
    );
};

export default Progress;