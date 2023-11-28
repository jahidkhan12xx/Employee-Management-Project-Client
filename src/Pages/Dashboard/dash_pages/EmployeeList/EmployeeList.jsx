import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/Loader";
import { FaCheck} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";




const EmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false)
    const [dataToPay, setDataToPay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);
    const handlePay = () => {
        // Implement your delete logic here using dataToDelete
        console.log("email:", dataToPay?.email);
        console.log("salary:", dataToPay?.salary);
        const selectedDate = `${month}/${year}`;

        axiosSecure.patch(`/payment/${dataToPay?.email}`,{month : selectedDate , amount : dataToPay?.salary})
        .then(res=>{
            console.log(res.data);
            if(res.data.modified == false){
              toast.error("Already Paid in this Month")
            }
            else{
              toast.success("Payment done")
            }
        })

    
        // Close the modal
        setOpen(false);
      };
      const selectedDate = `${month}_${year}`;

      

      console.log(dataToPay,month,year,selectedDate);
    
    

    
    const getEmployee = async () =>{
        const res = await axiosSecure.get("/users/employee")
        return res;
    }

    const {data,isLoading,refetch} = useQuery({
        queryKey:["employee"],
        queryFn:getEmployee
    })

    const handleVerify = (id) =>{
        console.log(id);
        axiosSecure.patch(`/users/${id}`,{isVerified : true})
        .then(res=>{
            console.log(res.data);
            toast("User Verification Success")
            refetch();
        })
       
    }

    if(isLoading){
        return <Loader></Loader>
    }

    // const handlePay = (id,salary) =>{
    //     console.log(id,salary);

    // }

    console.log(data?.data);
    return (
        <div>
            <SectionHeader header={"Employee List"}></SectionHeader>
            <div className="overflow-x-auto">
  <table className="table my-16">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th className=" text-lg  text-blue-800">Name</th>
        <th className=" text-lg  text-blue-800">Email</th>
        <th className=" text-lg  text-blue-800">Bank Account</th>
        <th className=" text-lg  text-blue-800">Salary</th>
        <th className=" text-lg  text-blue-800">Verification</th>
        <th className=" text-lg  text-blue-800">Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { data?.data.map((employees,idx) => <tr key={ employees._id}>
        <th className=" text-blue-800">
          <label>
           {idx+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={employees.imgURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{employees.name}</div>
              <div className="text-sm opacity-50">{employees.role}</div>
            </div>
          </div>
        </td>
        <td>
         {employees.email}
          
        </td>
        <td>{employees.bank_acc_num}</td>
        <th>
         {employees.salary}
        </th>
        <th>
          <button onClick={()=>handleVerify(employees._id)}  className="btn btn-ghost btn-sm">{employees?.isVerified ? <FaCheck></FaCheck> : <ImCross></ImCross> }</button>
        </th>
        <th>
          <button className={`btn btn-primary btn-sm `} onClick={() => {
          // Set the data you want to pass to the handleDelete function
          setDataToPay({ email: employees.email,salary : employees.salary});
          setOpen(true);
        }} disabled={!employees?.isVerified} >Pay</button>
        </th>
        <th>
          <Link to={`/dashboard/details/${employees.email}`}><button  className="btn btn-ghost btn-sm bg-red-800 text-white">details</button></Link>
        </th>

        {/* Modal section */}
        <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-[50vw]">
         
          <div className="mx-auto my-4 w-[30vw]">
            <h3 className="text-lg font-black text-gray-800">Confirm Payment</h3>
            <p className=" text-sm text-gray-500">Salary : {dataToPay?.salary} $</p>
            <div className=" my-9 ">
            <label className=" mr-5">
        Month:
        <select defaultValue="default" className=" px-2 ml-2"
          
          onBlur={(e)=> setMonth(e.target.value)}
          
          
          placeholder="Month"
          
        >
            <option disabled  value="default">Select Month</option>
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

      <label>
        Year:
        <input className=" px-2 ml-2"
          type="text"
          onBlur={(e)=> setYear(e.target.value)}
          
          placeholder="last two digit of year"
          maxLength="2"
        />
      </label>

            </div>
            <p className="text-sm text-gray-500">
              Are you sure you want do payment?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-1/2" onClick={handlePay}>
              Confirm
            </button>
            <button
              className="btn btn-light w-1/2"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      </tr>)}
      
      </tbody>
      </table>
      </div>


        </div>
    );
};

export default EmployeeList;