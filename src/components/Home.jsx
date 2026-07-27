import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Portfolio from './Portfolio'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // small timeout lets the page finish rendering before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <section id="hero" className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#F5EDE4] border-b">
      <Hero />
    </section>
            <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F5EDE4] border-b border-yellow-800">
        <Services />
      </section>
       <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Clients />
      </section>
      <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <About />
      </section>
      <section id="portfolio" className=" w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#F5EDE4] border-b border-yellow-800">
        <Portfolio />
      </section>
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <Contact />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-yellow-800">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-yellow-800">
        <Footer />
      </section>
    </div>
);
};
export default Home