import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import SectionHeader from "../../../../components/shared/SectionHeader";
import ServicesCard from "../../../../components/ServicesCard";
import Loader from "../../../../components/Loader";



const Service = () => {

    const axiosPublic = useAxiosPublic();

    const getServices = async () =>{
        const res = await axiosPublic.get("/services");
        return res;
    } 
    const {data,isLoading} = useQuery({
        queryKey: ['services'], 
        queryFn: getServices
    })

    if(isLoading){
        return <Loader></Loader>
    }

   

    return (
        <div className=" md:h-[80vh] my-28">
            <SectionHeader header={"Services"}></SectionHeader>
           
            <div className=" grid grid-cols-1 md:grid-cols-5 gap-2 md:w-[90vw] md:mx-auto">
            {
                data?.data?.map(items => <ServicesCard key={items.id} items={items}></ServicesCard> )
            }
            </div>
            
        </div>
    );
};

export default Service;