
"use client"
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
      {/* Lamp Image at the Far Left */}
      <div className="absolute top-0 left-0 mr-40 w-[180px] md:w-[250px]">
        <Image
          src="/lamp.webp"
          alt="Lamp"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between mt-4">
        {/* Left Content (Text & Button) */}
        <div className="w-full md:w-1/2 ml-32 text-center md:text-left">
          <p className="text-pink-500 font-josefin font-medium mb-4">
            Best Furniture For Your Castle..
          </p>
          <h1 className="text-4xl md:text-5xl font-josefin font-bold leading-tight mb-6">
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
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={slides[activeIndex].img}
            width={629}
            height={629}
            alt="Furniture"
            className="object-contain max-w-full border rounded-full bg-purple-200"
          />

          {/* Discount Badge on top of the Sofa */}
          <div
            className="absolute top-5 right-5 bg-blue-400 bg-cover bg-center w-[90px] h-[90px] md:w-[80px] md:h-[80px] flex flex-col justify-center items-center z-20 rounded-full"
           
          >
            <span className="text-lg md:text-xl font-bold text-white">50%</span>
            <span className="text-xs md:text-sm font-semibold text-white">OFF</span>
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