import React, { useRef } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import img from "../img/founding-partner.png";

// aos

const Hero = () => {
  const myElement = useRef(null);

// useEffect(() => {
  //   gsap.to(myElement.current, {
   //    duration: 0,
 //      y: 0,
  //     yoyo: true,
 //      repeat: 0,
//       ease: "power1.inOut",
 //    });
 //  }, []);// 

//   useEffect(() => {
//     AOS.init();
 //  });



  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 primary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
         Data-Driven Marketing That Turns Attention Into Revenue
        </h1>
        <p className="text-xl mt-5 text-gray-600 secondary-font">
       TS Media Collective helps brands grow through paid media, influencer marketing, social media strategy and AI-powered automation.  </p>
       <p className="text-xl mt-5 text-gray-600 secondary-font">
       We create modern marketing systems designed to increase visibility, improve customer journeys and drive measurable business growth.        </p>
<div className="flex flex-col items-center lg:items-start mb-12 lg:mb-0 gap-3 mt-10">
  <a href="#contact" className="">
    <CtaButton name={"Book A Discovery Call"} />
  </a>
  <a href="#services" className="">
    <CtaButton name={"View Services"} />
  </a>
</div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeblQG9WQnYCjMENf08KBCvsIWQICQ-hzerzsbDnDBWFPq2Rg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
          <img ref={myElement} className="image" src={img} alt="img" />
        </a>
      </div>

    </div>
  );
};

export default Hero;