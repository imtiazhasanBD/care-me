import React from "react";

const SupplierTestimonials = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Experiences suppliers love to talk about
        </h1>

        {/* Testimonials */}
        <div className="space-y-10">
          {/* Testimonial 1 */}
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-[#5c0a0a]">
                AR
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">Amit and Rajat Jain</h2>
                <p className="text-lg text-[#5c0a0a] font-medium mb-4">Smartees, Tiruppur</p>
                <p className="text-gray-600">
                  "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Care Me's insights."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-[#5c0a0a]">
                S
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">Suman</h2>
                <p className="text-lg text-[#5c0a0a] font-medium mb-4">Keshav Fashion, Hisar</p>
                <p className="text-gray-600">
                  "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Care Me's insights."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-[#5c0a0a]">
                MR
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">Mohit Rathi</h2>
                <p className="text-lg text-[#5c0a0a] font-medium mb-4">Meira Jewellery, Ahmedabad</p>
                <p className="text-gray-600">
                  "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Care Me's insights."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierTestimonials;