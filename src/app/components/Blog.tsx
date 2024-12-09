import React from "react";

const LatestBlog = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div className="border rounded-xl p-4 bg-white shadow-md">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/JIUjvqe2ZHg.png"
                alt="Design Trends 2024"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Design Trends 2024
              </h3>
              <p className="text-sm text-gray-500">Blog - D2024</p>
              <p className="text-sm text-gray-600 mt-2">
                Exploring the latest design trends for the upcoming year.
              </p>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="border rounded-xl p-4 bg-white shadow-md">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/blog-2.png"
                alt="Minimalist Interiors"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Minimalist Interiors
              </h3>
              <p className="text-sm text-gray-500">Blog - M2024</p>
              <p className="text-sm text-gray-600 mt-2">
                Tips to achieve a clean and clutter-free home.
              </p>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="border rounded-xl p-4 bg-white shadow-md">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/blg3.png"
                alt="Smart Home Gadgets"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Smart Home Gadgets
              </h3>
              <p className="text-sm text-gray-500">Blog - S2024</p>
              <p className="text-sm text-gray-600 mt-2">
                Top gadgets to upgrade your home automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
