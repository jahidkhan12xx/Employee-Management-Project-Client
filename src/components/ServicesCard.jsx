import { FaBeer } from "react-icons/fa";
// Import necessary FontAwesome libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import {
  faDesktop,
  faMobileAlt,
  faCogs,
  faTools,
  faChartPie,
  faRobot,
  faLock,
  faGraduationCap,
  faComment,
  faChartBar,

  // Add other icons here
} from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the FontAwesome library
library.add(faDesktop,
  faMobileAlt,
  faCogs,
  faTools,
  faChartPie,
  faRobot,
  faLock,
  faGraduationCap,
  faComment,
  faChartBar, /* Add other icons here */);


const ServicesCard = ({items}) => {
    console.log(items);
    
    return (
        <div data-aos="fade-up"  className=" text-center">
          
            <div className="relative flex flex-col mt-6 text-white border-2 border-white  shadow-md md:w-[16vw] md:h-[28vh] rounded-xl bg-clip-border">
  <div className="p-6">
  <div className=" text-center my-4"><FontAwesomeIcon icon={items?.icon} size="3x" className="service-icon" /></div>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {items?.title}
    </h5>
    <p className="block font-sans text-base opacity-70 antialiased font-light leading-relaxed text-inherit">
     {items?.description}
    </p>
  </div>
  
</div>
        </div>
    );
};

export default ServicesCard;