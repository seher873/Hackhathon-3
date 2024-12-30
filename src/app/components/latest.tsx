import React from "react";
import Image from "next/image";

const Latest = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 my-8">
        Product Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 1166.png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-md">
            Sale
          </span>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 15.png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-md">
            Sale
          </span>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 1168.png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 23.png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 32 (1).png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white relative">
          <Image
            src="/image 3.png"
            alt="Comfort Handy Craft"
            width={192}
            height={192}
            className="object-cover rounded-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Comfort Handy Craft
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="text-gray-800 font-bold">$482.00</span>{" "}
            <span className="line-through text-red-500 ml-2">$660.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Latest;
