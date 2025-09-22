
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    id: 1,
    subtitle: "Welcome to Life Infotech IT Solutions",
    title: (
      <>
        India’s Leading IT & Mobile <br />
        App Development <br />
        <span className="text-red-400">E-commerce Website</span> Company
      </>
    ),
    description:
      "12+ Years of Excellence, 100+ Successful Projects Delivered, serving clients in India, USA, Germany, Saudi Arabia & more. Industry expertise: Healthcare, Education, Retail, NGOs, Government, Business automation tools, ERP, CRM, NGO software, and cloud-based applications.",
    image:
      "https://lifeinfotech.in/wp-content/uploads/2025/06/OIP-8-300x224.jpeg",
    button: "Get Start for Enquiry",
  },
  {
    id: 2,
    subtitle: "Welcome to Life Infotech IT Solutions",
    title: (
      <>
        Build Stunning Mobile Apps <br />
        Native iOS & Android <br />
        <span className="text-red-400">High Performance</span> Solutions
      </>
    ),
    description:
      "We create scalable, secure, and high-performing mobile apps tailored to your business needs. From concept to deployment, we deliver end-to-end mobile solutions.",
    image:
      "https://lifeinfotech.in/wp-content/uploads/2025/06/1_50hLmUVWAMM1n7Pzpo6GkA-300x200.webp",
    button: "Explore Now",
  },
  {
    id: 3,
    subtitle: "Welcome to Life Infotech IT Solutions",
    title: (
      <>
        Skyrocket Your Online Presence <br />
        With Strategic <br />
        <span className="text-red-400">Digital Marketing</span>
      </>
    ),
    description:
      "Boost visibility and grow your brand with our proven SEO, SEM, and social media strategies. Drive more traffic, leads, and sales with measurable results.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1470&q=80",
    button: "Boost Visibility",
  },
];

const AutoSliderHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start z-20 px-6 md:px-20">
        <div className="text-left text-white max-w-3xl">
          <h5 className="text-sm md:text-lg text-red-400 font-semibold mb-4">
            {slides[current].subtitle}
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
            {slides[current].title}
          </h2>
          <p className="text-base md:text-lg mb-8 text-gray-200">
            {slides[current].description}
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300">
            {slides[current].button}
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full z-30 transition-all"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full z-30 transition-all"
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default AutoSliderHero;
