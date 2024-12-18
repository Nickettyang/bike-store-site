import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../components/Cartcontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, addToCart } =
    useContext(CartContext); // Use addToCart from context
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    toast.error(`${item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  const handleAddToCart = (item) => {
    addToCart(item); // Trigger add to cart function
  };

  return (
    <div>
      <Navbar />
      <div className="text-3xl font-bold text-center mt-6 underline">
        Shopping Cart
      </div>

      <div className="container mx-auto mt-8 p-6">
        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500">
            Your cart is empty. Start shopping to add items here!
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-5 border-b border-gray-200 shadow-md rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-14 text-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                    onClick={() => {
                      removeFromCart(item.id);
                      handleRemoveFromCart(item); // Show toast when item is removed
                    }}
                  >
                    Remove
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                    onClick={() => handleAddToCart(item)} // Add the item again to trigger notification
                  >
                    Add Again
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right mt-4 font-semibold text-lg">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Cart;
