import Image from "next/image";
export default function TopCategory() {
  return (
    <div className="py-12 px-4  bg-white">
      {/* Heading */}
      <h2 className="text-center  text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Top Categories
      </h2>

      {/* Category Items */}
      <div className="flex justify-center gap-6 md:gap-8 lg:gap-10 px-4 overflow-x-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 w-40 sm:w-[300px] lg:w-[350px]">
          <div className="w-40 aspect-square">
            <Image
              src="/new.png"width={50} height={50}
              alt="chair-pic"
              className="w-full h-full object-cover rounded cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]"
          
            />
          </div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-center text-gray-500">$36.00</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 w-40 sm:w-[300px] lg:w-[350px]">
          <div className="w-40 aspect-square">
            <Image
              src="/image 1168.png"width={50} height={50}
              alt="Mini LCW Chair"
              className="w-full h-full object-cover rounded cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]"
          
            />
          </div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-center text-gray-500">$36.00</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 w-40 sm:w-[300px] lg:w-[350px]">
          <div className="w-40 aspect-square">
            <Image
              src="/image 1171.png"width={50} height={50}
              alt="Mini LCW Chair"
              className="w-full h-full object-cover rounded cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]"
          
            />
          </div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-center text-gray-500">$36.00</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 w-40 sm:w-[300px] lg:w-[350px]">
          <div className="w-40 aspect-square">
            <Image
              src="/new.png"width={50} height={50}
              alt="Mini LCW Chair"
              className="w-full h-full object-cover rounded cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#F3F3F3]"
          
            />
          </div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mt-4">
            Mini LCW Chair
          </h3>
          <p className="text-center text-gray-500">$36.00</p>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="h-[300px] sm:h-[250px] md:h-4500px] w-auto bg-no-repeat space-x-4 mx-auto flex md:flex-row items-center justify-between py-8 px-4 md:px-6"
        style={{ backgroundImage: "url('slid.png')" }}
      ></div>
    </div>
  );
}

