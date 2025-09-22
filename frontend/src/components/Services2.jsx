// ServiceCards.jsx
import React from "react";
import {
  FaDollarSign,
  FaBullhorn,
  FaChartPie,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const Services2 = [
  {
    id: "01",
    title: "Website Development",
    description:
      "Our website development packages are fully end-to-end, including planning, design, coding, testing, and deployment — all at cost-effective pricing.",
    icon: <FaDollarSign className="text-white text-2xl" />,
    image:
      "https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-coding_73903-237.jpg",
  },
  {
    id: "02",
    title: "App Development",
    description:
      "We utilize the latest mobile app development technologies and frameworks, including Flutter, React Native, Swift, Kotlin, a cross-platform solution.",
    icon: <FaBullhorn className="text-white text-2xl" />,
    image:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
  },
  {
    id: "03",
    title: "UX/UI Designing",
    description:
      "Using latest design tools and modern UI/UX design principles, we ensure that every project we deliver is easy to navigate, responsive, and user-centric.",
    icon: <FaChartPie className="text-white text-2xl" />,
    image:
      "https://img.freepik.com/free-vector/ux-ui-design-concept-illustration_114360-1093.jpg",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "We offer a comprehensive range of digital marketing services designed to grow your online presence and connect with your target audience effectively.",
    icon: <FaLayerGroup className="text-white text-2xl" />,
    image:
      "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg",
  },
];

const Services2Component = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Services2.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-40">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Red Icon */}
              <div className="absolute -bottom-6 left-6 bg-red-600 w-14 h-14 flex items-center justify-center rounded-md shadow-md">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="pt-10 px-6 pb-6">
              <span className="text-4xl font-extrabold text-red-100 block">
                {service.id}
              </span>
              <h3 className="text-lg font-bold mt-2 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>

            {/* Footer Button */}
            <div className="bg-black text-white py-3 text-center flex items-center justify-center gap-2 font-semibold cursor-pointer hover:bg-red-600 transition-all">
              SEE DETAILS <FaArrowRight className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services2Component;
