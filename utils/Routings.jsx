import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
import SocialMedia from "../src/services/SocialMedia";
import PPC from "../src/services/PPC";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";
import Influencer from "../src/services/InfluencerMarketing";


const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/tsmediacollective/" element={<Home />} />
        <Route path="social-marketing" element={<SocialMedia />} />
        <Route path="/PPC" element={<PPC />} />
        <Route path="/seo-optimization" element={<Seo />} />
        <Route path="/campagin-creation" element={<Campaign />} />
         <Route path="/influencer-marketing" element={<Influencer />} />
      </Routes>
    </div>
  );
};

export default Routings;
