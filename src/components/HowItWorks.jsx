import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Account",
      description: (
        <>
          All you need is:
          <ul className="list-disc list-inside mt-2">
            <li>
              GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST
              sellers)
            </li>
            <li>Bank Account</li>
          </ul>
        </>
      ),
    },
    {
      number: "2",
      title: "List Products",
      description: "List the products you want to sell in your supplier panel",
    },
    {
      number: "3",
      title: "Get Orders",
      description:
        "Start getting orders from crores of Indians actively shopping on our platform.",
    },
    {
      number: "4",
      title: "Lowest Cost Shipping",
      description: "Products are shipped to customers at lowest costs",
    },
    {
      number: "5",
      title: "Receive Payments",
      description:
        "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.",
    },
  ];

  return (
    <section className="my-10">
      <div className="px-4 text-center lg:mx-10 w-full lg:w-fit">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#680131] mb-10">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 bg-indigo-50 p-8 text-left">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-left">
              <div className="flex items-center gap-4">
                <div className="bg-[#680131] text-white rounded-full w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center text-lg lg:text-4xl font-bold mb-4">
                  {step.number}
                </div>

                <div className="w-36 border-t-2 border-[#680131]"></div>
              </div>
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold mt-6">
                {step.title}
              </h3>

              {/* Description */}
              <div className="text-sm lg:text-base text-gray-700 mt-2 text-left">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
