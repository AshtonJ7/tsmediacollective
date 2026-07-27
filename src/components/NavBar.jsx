import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown, IoClose } from "react-icons/io5";
import CtaButton from "./CtaButton";
import { Link, useLocation } from "react-router-dom";
import img from "../img/favicon.png";
import About from './About'

const NAV_LINKS = [
  { name: "Home", to: "/#hero" },
 { name: "Services", to: "/#services" },
  { name: "About", to: "/#about" },
  { name: "Latest Offer", to: "/#portfolio" },
  { name: "Contact", to: "/#contact" },
];

const BLOG_LINKS = [
  { name: "Marketing Strategy", to: "" },
  { name: "Paid Media", to: "" },
  { name: "AI & Automation", to: "" },
  { name: "Hospitality Marketing", to: "" },
  { name: "Tourism & Destination Marketing", to: "" },
  { name: "Industry Insights", to: "" },
];

const linkClasses =
  "text-gray-800 hover:text-[#6F4E37] text-lg tracking-wide font-light transition-colors";

const NavBar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setShow(false);
    setMobileBlogOpen(false);
  }, [location.pathname]);

  // Close desktop dropdown on outside click (covers keyboard/touch edge cases)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        dropdownRef.current.querySelector("details")?.removeAttribute("open");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <nav
      aria-label="Main navigation"
      className="w-full xl:h-16 lg:h-18 h-14 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font lg:sticky lg:top-0 lg:z-50 bg-white"
    >
      {/* logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 w-auto"
          src={img}
          alt="TS Media logo"
        />
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-light text-[#7A6960]">
          TS Media
        </span>
      </Link>

      {/* desktop menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} to={link.to} className={linkClasses}>
            {link.name}
          </Link>
        ))}

        {/* Blog dropdown — group-hover for mouse, focus-within for keyboard */}
   <div ref={dropdownRef} className="relative group focus-within:text-[#6F4E37]">
  <button
    type="button"
    className={`flex items-center gap-1 ${linkClasses}`}
  >
    Blog
    <IoChevronDown
      className="mt-1 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
      size={"14px"}
      aria-hidden="true"
    />
  </button>

  <div className="absolute left-0 top-full h-3 w-full" />

  <div
    role="menu"
    className="absolute right-0 top-[calc(100%+0.75rem)] flex flex-col
               bg-white shadow-xl rounded-md py-2 w-48 z-20
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               group-focus-within:opacity-100 group-focus-within:visible
               transition-all duration-200"
  >
    {BLOG_LINKS.map((link) => (
      <Link
        key={link.name}
        to={link.to}
        role="menuitem"
        className="px-3 py-1.5 text-gray-800 hover:text-[#6F4E37] hover:bg-gray-50 text-sm font-light whitespace"
      >
        {link.name}
      </Link>
    ))}
  </div>
</div>
      </div>

      {/* mobile menu toggle */}
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setShow(!show)}
        aria-label={show ? "Close menu" : "Open menu"}
        aria-expanded={show}
      >
        {show ? <IoClose size={"28px"} /> : <RxHamburgerMenu size={"28px"} />}
      </button>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} to={link.to} className={linkClasses}>
              {link.name}
            </Link>
          ))}

          {/* Blog accordion (mobile) */}
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
              aria-expanded={mobileBlogOpen}
              className={`flex items-center gap-1 ${linkClasses}`}
            >
              Blog
              <IoChevronDown
                className={`transition-transform duration-200 ${
                  mobileBlogOpen ? "rotate-180" : ""
                }`}
                size={"14px"}
                aria-hidden="true"
              />
            </button>
            {mobileBlogOpen && (
              <div className="flex flex-col gap-2 mt-2">
                {BLOG_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-gray-600 hover:text-[#6F4E37] text-base font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="mt-2 ml-2 flex justify-center items-center">
            <CtaButton name={"Get Started"} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;