/* eslint-disable react/prop-types */
import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <nav className="flex items-center justify-between py-3 px-6 sm:px-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <img className="w-[max(10%,80px)] hover:scale-110 transition-transform duration-300 cursor-pointer" src={assets.logo} alt="Admin Logo" />

      {/* Logout Button */}
      <button onClick={() => setToken('')} className="bg-white text-pink-600 font-semibold px-5 py-2 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm shadow-md hover:bg-pink-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400" aria-label="Logout"> Logout </button>
    </nav>
  );
};

export default Navbar;
