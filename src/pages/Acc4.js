
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image11 from "../images/accessories-5-800x800.jpg";
import { CartContext } from "../components/Cartcontext"; // Import CartContext

const Bike1 = () => {
  // Use the CartContext to get the addToCart function
  const { addToCart } = useContext(CartContext);

  // Define the product details
  const product = {
    id: 5, // Unique ID for the product
    name: "Bicycle Gloves Pink",
    price: 350.0,
    image: image11,
    description:
      "Experience ultimate comfort and grip with our high-performance bicycle gloves! Designed for avid cyclists, these gloves provide superior padding and breathability, ensuring a secure hold on the handlebars while reducing fatigue during long rides.",
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-12">
          {/* Product Image */}
          <div className="col-span-6">
            <img src={product.image} alt={product.name} className="p-10 hover:cursor-pointer" />
          </div>

          {/* Product Details */}
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">{product.name}</h1>
            <div className="p-3 font-semibold text-3xl">${product.price.toFixed(2)}</div>
            <p className="p-3">{product.description}</p>
            
            {/* Add to Cart Button */}
            <button
              className="rounded-lg border-2 p-3 bg-black font-bold text-white m-5"
              onClick={() => addToCart(product)} // Add product to cart when clicked
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
