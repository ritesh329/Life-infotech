// AutoSliderHero.jsx
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Transform Your Business Digitally",
    subtitle: "Custom Software & Web Development",
    image: "https://images.unsplash.com/photo-1556655848-f2c0a0d26c4a?auto=format&fit=crop&w=1470&q=80",
    button: "Get Started"
  },
  {
    id: 2,
    title: "Build Stunning Mobile Apps",
    subtitle: "iOS & Android Solutions",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
    button: "Explore Now"
  },
  {
    id: 3,
    title: "Skyrocket Your Online Presence",
    subtitle: "With Strategic Digital Marketing",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1470&q=80",
    button: "Boost Visibility"
  }
];

const AutoSliderHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            {slides[current].subtitle}
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2 mx-auto transition-all duration-300">
            {slides[current].button}
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSliderHero;
