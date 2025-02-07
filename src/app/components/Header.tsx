"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaShoppingCart,
  FaUser,
  FaGlobe,
  FaDollarSign,
} from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const products = [
  { _id: "1", name: "Chairs" },
  { _id: "2", name: "Headphones" },
  { _id: "3", name: "Smartphone" },
  { _id: "4", name: "Smartwatch" },
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <header className="bg-purple-600 text-white">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 text-sm">
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span className="text-xs sm:text-sm">mhiaxonu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span className="text-xs sm:text-sm">(123) 456 7890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 relative">
          {/* Language Dropdown - Hide on Mobile */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center space-x-1"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <FaGlobe />
              <span>{language}</span>
            </button>
            {showLangDropdown && (
              <ul className="absolute left-0 mt-2 bg-white text-black border border-gray-300 shadow-md rounded-md w-24 z-50">
                {["English", "French", "Spanish"].map((lang) => (
                  <li
                    key={lang}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setShowLangDropdown(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Currency Dropdown - Hide on Mobile */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center space-x-1"
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            >
              <FaDollarSign />
              <span>{currency}</span>
            </button>
            {showCurrencyDropdown && (
              <ul className="absolute left-0 mt-2 bg-white text-black border border-gray-300 shadow-md rounded-md w-24 z-50">
                {["USD", "EUR", "GBP"].map((curr) => (
                  <li
                    key={curr}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setCurrency(curr);
                      setShowCurrencyDropdown(false);
                    }}
                  >
                    {curr}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Icons */}
          <Link href="/signUp" className="flex items-center space-x-1">
            <FaUser />
            <span className="hidden sm:inline">Login</span>
          </Link>

          <Link href="/cart" className="relative">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-4 py-3 bg-white text-black">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Hekto</h1>
        </Link>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="text-purple-600">
            <Link href="/">Home</Link>
          </li>

          {/* Pages Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowPagesDropdown(!showPagesDropdown)}
              className="text-black"
            >
              Pages
            </button>
            {showPagesDropdown && (
              <ul className="absolute left-0 mt-2 bg-white text-black border border-gray-300 shadow-md rounded-md w-40 z-50">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/shopList">Shop</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative w-full md:w-64 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-pink-500">
            <MdSearch size={20} />
          </button>

          {/* Search Results */}
          {searchTerm && filteredProducts.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black border border-gray-300 shadow-md rounded-md mt-1 z-50">
              {filteredProducts.map((product) => (
                <li
                  key={product._id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setSearchTerm(product.name)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
