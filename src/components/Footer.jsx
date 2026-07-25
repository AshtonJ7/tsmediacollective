import React, {useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div data-aos="fade-right" >
        <div>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">info@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Useful links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <ul>
          <li>
            <a href="#" className="text-zinc-700">
              
            </a>
                 </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
   
        <div className="flex justify-between pr-5 mt-5">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoTwitter size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoFacebook size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoInstagram size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600">
            <IoLogoLinkedin size={"26px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
