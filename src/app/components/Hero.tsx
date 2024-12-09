export default function HeroSection() {
  return (
    <section className="bg-purple-100 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-pink-500 font-medium  ml-40 mb-4">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 ml-40">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600  ml-40 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 ml-40 text-white px-6 py-3 rounded text-sm hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 relative mt-20 md:mt-0 flex justify-center">
          {/* Chair Image */}
          <img
            src="/sofa.png " 
            alt="sofa"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
          {/* 50% Off Badge */}
          <div className="absolute  top-10  right-10 bg-blue-500 text-white text-sm font-bold  rounded-full w-20 h-20">
            50% off
          </div>
        </div>
      </div>

      {/* Floating Lamp */}
      <div className="absolute top-0 -left-16">
        <img
          src="/image 32.png" 
          alt="Lamp"
          className="max-w-[360px] md:max-h-[360px] gap-x-10 "
        />
      </div>

      {/* {/* Dots Indicator * */}
      <div className="flex justify-center   space-x-2">
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}
