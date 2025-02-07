"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 0, img: "/sofa.png" },
    { id: 1, img: "/my-blue.png" },
    { id: 2, img: "/d.png" },
  ];

  return (
    <section className="bg-purple-100 py-8 px-4 md:py-16 md:px-8 lg:py-24 lg:px-16 w-full overflow-hidden relative">
      {/* Lamp Image Fixed Position */}
      <div className="absolute top-0  items-center md:left-12 lg:left-16 w-[80px] sm:w-[120px] md:w-[180px] lg:w-[200px]">
        <Image
          src="/lamp.webp"
          alt="Lamp"
          width={387}
          height={387}
          className="object-contain w-full h-auto ml-32 md:ml-4"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-20 md:flex-row items-center justify-between  w-full max-w-screen-xl mx-auto">
        {/* Left Content (Text & Button) */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-16">
          <p className="text-pink-500 font-josefin font-medium mb-4">
            Best Furniture For Your Castle..
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-josefin font-bold leading-tight mb-6">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded text-sm hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content (Sofa Image with Badge) */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center px-4">
          <Image
            src={slides[activeIndex].img}
            width={400}
            height={400}
            alt="Furniture"
            className="object-contain max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] border rounded-full bg-purple-200"
          />

          {/* Discount Badge on top of the Sofa */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-blue-400 bg-cover bg-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex flex-col justify-center items-center z-20 rounded-full">
            <span className="text-lg sm:text-xl font-bold text-white">50%</span>
            <span className="text-xs sm:text-sm font-semibold text-white">
              OFF
            </span>
          </div>
        </div>
      </div>

      {/* Dots Indicator with Functionality */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
              activeIndex === index ? "bg-pink-500 scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
