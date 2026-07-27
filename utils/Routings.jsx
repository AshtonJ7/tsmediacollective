import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Home />} />
        <Route path="/services/social-marketing" element={<SocialMedia />} />
        <Route path="/services/ppc" element={<PPC />} />
        <Route path="/services/seo-optimization" element={<Seo />} />
        <Route path="/services/campaign-creation" element={<Campaign />} />
        <Route path="/services/influencer-marketing" element={<Influencer />} />
      </Routes>
    </div>
  );
};
export default Routings;