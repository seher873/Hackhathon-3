"use client"
// / pages/checkout.tsx
import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Main Section */}
      <main className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Billing/Shipping Address */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Billing & Shipping Address</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-2"
            />
            <textarea
              placeholder="Shipping Address"
              className="w-full border rounded-md px-4 py-2"
              rows={4}
            ></textarea>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="border rounded-md p-4">
            <div className="flex justify-between">
              <span>Product Name</span>
              <span>$350</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold">$350</span>
            </div>
          </div>
         <Link href="/order-completed"> <button className="w-full px-4 py-2 bg-pink-500 text-white rounded-md">
            Place Order
          </button></Link>
        </div>
      </main>
    </div>
  );
};

export default Checkout;