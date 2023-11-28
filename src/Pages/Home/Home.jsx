import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import Service from "./components/Services/Service";
import { Parallax } from 'react-parallax';
import bg from "../../assets/ss.jpg"
import bg1 from "../../assets/nasa.jpg"
import Testimonial from "./components/Testimonial/Testimonial";


const Home = () => {
  
  
  return (
    <div>
      <Helmet>
        <title>PB | HOME</title>
      </Helmet>

      <Banner></Banner>
      <Parallax
        blur={15}
        bgImage={bg}
        bgImageAlt="the cat"
        strength={800}
      >
        <Service></Service>
      </Parallax>
      <Parallax
        blur={10}
        bgImage={bg1}
        bgImageAlt="the cat"
        strength={800}
      >
       <Testimonial></Testimonial>
      </Parallax>
    </div>
  );
};

export default Home;
