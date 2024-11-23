import React from "react";
import RelatedProducts1 from "../assets/products/RelatedProducts1.png";
import RelatedProducts2 from "../assets/products/RelatedProducts2.png";
import RelatedProducts3 from "../assets/products/RelatedProducts3.png";
import RelatedProducts4 from "../assets/products/RelatedProducts4.png";

const products = [
  {
    id: 1,
    img: RelatedProducts1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    originalPrice: "Rp 3,500,000",
    salePrice: "Rp 2,500,000",
  },
  {
    id: 2,
    img: RelatedProducts2,
    name: "Fender Guitar",
    description: "Classic electric guitar",
    originalPrice: "Rp 6,000,000",
    salePrice: "Rp 4,500,000",
  },
  {
    id: 3,
    img: RelatedProducts3,
    name: "Marshall Speaker",
    description: "Portable speaker",
    originalPrice: "Rp 2,000,000",
    salePrice: "Rp 1,500,000",
  },
  {
    id: 4,
    img: RelatedProducts4,
    name: "Luxury Sofa",
    description: "Comfortable living room sofa",
    originalPrice: "Rp 10,000,000",
    salePrice: "Rp 8,000,000",
  },
];

const RelatedProducts = () => {
  return (
    <div className="mt-12 border-t">
      <h3 className="text-xl font-semibold mt-12">Related Products</h3>

      {/* Related Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 p-12">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-2">
                <span className="text-gray-600 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-lg font-semibold text-yellow-500">
                  {product.salePrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-3 px-5 py-2 bg-transparent text-yellow-500 border  border-yellow-200 hover:bg-yellow-300 hover:text-black">
        Show More
      </button>
    </div>
  );
};

export default RelatedProducts;
