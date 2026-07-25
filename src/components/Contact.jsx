import React, { useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import CtaButton from "./CtaButton";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
 const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("Message sent Successfully");
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="h-1 w-16 rounded" style={{ backgroundColor: '#8e1616' }}></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        <strong> Let's talk about how we can grow your business.</strong> <br></br>
        Reach out today and get a personalized digital marketing plan that fits your goals.
      </p>

      <div className="lg:flex gap-6">
        {/* map */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] mb-7 lg:mb-0" style={{ borderTopColor: '#8e1616', borderBottomColor: '#8e1616' }}
        >

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-slate-800">info@example.com</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <FaLinkedin />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                LinkedIn
              </h2>
              <p className="text-sm text-slate-800">
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-800">
                  Connect with us
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <FaInstagram />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Instagram
              </h2>
              <p className="text-sm text-slate-800">
                <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-800">
                  Follow us @yourcompany
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-yellow-800"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="company">Company</label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    placeholder="Your Company Ltd."
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="website">Website</label>
                  <input
                    {...register("website")}
                    type="url"
                    id="website"
                    placeholder="https://yourwebsite.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="service">Service Required</label>
                  <select
                    {...register("service", { required: true })}
                    id="service"
                    defaultValue=""
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none bg-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="SEO">SEO</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Paid Advertising">Paid Advertising</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-yellow-800 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center m-3">
              <CtaButton name={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;