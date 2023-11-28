import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Loader";


const WorkSheetEmployee = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    console.log(user);

    const getWorkSheet = async () =>{
        const res = await axiosSecure.get(`/userSheet/${user?.email}`)
        return res;
    }

    const {data,isLoading,refetch} = useQuery({
        queryKey:["userSheet"],
        queryFn: getWorkSheet

    })

    if(isLoading){
        <Loader></Loader>
    }

    console.log(data?.data);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const task = form.task.value;
        const hour = form.hour.value;
        const date = form.date.value;
        const name = user.displayName;
        const email = user.email;

        const workData = {task,hour,date,name,email}

        console.log(workData);

        axiosSecure.post("/workSheet",workData)
        .then(res=>{
            console.log(res.data);
            refetch();
        })

    }
    return (
        <div>

            <SectionHeader header={"Work Sheet"}></SectionHeader>
            <form onSubmit={handleSubmit}>

            <div className="overflow-x-auto my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task</th>
        <th>Hour</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
        <tr>
            <td></td>
            <td> <select className=" rounded-md px-2 py-1 " name="task" id="">
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="content">Content</option>
                <option value="paper-work">Paper Work</option>
            </select></td>
            <td>
                <input className=" rounded-md px-2 py-1 w-12 mr-2" name="hour"  type="number" /> hr
            </td>
            <td>
                <input className=" rounded-md px-2 py-1 w" name="date" type="date" /> 
            </td>
            <td>
                <input className=" btn btn-ghost bg-blue-800 btn-sm text-white" type="submit" value="Submit" />
            </td>
           
        </tr>
    </tbody>
    
    
    
    
   
    </table>
    </div>
    </form>
    <SectionHeader header={"Submitted Work"}></SectionHeader>
    <div className="overflow-x-auto my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className=" text-lg ">Task</th>
        <th className=" text-lg ">Work-Duration</th>
        <th className=" text-lg ">Date</th>
        
      </tr>
    </thead>
    
    <tbody>
        {
            data?.data.map(dat => <tr key={dat._id}>
                <td></td>
                <td className=" text-xl font-semibold text-blue-800 uppercase"> {dat.task}</td>
                <td className=" text-xl font-semibold text-blue-800"> {dat.hour} hours</td>
                <td className=" text-xl font-semibold text-blue-800"> {dat.date}</td>
               
                
               
            </tr>)
        }
    </tbody>
    
    
    
    
   
    </table>
    </div>
            
        </div>
    );
};

export default WorkSheetEmployee;