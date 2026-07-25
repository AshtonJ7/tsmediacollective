import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("You Subscribed our newsletter");
    e.target.reset();
  };

  return (
    <div data-aos="fade-down" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">
        Join my Newsletter
      </h1>
      <div className="flex justify-center items-center mt-2">
    <div className="h-1 w-16 rounded" style={{backgroundColor: '#8e1616'}}></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 p-3 md:p-0">
        Subscribe to my newsletter and receive the latest news about our
        products and services!
      </p>

      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-3"
      >
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="email@gmail.com"
          className="md:w-1/2 w-11/12 px-6 py-3 rounded-3xl outline-none border border-zinc-300 focus:border-orange-600"
        />
        <button className="bg-[#1F3D3A] hover:bg-yellow-700 hover:shadow hover:shadow-yellow-700 text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
