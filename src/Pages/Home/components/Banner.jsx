import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className=' h-[90vh]'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=' w-full h-full bg-blue-950 opacity-75 absolute'></div>
            <div className=' md:text-6xl text-3xl font-bold w-full absolute text-white flex flex-col justify-center items-center h-full'><h2 className=' md:text-5xl text-3xl font-light'>Welcome to Coder Booth</h2> <h2 className=''>The House of Programmers</h2></div>
            <img className=' ' src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
          <SwiperSlide>
          <div className=' w-full h-full bg-blue-950 opacity-75 absolute'></div>
            <div className=' md:text-6xl text-3xl font-bold w-full absolute text-white flex flex-col justify-center items-center h-full'><h2 className=' text-5xl font-light'>In Past 10 Years</h2> <h2 className=''>We create the best products</h2></div>
            <img className=' ' src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
          <SwiperSlide>
          <div className=' w-full h-full bg-blue-950 opacity-75 absolute'></div>
            <div className=' md:text-6xl text-3xl font-bold w-full absolute text-white flex flex-col justify-center items-center h-full'><h2 className=' text-4xl font-light'>In last 5 years</h2> <h2 className=''>Our Programmers are the best in this industry  </h2></div>
            <img className=' ' src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
         
        </Swiper>
      </div>
    );
};

export default Banner;