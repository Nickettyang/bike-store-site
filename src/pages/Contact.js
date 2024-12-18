import Footer from "../components/Footer"; // Importing the Footer component
import Navbar from "../components/Navbar"; // Importing the Navbar component
import React, { useState } from "react"; // Importing React and useState hook
import { ToastContainer, toast } from "react-toastify"; // Importing toast notifications
import "react-toastify/dist/ReactToastify.css"; // Importing styles for toast notifications

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "", // User's name
    email: "", // User's email
    subject: "", // Subject of the message
    message: "", // Message content
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleChanges = (e) => {
    const { name, value } = e.target; // Destructuring to get input name and value
    setFormData({ ...formData, [name]: value }); // Updating form data state
  };

  // Function to validate form inputs
  const formValidator = () => {
    const newError = {}; // Object to store validation errors
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
    const namePattern = /^[A-Z][a-zA-Z' -]*(\s[A-Z][a-zA-Z' -]*)*$/; // Regex for valid name format

    // Validate name
    // Uncomment to validate name
    // if (!namePattern.test(formData.name)) {
    //   newError.name = "Please enter a valid name"; // Error if name is invalid
    // }

    // Validate email
    if (!formData.email) {
      newError.email = "Your email is required"; // Error if email is not provided
    } else if (!emailPattern.test(formData.email)) {
      newError.email = "Please enter a valid email address"; // Error if email format is invalid
    }

    // Validate subject
    if (!formData.subject) {
      newError.subject = "Subject is required"; // Error if subject is not provided
    } else if (formData.subject.length > 100) {
      newError.subject = "Subject must be less than 100 characters"; // Error if subject is too long
    }

    // Validate message
    if (!formData.message) {
      newError.message = "Message is required"; // Error if message is not provided
    } else if (formData.message.length > 500) {
      newError.message = "Message must be less than 500 characters"; // Error if message is too long
    }

    return newError; // Return the object containing validation errors
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = formValidator();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        } else {
          toast.error("Error sending email.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending email.");
      }
    } else {
      setErrors(validationErrors);
      toast.error("Invalid form submission");
    }
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="bg-black text-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="font-light mb-8 text-center max-w-md">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form
            onSubmit={handleSubmit} // Call handleSubmit on form submission
            action=""
            className="space-y-6 w-full max-w-md"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2" required>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
                placeholder="Type here..."
                value={formData.name || ""} // Controlled input for name
                onChange={handleChanges} // Call handleChanges on input change
                autoComplete="name"
                name="name"
                required // Make this field required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p> // Show name error if exists
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2" required>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
                placeholder="you@example.com"
                value={formData.email} // Controlled input for email
                onChange={handleChanges} // Call handleChanges on input change
                autoComplete="email"
                name="email"
                required // Make this field required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p> // Show email error if exists
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2" required>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
                placeholder="What is it about..."
                value={formData.subject} // Controlled input for subject
                onChange={handleChanges} // Call handleChanges on input change
                autoComplete="subject"
                name="subject"
                required // Make this field required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p> // Show subject error if exists
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2" required>
                Your Message
              </label>
              <textarea
                id="message"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
                rows="5"
                placeholder="Type your message here..."
                value={formData.message} // Controlled input for message
                onChange={handleChanges} // Call handleChanges on input change
                autoComplete="message"
                name="message"
                required // Make this field required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p> // Show message error if exists
              )}
            </div>
            <button className="flex justify-center p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Submit
            </button>{" "}
            {/* Submit button */}
          </form>
          <ToastContainer /> {/* Container for toast notifications */}
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Contact; // Export the Contact component
