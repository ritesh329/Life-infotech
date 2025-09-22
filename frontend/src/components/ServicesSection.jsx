// ServicesSection.jsx
import React from "react";
import { FaCompass, FaUsers, FaShoppingCart, FaChartPie } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCompass className="text-4xl text-red-600" />,
    title: "Website and Software",
    description:
      "We specialize in crafting dynamic websites, scalable software applications, mobile apps, and digital marketing strategies that drive growth and innovation.",
  },
  {
    id: 2,
    icon: <FaUsers className="text-4xl text-red-600" />,
    title: "Mobile APP Development IOS and Android",
    description:
      "Life Infotech is a top-rated Mobile App Development Company offering innovative and scalable app solutions for Android and iOS platforms.",
  },
  {
    id: 3,
    icon: <FaShoppingCart className="text-4xl text-red-600" />,
    title: "E-commerce Website Development Company",
    description:
      "Whether you’re launching a new brand, building a multi-vendor marketplace, or upgrading an existing store — we create tailored e-commerce platforms that drive conversions and growth.",
  },
  {
    id: 4,
    icon: <FaChartPie className="text-4xl text-red-600" />,
    title: "Digital Marketing Company",
    description:
      "A strategic blend of creativity, data, and technology, we help businesses grow through SEO, social media, paid ads, and content marketing.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-2xl p-8 text-center border-t-4 border-red-500 hover:bg-[#09071D] hover:text-white transition-all duration-500"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center transition-all duration-500 group-hover:bg-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 hover:text-gray-200 transition-all duration-500">
              {service.description}
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-500">
                <FaCompass className="text-white text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
