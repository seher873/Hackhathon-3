import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-purple-100  relative py-16 px-4 xm:w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left ">
          <p className="text-pink-500 font-josefin font-medium mb-4">
            Best Furniture For Your Castle...
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
       

        {/* Right Content */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Chair Image */}
          <Image
            src="/sofa.png"width="629" height="629"
            alt="Modern Sofa"
            className="max-w-xs md:max-w-sm lg:max-w-md object-contain border rounded-full bg-purple-200"
          />

         
          </div>
        </div>
      

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}
