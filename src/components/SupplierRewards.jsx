import { FaBullhorn } from 'react-icons/fa';
import { MdOutlineCampaign } from 'react-icons/md';
import { TbCashBanknoteOff } from "react-icons/tb";


export default function SupplierRewards() {
  return (
    <section className="py-16 px-4 md:px-16 bg-[#f5f8fd]">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div className="lg:w-1/2 mb-10 md:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B0033] lg:max-w-sm">
            Exclusive Supplier+ Rewards for the first 30 days
          </h2>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col md:flex-row gap-6 lg:w-1/2 relative lg:h-56">
          {/* Card 1 */}
          <div className="bg-white border border-[#f5f8fd] rounded-md p-6 shadow-sm w-full lg:absolute lg:top-[-100px] lg:w-[280px]">
            <div className="text-3xl text-[#ff7a00] mb-2">
              <FaBullhorn />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Free catalog visibility of ₹600</h3>
            <p className="text-gray-600 text-lg">
              Run advertisements for your catalogs to increase the visibility of your products and get more orders. 
              Currently, not available for sellers who don't have a Regular GSTIN.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#f5f8fd] rounded-md p-6 shadow-sm w-full lg:absolute lg:bottom-[-100px] left-80 lg:w-[280px]">
            <div className="text-3xl text-[#6B0033] mb-2">
              <TbCashBanknoteOff size={"3rem"}/>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Free catalog visibility of ₹600</h3>
            <p className="text-gray-600 text-lg">
              Run advertisements for your catalogs to increase the visibility of your products and get more orders. 
              Currently, not available for sellers who don't have a Regular GSTIN.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
