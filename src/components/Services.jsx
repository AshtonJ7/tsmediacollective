import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineCampaign } from "react-icons/md";
import { RiSeoLine } from "react-icons/ri";


// aos

import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();


  // const clickHandler = () => {
  //   navigate("social-marketing");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="primary-font text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
       <div className="h-1 w-16 rounded" style={{backgroundColor: '#8e1616'}}></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg secondary-font">
        Whether you're starting from scratch or looking to fine-tune your existing marketing, I offer tailored services designed to meet your business where it’s at and take it further.
      </p>
      <div
        className="flex flex-col lg:flex-row items-stretch gap-5"
        data-aos="fade-up"
      >
                <div onClick={() => navigate("")}>
         <Card
    img={<RiAdvertisementLine  />}
    title={"Paid Media Advertising"}
    desc={["Meta Ads", " TikTok Ads", "LinkedIn Ads", "LinkedIn Ads", "Google Ads"]}
  />
      </div>

         <div onClick={() => navigate("")}>
          <Card
            img={<IoIosPeople  />}
            title={"Influencer Marketing"}
            desc={["Creator Partnerships", " TikTok Ads", "UGC Campaigns", "Influencer Strategy"]}
          />
        </div>

        <div onClick={() => navigate("")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Social Media Strategy"}
             desc={["Content Planning", "Community Growth", "Reporting & Analytics"]}

          />
        </div>
        <div onClick={() => navigate("")}>
          <Card
            img={<MdOutlineCampaign  />}
            title={"AI Automation"}
            desc={["AI Chatbots", "WhatsApp Automation", "Lead Generation Systems", "Email Automation"]}
          />
        </div>
        

     <div onClick={() => navigate("")}>
          <Card
            img={<RiSeoLine  />}
            title={"Training & Capacity Building"}
           desc={["Digital Marketing Training", "AI Skills Workshops", "Graduate Marketing Programmes"]}
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
