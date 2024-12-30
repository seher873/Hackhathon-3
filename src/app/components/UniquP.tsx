import Image from "next/image";
export default function UniqueP() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Left Section: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-full w-96 h-96 -z-10 mx-auto"></div>
            <Image
              src="/my-blue.png" width={458} height={450}
              alt="Stylish Chair"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 text-pink-500">•</span>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-pink-500">•</span>
                Reinforced with double wood dowels, glue, screws, nails, corner
                blocks, and machine nails.
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-pink-500">•</span>
                Arms, backs, and seats are structurally reinforced.
              </li>
            </ul>
            <div className="mt-6 flex items-center">
              <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
                Add To Cart
              </button>
              <div className="ml-4 text-gray-800">
                <p className="text-lg font-bold">50% Intice Sofa</p>
                <p className="text-pink-500">$250.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
