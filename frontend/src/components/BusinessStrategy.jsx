// BusinessStrategy.jsx
import React from "react";
import { FaAward, FaUsers } from "react-icons/fa";

const BusinessStrategy = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://lifeinfotech.in/wp-content/uploads/2025/06/depositphotos_88208538-stock-photo-business-strategy-people-diagram-sign-1.jpg" // replace with your image
            alt="Business Strategy"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Small Label */}
          <span className="bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full">
            COMPANY OVERVIEW
          </span>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 leading-snug">
            Plan your business strategy <br /> with Our Experts
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Life Infotech is a leading Website and Software Development Company,
            delivering cutting-edge IT solutions tailored to businesses of all
            sizes. Since 2011, we’ve been empowering organizations with
            innovative digital products, including websites, custom software,
            and mobile applications that are secure, scalable, and future-ready.
            Our mission is to deliver quality-driven, user-centric, and
            result-oriented digital solutions that align with client goals and
            enhance business value.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <FaAward className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">235+</h3>
                <p className="text-gray-600 text-sm">Best Award</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <FaUsers className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">98k</h3>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategy;
