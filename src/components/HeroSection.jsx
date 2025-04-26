import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-18 bg-[#e3dcdc] relative overflow-hidden">
      {/* Left Side Text */}
      <div className="w-full lg:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Sell online to 14 Cr+ customers at <br />
          <span className="text-[#5c0a0a]">0% Commission</span>
        </h1>

        <div className="space-y-2">
          <p className="text-gray-700 font-medium">
            Become a Care Me seller and grow your business across Bangladesh
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
            <span className="bg-[#5c0a0a] text-white text-sm font-semibold py-1 px-3 rounded-md">
              New!
            </span>
            <p className="text-gray-700 font-medium text-sm">
              Don't have a GSTIN? You can still sell on Meesho.{" "}
              <span className="text-[#5c0a0a] font-semibold cursor-pointer">
                Know more
              </span>
            </p>
          </div>
        </div>

        {/* Mobile number input */}
        <div className="flex flex-col sm:flex-row w-full sm:max-w-md mt-6 mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="flex-1 px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none border border-gray-300 focus:outline-none"
          />
          <button className="bg-[#5c0a0a] text-white px-6 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none text-sm font-semibold hover:bg-[#400707] transition">
            Start Selling
          </button>
        </div>
      </div>


      {/* Right Side Image */}
      <div className="absolute md:mt-0 h-[380px] left-2/4 hidden lg:block">
        <div className="bg-[#5c0a0a] rounded-l-full w-[700px] h-[700px] absolute right-[-350px] top-0 z-0"></div>
        <img src="/hero-image.png" alt="Seller" className="relative z-10" />
      </div>
    </section>
  );
};

export default HeroSection;
