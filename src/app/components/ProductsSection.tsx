'use client';

import Image from 'next/image';

function FeaturedProducts() {
  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-black text-4xl text-center mb-16 font-bold">Featured Products</h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Hardcoded Product 1 */}
        <div className="text-center">
          <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
            <Image
              src="/image 1168.png"
              width={200}
              height={250}
              alt="Cantilever Chair"
              className="object-cover w-[200px] h-[250px]"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-red-500">Cantilever Chair</h3>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="text-[#05E6B7] text-4xl">-</span>
              <span className="text-[#F701A8] text-4xl">-</span>
              <span className="text-[#00009D] text-4xl">-</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Code - Y523201</p>
            <p className="mt-1 text-dark-blue-900">$42.00</p>
          </div>
        </div>

        {/* Hardcoded Product 2 */}
        <div className="text-center">
          <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
            <Image
              src="/image 1 (1).png"
              width={200}
              height={250}
              alt="Cantilever Chair"
              className="object-cover w-[200px] h-[250px]"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-red-500">Cantilever Chair</h3>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="text-[#05E6B7] text-4xl">-</span>
              <span className="text-[#F701A8] text-4xl">-</span>
              <span className="text-[#00009D] text-4xl">-</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Code - Y523201</p>
            <p className="mt-1 text-dark-blue-900">$42.00</p>
          </div>
        </div>

        {/* Hardcoded Product 3 */}
        <div className="text-center">
          <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
            <Image
              src="/image 1169.png"
              width={200}
              height={250}
              alt="Cantilever Chair"
              className="object-cover w-[200px] h-[250px]"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-red-500">Cantilever Chair</h3>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="text-[#05E6B7] text-4xl">-</span>
              <span className="text-[#F701A8] text-4xl">-</span>
              <span className="text-[#00009D] text-4xl">-</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Code - Y523201</p>
            <p className="mt-1 text-dark-blue-900">$42.00</p>
          </div>
        </div>

        {/* Hardcoded Product 4 */}
        <div className="text-center">
          <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
            <Image
              src="/image 23.png"
              width={200}
              height={250}
              alt="Cantilever Chair"
              className="object-cover w-[200px] h-[250px]"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-red-500">Cantilever Chair</h3>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span className="text-[#05E6B7] text-4xl">-</span>
              <span className="text-[#F701A8] text-4xl">-</span>
              <span className="text-[#00009D] text-4xl">-</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Code - Y523201</p>
            <p className="mt-1 text-dark-blue-900">$42.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
