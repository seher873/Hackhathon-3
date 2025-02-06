"use client";

import { FiCheckCircle } from "react-icons/fi";

export default function OrderCompleted() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center mt-4">
        {/* Check Icon and Heading */}
        <div className="relative">
          <FiCheckCircle className="w-12 h-12 text-pink-500 mx-auto bg-white" />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Your Order Is Completed!
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-gray-500 mt-4 max-w-xl">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>

        {/* Button */}
        <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition">
          Continue Shopping
        </button>
      </main>
    </div>
  );
}
