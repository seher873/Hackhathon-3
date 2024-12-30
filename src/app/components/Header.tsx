
import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaShoppingCart, FaRegHeart, FaUser } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-purple-600 text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center space-x-4 justify-center w-full">
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>mhiaxonu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>(123) 456 7890</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>English</span>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>USD</span>
            <MdKeyboardArrowDown />
          </div>
          <Link href="/signUp" className="flex items-center space-x-1 cursor-pointer">
            <FaUser />
            <span>Login</span>
          </Link>
          <Link href="/wishlist" className="flex items-center space-x-1 cursor-pointer">
            <FaRegHeart />
            <span>Wishlist</span>
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="flex justify-between items-center px-4 py-3 bg-white text-black">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Hekto</h1>
        </Link>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="text-purple-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Pages</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Products</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/shopList">Shop</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
          />
          <button className="bg-pink-500 text-white p-2 rounded-md">
            <MdSearch size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header