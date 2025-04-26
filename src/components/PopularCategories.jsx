import React from "react";

const PopularCategories = () => {
  const categories = [
    "Sell Sarees Online",
    "Sell Tshirts Online",
    "Sell Watches Online",
    "Sell Clothes Online",
    "Sell Jewellery Online",
    "Sell Shirts Online",
    "Sell Electronics Online",
    "Sell Socks Online"
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left text-gray-900 mb-12">
          Popular Categories to Sell Online
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="p-4 hover:border-[#5c0a0a]  cursor-pointer"
            >
              <p className="text-center lg:text-left font-medium text-gray-800 hover:text-[#5c0a0a] lg:text-xl">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;