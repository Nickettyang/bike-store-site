import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image9 from "../images/accessories-4-800x800.jpg";
import { CartContext } from "../components/Cartcontext"; // Import CartContext

const Bike1 = () => {
  // Destructure the addToCart function from the CartContext
  const { addToCart } = useContext(CartContext);

  // Define the product object with relevant details
  const product = {
    id: 2, // Unique ID for this product
    name: "Bicycle Gloves Blue",
    price: 350.0,
    image: image9,
    description:
      "Enhance your cycling experience with our premium bicycle gloves! Crafted for performance, these gloves feature shock-absorbing padding and breathable materials to keep your hands comfortable during any ride.",
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-12">
          {/* Product Image */}
          <div className="col-span-6">
            <img
              src={product.image}
              alt={product.name}
              className="p-10 hover:cursor-pointer"
            />
          </div>

          {/* Product Details */}
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">{product.name}</h1>
            <div className="p-3 font-semibold text-3xl">
              ${product.price.toFixed(2)}
            </div>
            <p className="p-3">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              className="rounded-lg border-2 p-3 bg-black font-bold text-white m-5"
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
