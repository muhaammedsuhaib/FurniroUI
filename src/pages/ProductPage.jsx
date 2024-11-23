import React, { useState } from "react";
import product1 from "../assets/products/1.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex gap-6">
          <div className="hidden sm:block">
            <div className="flex flex-col gap-4">
              {[product2, product3, product4, product5].map((image, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 bg-[#F8EDE3] rounded-lg flex items-center justify-center "
                >
                  <img
                    src={image}
                    alt={`Product Thumbnail ${idx + 1}`}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product Image */}
          <div className="w-[500px] h-[500px] bg-[#F8EDE3] rounded-lg flex items-center justify-center">
            <img src={product1} alt="Asgaard Sofa" className="rounded-lg" />
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="flex flex-row gap-4">
            {[product2, product3, product4, product5].map((image, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-[#F8EDE3] rounded-lg flex items-center justify-center "
              >
                <img
                  src={image}
                  alt={`Product Thumbnail ${idx + 1}`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 text-start">
          <h1 className="text-3xl font-bold text-gray-900">Asgaard Sofa</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-2">
            Rs. 250,000.00
          </p>

          <div className="flex items-center mt-4">
            <div className="flex text-yellow-500 text-lg">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
            </div>
            <p className="text-gray-500 text-sm ml-2">(5 Customer Reviews)</p>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Size</h3>
            <div className="flex gap-3 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                      : "bg-[#b88f2f3b]  text-gray-800 border-[#b88f2f3b]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Color</h3>
            <div className="flex gap-3 mt-2">
              {["purple", "black", "gold"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-gray-900"
                      : "border-gray-200"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6">
            <div className="flex items-center border rounded-md w-full sm:w-auto">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2 text-xl sm:px-6 sm:py-3"
              >
                -
              </button>
              <span className="px-4 text-lg sm:text-xl">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 text-xl sm:px-6 sm:py-3"
              >
                +
              </button>
            </div>
            <div className="flex gap-4 sm:gap-6 w-full sm:w-auto mt-4 sm:mt-0">
              <button className="px-4 py-3 border rounded-md text-sm sm:text-base w-full sm:w-auto">
                Add To Cart
              </button>
              <button className="px-4 py-3 border rounded-md text-sm sm:text-base w-full sm:w-auto">
                + Compare
              </button>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600 space-y-4 border-t pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <p className="font-semibold">SKU</p>
              <p className="col-span-2">: SS001</p>

              <p className="font-semibold">Category</p>
              <p className="col-span-2">: Sofas</p>

              <p className="font-semibold">Tags</p>
              <p className="col-span-2">: Sofa, Chair, Home, Shop</p>

              <p className="font-semibold">Share</p>
              <div className="col-span-2 flex gap-4 mt-2">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaFacebook className="mr-2" />
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaLinkedin className="mr-2" />
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaTwitter className="mr-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
