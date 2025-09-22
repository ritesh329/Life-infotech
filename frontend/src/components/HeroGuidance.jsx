// HeroGuidance.jsx
import React from "react";
import {
  FaPlay,
  FaProjectDiagram,
  FaChartLine,
  FaCubes,
  FaShareAlt,
  FaPencilRuler,
} from "react-icons/fa";
import './HeroGuidance.css';

const services = [
  { id: 1, title: "Brand Identity", icon: <FaProjectDiagram /> },
  { id: 2, title: "SEO Optimization", icon: <FaChartLine /> },
  { id: 3, title: "3D Animation", icon: <FaCubes /> },
  { id: 4, title: "Social Media", icon: <FaShareAlt /> },
  { id: 5, title: "Product Design", icon: <FaPencilRuler /> },
  { id: 6, title: "Design & Concept", icon: <FaPencilRuler /> },
];

const HeroGuidance = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16"
      style={{
        backgroundImage:
          "url('https://lifeinfotech.in/wp-content/uploads/2025/06/1_50hLmUVWAMM1n7Pzpo6GkA.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
            We’ll Ensure You Always Get <br /> the Best Guidance.
          </h1>
          <p className="mt-4 text-gray-300">
            Your Success, Guided by the Best Expertise. Please 7905079440
          </p>

          {/* Watch Video Button */}
      <div className="flex items-center gap-3 mt-6">
  <div className="relative">
    {/* 🔴 Play Button */}
    <button className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center text-white text-2xl shadow-lg hover:bg-red-700 transition pulse-ring">
      <FaPlay />
    </button>

    {/* 🔊 Sound Wave Effect */}
    <span className="absolute inset-0 rounded-full border-2 border-red-600 animate-ping-slow"></span>
    <span className="absolute inset-0 rounded-full border-2 border-red-600 animate-ping-slower"></span>
  </div>

  <span className="text-lg font-medium">Watch Video</span>
</div>

        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between bg-gray-800 bg-opacity-80 px-5 py-4 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full text-lg">
                  {service.icon}
                </div>
                <span className="font-medium">{service.title}</span>
              </div>
              <span className="text-xl">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGuidance;
