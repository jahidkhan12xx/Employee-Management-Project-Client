import { useLoaderData, useParams } from "react-router-dom";
import SectionHeader from "../../../../components/shared/SectionHeader";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader";
import { Bar, BarChart, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";


const EmployeeDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // const [month,setMonth] = useState([]);
    // function getMonthNameFromFormat(monthFormat) {
    //     const [month, year] = monthFormat.split('/');
    //     const monthNumber = parseInt(month, 10);
      
    //     const months = [
    //       'January', 'February', 'March', 'April',
    //       'May', 'June', 'July', 'August',
    //       'September', 'October', 'November', 'December'
    //     ];
      
    //     if (monthNumber >= 1 && monthNumber <= 12) {
    //       return `${months[monthNumber - 1]} ${year}`;
    //     } else {
    //       return 'Invalid month format';
    //     }
    //   }

    //   const monthNames = month?.map(getMonthNameFromFormat);
    //  console.log(monthNames);
    
    
    const axiosPublic = useAxiosPublic();

    const getPayment = async () =>{
        const res = await axiosPublic.get(`/userPayment/${id}`)
        return res;
    }

    const {data:userData , isLoading} = useQuery({
        queryKey:["userPaymentData"],
        queryFn:getPayment
    })
    // useEffect(()=>{
    //     const history = userData?.data?.payment_history;
    //     const mont = history?.map(date=> date?.month)
    //     setMonth(mont)
    // },[userData])

    if(isLoading){
        return <Loader></Loader>
    }
    // console.log(month);
    
    
    return (
        <div>
            <SectionHeader header={"Employee Details"}></SectionHeader>

            <div className=" flex justify-center items-center gap-5">
                <img className=" w-28 h-28 rounded-full" src={data?.imgURL} alt="" />
                <div>
                    <p className=" text-3xl"><span className=" font-light">Name</span> : <span className=" font-bold text-blue-700">{data?.name}</span></p>
                    <p className=" text-3xl"><span className=" font-light">Designation</span> : <span className=" font-bold text-blue-700">{data?.role}</span></p>

                </div>
            </div>

            <div className="  mx-auto">
            <ResponsiveContainer className="mx-auto my-20" width="50%" aspect={3}>
                <BarChart data={userData?.data?.payment_history} width={400} height={400}>
                    <XAxis dataKey="month">
                    <Label value="Dates of Payments" offset={0} position="insideBottom" />
                    </XAxis>
                    
                    <YAxis dataKey="amount" label={{ value: 'Payment amount ', angle: -90, position: 'insideLeft' ,offset :0 }}>
                    
                    </YAxis>
                    <Tooltip/>
                    
                    <Bar dataKey="amount" fill="blue" />
                </BarChart>
            </ResponsiveContainer>

            </div>
            
        </div>
    );
};

export default EmployeeDetails;