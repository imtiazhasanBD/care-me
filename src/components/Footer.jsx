import React from 'react';
 // Using lucide-react for icons

const Footer = () => {
  return (
    <footer className="bg-[#680131] text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-8 text-center lg:text-left">
          
          {/* Left Column */}
          <div className=''>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Care Me</h2>
            <p className="text-gray-300 mb-4 lg:text-lg">
              Sell your products to crores of customers on Meesho at 0% commission
            </p>
            <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 lg:text-lg">
              Start Selling
            </button>
          </div>

          {/* Middle Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sell on Care Me</h2>
            <ul className="space-y-2 text-gray-300 lg:text-lg">
              <li><a href="#">Sell Online</a></li>
              <li><a href="#">Pricing & Commission</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Grow Your Business</a></li>
              <li><a href="#">Learning Hub</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sell on Care Me</h2>
            <p className="text-gray-300 mb-4 lg:text-lg">Support@caremebd.com</p>
            <div className="flex space-x-4 text-2xl justify-center lg:justify-normal">
              <div className="bg-gray-100 text-[#680131] rounded px-4 py-2 font-bold">F</div>
              <div className="bg-gray-100 text-[#680131] rounded px-4 py-2  font-bold">I</div>
              <div className="bg-gray-100 text-[#680131] rounded px-4 py-2  font-bold">Y</div>
            </div>
          </div>

        </div>

        <hr className="border-gray-300 mb-4" />
        <p className="text-center text-gray-300 text-sm lg:text-lg">
          © 2025 Care Me. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
