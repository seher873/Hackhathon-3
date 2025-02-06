
import React from 'react';
import Image from 'next/image';
const Trending = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl flex flex-col gap-4 p-4">
        {/* Top Section for Product Cards */}
        <h1 className="text-center font-josefin font-bold text-xl sm:text-2xl lg:text-4xl text-blue-900">Trending Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center    transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            <Image src="/image 1171.png"width={699} height={597} alt="Product 1" className="w-[171px] h-[171px] mx-auto object-cover mb-2 rounded" />
            <p>Cantilever chair</p>
            <p>$26.00 $42.00</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center   transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            <Image src="/red.png"width={50} height={50} alt="Product 2" className="w-[187px] h-[187px] mx-auto object-cover mb-2 rounded" />
            <p>Cantilever chair</p>
            <p>$26.00 $42.00</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center   transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            <Image src="/box for image.png"width={100} height={100} alt="Product 3" className="w-[197px] h-[189px] mx-auto object-cover mb-2 rounded" />
            <p>Cantilever chair</p>
            <p>$26.00 $42.00</p>
          </div>
          <div className="border border-purple-200 rounded-lg p-4 shadow-md text-center  transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]">
            <Image src="/image 32 (1).png" width={40} height={40}alt="Product 4" className="w-[247px] h-[244px] mx-auto object-cover mb-2 rounded" />
            <p>Cantilever chair</p>
            <p>$26.00 $42.00</p>
          </div>
        </div>

        {/* Bottom Section for Offers and Side List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 h-auto lg:h-[270px] w-full lg:w-[420px] text-center">
            <p className="text-start text-sm sm:text-base">23% off in all products</p>
            <button className="text-pink-400 mr-auto underline">Shop Now</button>
            <Image src="/clock.png" width={50} height={50}alt="Offer 1" className="w-[213px] h-[207px] mx-auto mt-4 object-cover rounded" />
          </div>
          <div className="bg-gray-100 border border-gray-300 mr-3 rounded-lg p-4 h-auto lg:h-[270px] w-auto lg:w-[420px] text-center">
            <p className="text-start text-sm sm:text-base">23% off in all products</p>
            <button className="text-pink-400 mr-auto underline">Shop Now</button>
            <Image src="/yellow.png" width={50} height={50}alt="Offer 2" className="w-full max-w-[312px] h-[173px] mx-auto mt-4 object-cover rounded" />
          </div>
          <div className="flex flex-col gap-4 ml-3">
            <div className="bg-white border flex items-center gap-3 border-gray-300 rounded-lg p-2 shadow-sm">
              <Image src="/image 30 (1).png"width={50} height={50} alt="Side item 1" className="w-16 h-15 bg-gray-200 object-cover rounded" />
              <p className="text-sm sm:text-base">Executive Seat chair<br />$32.00</p>
            </div>
            <div className="bg-white border flex items-center gap-3 border-gray-300 h-auto rounded-lg p-2 shadow-sm">
              < Image src="/image 19 (1).png" width={50} height={50}alt="Side item 2" className="w-16 h-16 bg-gray-200 object-cover rounded" />
              <p className="text-sm sm:text-base">Executive Seat chair<br />$32.00</p>
            </div>
            <div className="bg-white border flex items-center gap-3 border-gray-300 h-auto rounded-lg p-2 shadow-sm">
              <Image src="/image 28 (1).png"width={50} height={50} alt="Side item 3" className="w-16 h-16 bg-gray-200 object-cover rounded" />
              <p className="text-sm sm:text-base">Executive Seat chair<br />$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
