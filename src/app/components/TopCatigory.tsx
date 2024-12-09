export default function TopCategory() {
    return (
      <div className="py-12 bg-white">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Top Categories</h2>
  
        {/* Category Items */}
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {/* Card 1 */}
          <div className="w-48 flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
            <div className="h-32 w-32 mb-4">
              <img
                src="/"
                alt="chiar-pic"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
            <p className="text-center text-gray-500">$36.00</p>
          </div>
  
          {/* Card 2 */}
          <div className="w-48 flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
            <div className="h-32 w-32 mb-4">
              <img
                src="/image 1168.png"
                alt="Mini LCW Chair"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
            <p className="text-center text-gray-500">$36.00</p>
          </div>
  
          {/* Card 3 */}
          <div className="w-48 flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
            <div className="h-32 w-32 mb-4">
              <img
                src="/image 1171.png"
                alt="Mini LCW Chair"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
            <p className="text-center text-gray-500">$36.00</p>
          </div>
  
          {/* Card 4 */}
          <div className="w-48 flex flex-col items-center bg-gray-50 rounded-lg shadow p-4">
            <div className="h-32 w-32 mb-4">
              <img
                src="/"
                alt="Mini LCW Chair"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <h3 className="text-center text-lg font-semibold text-gray-700">Mini LCW Chair</h3>
            <p className="text-center text-gray-500">$36.00</p>
          </div>
        </div>
      </div>
    );
  }
  