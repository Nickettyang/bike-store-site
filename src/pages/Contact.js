import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="font-light mb-8 text-center max-w-md">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="" className="space-y-6 w-full max-w-md">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="What is it about..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                rows="5"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button className="flex justify-center p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
