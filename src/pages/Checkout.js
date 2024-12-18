import React, { useContext, useState } from "react";
import { CartContext } from "../components/Cartcontext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import to handle navigation

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Used for page redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled in
    if (!name || !address || !phone || !email) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Show success message
    toast.success("Order successfully placed!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // Clear cart after order is successfully placed
    clearCart();

    // Redirect to Thank You page after clearing the cart
    setTimeout(() => {
      navigate("/thank-you"); // Redirect to Thank You page after a short delay
    }, 2000); // Wait for toast message to be shown before redirecting
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500">
            Your cart is empty. Add items to the cart before proceeding!
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cart Summary</h3>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b border-gray-200 shadow-md rounded-lg"
                >
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-gray-800">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right font-bold text-lg">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Full Name</label>
                <input
                  type="text"
                  className="border p-2 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold">
                  Shipping Address
                </label>
                <input
                  type="text"
                  className="border p-2 rounded-md"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Phone Number</label>
                <input
                  type="text"
                  className="border p-2 rounded-md"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  className="border p-2 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg mt-4 w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Checkout;
