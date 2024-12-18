import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image2 from "../images/bicycle-5-800x800.jpg";
import { CartContext } from "../components/Cartcontext"; // Import CartContext

const Bike1 = () => {
  // Use the CartContext to get the addToCart function
  const { addToCart } = useContext(CartContext);

  // Define the product details
  const product = {
    id: 7, // Unique ID for this product
    name: "Kryo-X26-MB",
    price: 350.0,
    image: image2,
    description:
      "Discover the Kryo X26 MB, your ideal companion for rugged trails! With a lightweight aluminum frame and advanced suspension, it offers comfort and control on any terrain. Conquer climbs effortlessly with 21-speed gearing and all-terrain tires. Stylish and durable, the Kryo X26 invites you to embrace every adventure!",
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Product Image */}
          <div className="col-span-6 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="col-span-6 p-6">
            <h1 className="text-4xl font-bold italic mb-4 text-gray-900">
              {product.name}
            </h1>
            <div className="text-2xl font-semibold text-gray-800 mb-4">
              ${product.price.toFixed(2)}
            </div>

            <p className="mb-6 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <button
              className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              onClick={() => addToCart(product)} // Add product to cart
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bike1;
