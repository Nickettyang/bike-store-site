import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image8 from "../images/accessories-3-800x800.jpg";
import { CartContext } from "../components/Cartcontext"; // Import CartContext

const Bike1 = () => {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from context

  const product = {
    id: 1,
    name: "Bicycle Gloves Red",
    price: 350.0,
    image: image8,
    description:
      "Take your cycling to the next level with our cutting-edge bicycle gloves! Designed for maximum comfort and performance...",
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img
              src={product.image}
              alt={product.name}
              className="p-10 hover:cursor-pointer"
            />
          </div>
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">{product.name}</h1>
            <div className="p-3 font-semibold text-3xl">
              ${product.price.toFixed(2)}
            </div>
            <p className="p-3">{product.description}</p>
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
