"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <nav className="bg-transparent text-white  w-full fixed   opacity-500 overflow-visible z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Panel (Logo and Navigation Links) */}
        <div className="flex items-center ml-24 mb-9">
          <div className="hidden md:flex space-x-8 bg-black/50 p-1 rounded-lg border border-white/50 pr-6 pl-4 pt-2 pb-1">
            <Image src="/Assets/favicon.webp" alt="Logo" width={30} height={30} className="mr-2" />
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Products</a>
            <div className="relative">
              <button onClick={toggleSolutionsDropdown} className="hover:text-gray-300 hover:cursor-pointer flex items-center">
                Solutions
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div className="absolute mt-2 w-120 bg-black/50 rounded-lg shadow-lg p-2 opacity-500">
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 hover:cursor-pointer rounded-lg hover:opacity-100 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                    <Image src="/Assets/dropdown.png" alt="Solution" width={50} height={50} />
                    <div>
                      <p className="text-sm font-semibold "> Hiring Solution </p>
                      <p className="text-{19px} text-gray-400">Streamline Hiring Process by Matching the right Tailent to the  right Oppurnity </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 hover:opacity-100 rounded-lg hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                    <Image src="/Assets/dropdown.png" alt="Solution" width={50} height={50} />
                    <div>
                      <p className="text-sm font-semibold "> Hiring Solution </p>
                      <p className="text-{19px} text-gray-400">Streamline Hiring Process by Matching the right Tailent to the  right Oppurnity </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Support</a>
            <a href="#" className="hover:text-gray-300 text-purple-600 font-bold hover:text-purple-500">About</a>
          </div>
        </div>

        {/* Right Panel (Buttons) */}
        <div className="flex items-center mr-18 mt-2">
          <div className="hidden md:flex bg-black/50 p-1 rounded-lg border border-white/50 pr-4  pb-1 mb-9">
            <button className="relative px-4 py-2 rounded-lg hover:border-2  hover:border-from-purple-500 via-pink-500 to-red-500 hover:text-white transition-all duration-300">
              <span className="relative z-10">Request a Demo</span> 
              <span className="ml-1">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="relative px-4 py-2 rounded-lg hover:border-2 hover:border-transparent hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white transition-all duration-300 flex items-center">
              <span className="relative z-10"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
            <button className="relative px-4 py-2 bg-white text-black rounded-lg hover:border-2 hover:border-transparent hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:text-white transition-all duration-300">
              <span className="relative z-10">Login </span> <span className="ml-1">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-black/50 backdrop-blur-md p-4 transform transition-transform duration-300 ease-in-out">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-4 mt-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Products</a>
            <a href="#" className="hover:text-gray-300">Solutions</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Support</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <button className="border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black">
              Request a Demo <span className="ml-1">→</span>
            </button>
            <button className="bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
              Login <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;