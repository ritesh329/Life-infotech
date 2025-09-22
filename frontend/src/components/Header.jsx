import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTimes,
  FaTiktok,
  FaChevronDown,
  FaBars,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔹 Top Dark Blue Bar */}
      <div className="bg-[#0d1b3e] text-white text-sm hidden md:flex justify-between items-center px-6 py-2">
        {/* Left: Email + Phone */}
        <div className="flex items-center gap-2">
          <MdEmail className="text-lg text-red-500" />
          <span>info@lifeinfotech.in, 8542057751</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaGooglePlusG />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaTimes />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* 🔹 Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-8 bg-white shadow relative">
        {/* Left Red Background + Logo */}
        <div className="relative flex items-center">
          <div className="bg-[#e62e2d] h-[80px] w-[180px] rounded-br-[50px] flex items-center justify-center">
            <img
              src="https://lifeinfotech.in/wp-content/uploads/2025/06/cropped-logolifeinfotech.jpg"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Center Menu */}
        <nav className="flex-1">
          <ul className="flex items-center justify-center gap-6 text-[15px] font-medium text-[#0d1b3e]">
            <li className="text-[#e62e2d] cursor-pointer">Home</li>

            {[
              "About Us",
              "Services",
              "Training",
              "Life Solution",
              "Our Industry",
              "Packages",
              "Our Client",
              "Contact Us",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-1 cursor-pointer hover:text-[#e62e2d]"
              >
                {item} <FaChevronDown className="text-xs" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Call Anytime */}
        <div className="flex items-center gap-2 pr-4">
          <div className="bg-[#e62e2d] text-white w-10 h-10 rounded-full flex items-center justify-center phone-ring">
            <FaPhoneAlt className="text-sm" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#0d1b3e]">Call Anytime</p>
            <p className="text-[#0d1b3e] font-bold text-sm">8542057751</p>
          </div>
        </div>
         </div>


      {/* 🔹 Mobile Navbar */}
      <div className="md:hidden bg-[#e62e2d] relative">
        <div className="flex justify-between items-center px-4 py-3 bg-white">
          {/* Logo */}
          <img
            src="https://lifeinfotech.in/wp-content/uploads/2025/06/cropped-logolifeinfotech.jpg"
            alt="Logo"
            className="w-10 h-10"
          />

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl text-[#0d1b3e]" />
            ) : (
              <FaBars className="text-2xl text-[#0d1b3e]" />
            )}
          </button>
        </div>

        {/* Down Arrow Circle */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow">
            <FaChevronDown className="text-[#0d1b3e]" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="bg-white shadow-md">
            <ul className="flex flex-col items-start gap-4 px-6 py-4 text-[#0d1b3e] font-medium">
              <li className="text-[#e62e2d]">Home</li>
              {[
                "About Us",
                "Services",
                "Training",
                "Life Solution",
                "Our Industry",
                "Packages",
                "Our Client",
                "Contact Us",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#e62e2d]"
                >
                  {item} <FaChevronDown className="text-xs" />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
