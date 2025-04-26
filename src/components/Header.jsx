import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 md:py-7 bg-white shadow-sm">
        {/* Left: Logo */}
        <div className="text-xl md:text-2xl font-bold text-[#5c0a0a]">
          Care Me
        </div>

        {/* Middle: Menu Items - Desktop */}
        <ul className="hidden lg:flex space-x-6 lg:space-x-8 text-sm font-medium text-black">
          <li className="hover:text-[#5c0a0a] cursor-pointer">Sell Online</li>
          <li className="hover:text-[#5c0a0a] cursor-pointer">How it works</li>
          <li className="hover:text-[#5c0a0a] cursor-pointer">Pricing & Commission</li>
          <li className="hover:text-[#5c0a0a] cursor-pointer">Shipping & Returns</li>
        </ul>

        {/* Right: Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <button className="px-8 lg:px-8 py-2 border border-[#5c0a0a] text-[#5c0a0a] rounded-md text-sm font-medium hover:bg-[#5c0a0a] hover:text-white transition">
            Login
          </button>
          <button className="px-8 lg:px-8 py-2 bg-[#5c0a0a] text-white rounded-md text-sm font-medium hover:bg-[#400707] transition">
            Start Selling
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#5c0a0a] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <RxCross2 size={"1.5rem"}/>
          ) : (
            <FaBars size={"1.3rem"}/>
          )}
        </button>
      </nav>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-3 p-4 text-sm font-medium text-black">
            <li className="hover:text-[#5c0a0a] cursor-pointer py-2 border-b border-gray-100">Sell Online</li>
            <li className="hover:text-[#5c0a0a] cursor-pointer py-2 border-b border-gray-100">How it works</li>
            <li className="hover:text-[#5c0a0a] cursor-pointer py-2 border-b border-gray-100">Pricing & Commission</li>
            <li className="hover:text-[#5c0a0a] cursor-pointer py-2 border-b border-gray-100">Shipping & Returns</li>
            <div className="flex flex-col space-y-3 pt-2">
              <button className="w-full py-2 border border-[#5c0a0a] text-[#5c0a0a] rounded-md text-sm font-medium hover:bg-[#5c0a0a] hover:text-white transition">
                Login
              </button>
              <button className="w-full py-2 bg-[#5c0a0a] text-white rounded-md text-sm font-medium hover:bg-[#400707] transition">
                Start Selling
              </button>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;