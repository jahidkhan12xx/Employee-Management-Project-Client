import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import Service from "./components/Services/Service";
import { Parallax } from 'react-parallax';
import bg from "../../assets/ss.jpg"
import bg1 from "../../assets/nasa.jpg"
import bg2 from "../../assets/a.jpg"
import Testimonial from "./components/Testimonial/Testimonial";
import BasicAccordion from "./components/FAQ/FAQ";
import Newsletter from "./components/NewsLetter/NewsLetter";
import NewsletterComponent from "./components/NewsLetter/NewsLetter";


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
      <Parallax
        blur={10}
        bgImage={bg2}
        bgImageAlt="the cat"
        strength={800}
      >
       <BasicAccordion></BasicAccordion>
      </Parallax>
      <Parallax
        blur={10}
        bgImage={bg2}
        bgImageAlt="the cat"
        strength={800}
      >
        <NewsletterComponent></NewsletterComponent>
      </Parallax>
    </div>
  );
};

export default Home;
