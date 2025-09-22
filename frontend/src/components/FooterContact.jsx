// FooterContact.jsx
import React from "react";
import { FaPhoneAlt, FaAngleDoubleRight } from "react-icons/fa";
import './FooterContact.css';
const FooterContact = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 mt-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
  <div className="relative inline-block text-center w-full">
  <h2 className="text-7xl font-extrabold text-center mb-6 tracking-widest">
    {"LET’S GET IN TOUCH".split("").map((char, i) => (
      <span
        key={i}
        className="touch-heading-letter inline-block"
        style={{ animationDelay: `${i * 0.15}s` }}
      >
        {char}
      </span>
    ))}
  </h2>

  {/* 🔴 Red Line */}
  <div className="w-3/4 h-[2px] bg-red-600 mx-auto mb-7"></div>
</div>




        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Ready To Start <span className="text-red-500">Work With Us?</span>
            </h3>
            <p className="text-gray-400 mb-4">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <div className="flex items-center gap-2 text-red-500 font-medium">
              <FaPhoneAlt />
              <span>8542057751</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Refund Policy
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Policy For Customers
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> FAQs
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Privacy Policy
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Important Links
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Refund Policy
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Policy For Customers
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> FAQs
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Privacy Policy
              </li>
              <li className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaAngleDoubleRight /> Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4179797066117!2d80.98132811504444!3d26.861107283152146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999560d14b74d63%3A0x4f35d8b5c5cdb9f7!2sLife%20Infotech!5e0!3m2!1sen!2sin!4v1674654862052!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
