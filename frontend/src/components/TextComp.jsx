// SectionHeader.jsx
import React from "react";

const TextComp =  () => {
  return (
    <section className="bg-white py-12 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
        
        {/* Left Side (Text) */}
        <div>
          <span className="bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full">
            WHAT WE DO FOR YOU
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            We can inspire and Offer <br /> Different Services
          </h2>
        </div>

        {/* Right Side (Button) */}
        <div className="mt-6 md:mt-0">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
            See All Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default TextComp;
