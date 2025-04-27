import {
  FaHandshake,
  FaBan,
  FaChartLine,
  FaBusinessTime,
} from "react-icons/fa";
import { RxCheck } from "react-icons/rx";

export default function WhySuppliersLoveCareMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-16 bg-white">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 w-full text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B0033] mb-4">
          Why Suppliers Love Care Me
        </h2>
        <p className="text-gray-600 lg:max-w-md font-medium text-lg">
          All the benefits that come with selling on Care Me are designed to
          help you sell more, and make it easier to grow your business.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 border border-gray-200 rounded-md p-6 space-y-8 shadow-sm">
        {/* Item 1 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#6B0033] text-2xl">
            <FaHandshake />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">0% Commission Fee</h3>
            <p className="text-gray-600 text-base">
              Suppliers selling on Meesho keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <hr className="text-gray-200" />

        {/* Item 2 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#6B0033] text-2xl">
            <FaBan />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">0 Penalty Charges</h3>
            <p className="text-gray-600 text-base">
              Suppliers selling on Meesho keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <hr className="text-gray-200" />

        {/* Item 3 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#6B0033] text-2xl">
            <FaChartLine />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">
              Growth for Every Supplier
            </h3>
            <p className="text-gray-600 text-base">
              From small to large and unbranded to branded, and now open for
              Sellers who don’t have a Regular GSTIN too, Meesho fuels growth
              for all suppliers.
            </p>
          </div>
        </div>
        <hr className="text-gray-200" />

        {/* Item 4 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#6B0033] text-2xl">
            <FaBusinessTime />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Ease of Doing Business</h3>
            <ul className="text-gray-600 text-base">
              <li className="flex gap-1 item-center">
                <RxCheck className="my-auto text-[#6B0033]" size={"1.4rem"} />
                Easy Product Listing
              </li>
              <li className="flex gap-1 item-center">
                <RxCheck className="my-auto text-[#6B0033]" size={"1.4rem"} />
                Lowest Cost Shipping
              </li>
              <li className="flex gap-1 item-center">
                <RxCheck className="my-auto text-[#6B0033]" size={"1.4rem"} />
                7-Day Payment Cycle from the delivery date
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
