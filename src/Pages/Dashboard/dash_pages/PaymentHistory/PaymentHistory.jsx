import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../components/Loader";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const getPaymentData = async () =>{
        const res =await axiosSecure.get(`/userPay/${user.email}`);
        return res;
    }
    const {data,isLoading,isFetching} = useQuery({
        queryKey:["[payHistory"],
        queryFn : getPaymentData
    })

    if(isLoading){
        return <Loader></Loader>
    }
    if(isFetching){
        return <Loader></Loader>
    }
    

    console.log(user?.email,data?.data[0]?.payment_history);
    return (
        <div>
            <SectionHeader header={"Payment History"}></SectionHeader>
            <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>#</th>
        <th className=" text-xl font-light">Month</th>
        <th className=" text-xl font-light">Amount</th>
        <th className=" text-xl font-light">Transaction ID</th>
      </tr>
    </thead>
    <tbody>
      {data?.data[0]?.payment_history.map((items,idx)=> <tr key={items._id} className="">
        <td></td>
        <td></td>
        <th className=" text-xl font-bold">{idx+1}</th>
        <td className=" text-xl font-bold">{items.month}</td>
        <td className=" text-xl font-bold">{items.amount} $</td>
        <td className=" text-xl font-bold">{items.transactionId}</td>
      </tr>)}
      
      </tbody>
      </table>
      </div>
            
        </div>
    );
};

export default PaymentHistory;