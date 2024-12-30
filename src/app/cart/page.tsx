import Image from 'next/image';

export default function ShoppingCart() {
  const cartItems = [
    { id: 1, name: 'Ut diam consequat', price: 30, img: '/img.png', size: 'S, M, L' },
    { id: 2, name: 'Vel facilisis preti', price: 35, img: '/Rectangle 35.png', size: 'L, XL' },
    { id: 3, name: 'Ac vitae elementum', price: 25, img: '/Rectangle 36.png', size: 'M, L' },
    { id: 4, name: 'Et lacus dictum', price: 40, img: '/Rectangle 37.png', size: 'S, M' },
    { id: 5, name: 'Praesent elementum', price: 50, img: '/Rectangle 38.png', size: 'S, XL' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <p className="text-sm text-gray-500">Home {'>'} Pages {'>'} Shopping Cart</p>
      </div>

      {/* Cart Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Product</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4 flex items-center space-x-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.size}</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-16 border rounded px-2 py-1"
                    />
                  </td>
                  <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
              Update Cart
            </button>
            <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="space-y-6">
          <div className="border p-4 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between py-1">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-1 border-t">
              <p>Total:</p>
              <p className="font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <button className="bg-green-500 text-white w-full py-2 mt-4 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>

          <div className="border p-4 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Calculate Shipping</h2>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <input
              type="text"
              placeholder="Mirpur Dhaka - 1000"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border rounded px-3 py-2"
            />
            <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded hover:bg-blue-600">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
