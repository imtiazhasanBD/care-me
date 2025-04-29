export default function SupplierExperiences() {
    const cards = [
      {
        id: 1,
        name: "Amit and Rajat Jain",
        location: "Smartees, Tiruppur",
        description:
          "Our business has grown beyond our imagination, getting up to 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho’s insights.",
        image: "/card_img-2.png", // Replace with real image
      },
      {
        id: 2,
        name: "Suman",
        location: "Keshav Fashion, Hisar",
        description:
          "Our business has grown beyond our imagination, getting up to 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho’s insights.",
        image: "/card_img-1.JPG", // Replace with real image
      },
      {
        id: 3,
        name: "Mohit Rathi",
        location: "Meira Jewellery, Ahmedabad",
        description:
          "Our business has grown beyond our imagination, getting up to 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho’s insights.",
        image: "/card_img-3.jpg", // Replace with real image
      },
    ];
  
    return (
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B0033] text-center mb-12">
          Experiences suppliers love to talk about
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="border border-gray-300 rounded-md shadow-sm overflow-hidden bg-white p-3">
              {/* Image Section */}
              <div className="relative">
                <img src={card.image} alt={card.name} className="w-full h-56 object-cover" />
                <button className="absolute bottom-[-25px] left-6 bg-orange-400 p-1 rounded-full">
                  <div className="w-11 h-11 bg-[#6B0033] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </button>
              </div>
  
              {/* Text Section */}
              <div className="p-4 space-y-3 mt-10">
                <h3 className="text-2xl font-bold text-[#6B0033]">{card.name}</h3>
                <p className="text-lg text-gray-700 font-medium">{card.location}</p>
                <p className="text-gray-600 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  