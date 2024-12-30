import Image from 'next/image';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const DiscountItem = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:flex-1 flex justify-center items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Discount Item</h2>
            <div className="flex justify-center lg:justify-start gap-2 sm:gap-4 text-purple-500 text-sm mb-4">
              <a href="#" className="hover:underline">Wood Chair</a>
              <a href="#" className="hover:underline">Plastic Chair</a>
              <a href="#" className="hover:underline">Sofa Collection</a>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              20% Discount Of All Products
            </h3>
            <p className="text-pink-500 text-lg font-semibold mb-4">Eames Sofa Compact</p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget
              neque faucibus. Bibendum consectetur.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Material exposed like metals
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Clear lines and geometric figures
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Minimalist design structure
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Modern aesthetic with no excess
              </li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:flex-1 flex justify-center items-center">
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-pink-200 -z-10"></div>
          <Image
            src="/d.png"width={60} height={60}
            alt="Discounted Chair"
            className="w-3/4 sm:w-2/3 lg:w-full h-auto object-contain border rounded-full bg-purple-100"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
