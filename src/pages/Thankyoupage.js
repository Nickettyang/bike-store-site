import React from "react";
import { Link } from "react-router-dom"; // This allows navigation to the homepage or other parts of your website

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-lg mb-6">Your order has been successfully placed.</p>
        <p className="text-md mb-6">You will receive a confirmation email shortly.</p>

        <div className="mt-8">
          <Link to="/" className="text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
