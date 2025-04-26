import React from 'react';
import { TfiEmail } from "react-icons/tfi";

const SupplierSupport = () => {
  return (
    <section className="bg-indigo-50 py-18 my-8 lg:my-18">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#680131] mb-4">
            Care Me Supplier Support<br />Available 24/7
          </h2>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <p className="text-gray-600 mb-6 text-xl">
            Meesho supplier support is available to solve all your doubts
            and issues before and after you start your online selling business.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-[#680131] py-3 px-4 rounded-md">
            <TfiEmail size={"1.5rem"} className='text-white'/>
            </div>
            <div className='text-lg'>
              <p className="text-[#680131] font-semibold">
                You can reach out to
              </p>
              <p className="text-gray-700">
                support@caremebd.com
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupplierSupport;
