import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          {/* Address Section */}
          <div className="text-gray-800">
            <h1 className="text-2xl font-bold">Funiro.</h1>
            <p className="mt-4 text-gray-600 text-start">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-gray-500 font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/shop" className="text-gray-800 hover:text-gray-500">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-800 hover:text-gray-500">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-800 hover:text-gray-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/payment-options"
                    className="text-gray-800 hover:text-gray-500"
                  >
                    Payment Options
                  </a>
                </li>
                <li>
                  <a
                    href="/returns"
                    className="text-gray-800 hover:text-gray-500"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policies"
                    className="text-gray-800 hover:text-gray-500"
                  >
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border-b-2 border-black focus:ring-1 focus:ring-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className=" border-black px-4 py-2 border-b-2 hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-600 text-sm text-start">
            © 2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
