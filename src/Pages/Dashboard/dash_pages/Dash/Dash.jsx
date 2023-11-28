import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useUserData from "../../../../hooks/useUserData";


const Dash = () => {
    const [currentUser,setCurrentUser] = useState([]);
    const {user} = useAuth();
    const [data,isLoading,role] = useUserData();
    

    useEffect(()=>{
        const cUser = data?.filter(u => u.email == user.email);
        setCurrentUser(cUser)
    },[data,user])

    console.log("is HR", role == "hr");

    


    return (
        <div>
            {
                currentUser?.map(item=> <div key={item._id}>
                    <div className=" flex w-full font-light h-screen justify-center items-center flex-col "><h2 className=" text-6xl text-center ">
                    Welcome to DashBoard, <span className=" font-bold text-blue-600">{item?.name}</span> </h2>
                    <div className="  my-10">
                       <div className=" flex gap-6 justify-center items-center">
                       <img className=" h-32  w-32 rounded-full" src={item?.imgURL} alt="" />
                    <div className=" flex flex-col items-start">
                    <p className=" text-2xl text-center " >ROLE : <span className=" text-blue-800 font-bold  uppercase">{item?.role}</span></p>
                    <p className=" text-2xl text-center " ><span className=" uppercase ">{item?.role}</span>_ID : <span className=" text-blue-800 font-bold ">{item?._id}</span></p>
                    <p className=" text-2xl text-center " >BANK_ACC_NUMBER : <span className=" text-blue-800 font-bold  "> {item?.bank_acc_num}</span></p>
                    <p className=" text-2xl text-center " >EMAIL : <span className=" text-blue-800 font-bold  ">{item?.email}</span></p>
                       </div>
                    </div>
                    </div>
                     </div>
                   
                </div>)
            }
        </div>
    );
};

export default Dash;