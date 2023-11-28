import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Loader from "../../../../components/Loader";
import SectionHeader from "../../../../components/shared/SectionHeader";
import TestimonialCard from "../../../../components/TestimonialCard/TestimonialCard";






const Testimonial = () => {

    const axiosPublic = useAxiosPublic();

    const getTestimonial = async() =>{
        const res = await axiosPublic.get("/testimonial")
        return res;
    }

    const {data,isLoading} = useQuery({
        queryKey: ["testimonial"],
        queryFn:getTestimonial
    })

    if(isLoading){
        return <Loader></Loader>
    }
    console.log(data);
    return (
        <div className=" md:h-[80vh] my-28 bg-transparent w-[90vw] mx-auto">
            <SectionHeader header="Testimonials"></SectionHeader>
            
       
          <div className=" grid grid-cols-1 md:grid-cols-3 my-28 text-white">
          {
            data?.data?.map(items => <TestimonialCard key={items._id} item={items}></TestimonialCard>)
          }
          </div>
      
            
             
        </div>
    );
};

export default Testimonial;