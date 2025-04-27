import React from "react";

const StatsSection = () => {
  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xl">
        {/* Card 1 */}
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-3xl font-extrabold text-[#5c0a0a]">11 Lakh+</h2>
          <p className="mt-2 text-gray-600 font-bold">
            Trust Care Me to sell online
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-3xl font-extrabold text-[#5c0a0a]">14 Crore+</h2>
          <p className="mt-2 text-gray-600 font-bold">
            Customers buying across Bangladesh
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-3xl font-extrabold text-[#5c0a0a]">19000+</h2>
          <p className="mt-2 text-gray-600 font-bold">
            Pincode Supported for delivery
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-3xl font-extrabold text-[#5c0a0a]">700+</h2>
          <p className="mt-2 text-gray-600 font-bold">
            Categories to sell online
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
