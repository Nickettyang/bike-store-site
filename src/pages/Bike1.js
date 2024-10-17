import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image1 from "../images/bicycle-1-800x800.jpg";
const Bike1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center p-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex justify-center">
            <img
              src={image1}
              alt=""
              className="max-w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="col-span-6 p-6">
            <h1 className="text-4xl font-bold italic mb-4 text-gray-900">
              Kryo-X26-MB
            </h1>
            <div className="text-2xl font-semibold text-gray-800 mb-4">
              $350.00
            </div>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Discover the <strong>Kryo X26 MB</strong>, your ideal companion for rugged trails!
              With a lightweight aluminum frame and advanced suspension, it
              offers comfort and control on any terrain. Conquer climbs
              effortlessly with 21-speed gearing and all-terrain tires. Stylish
              and durable, the Kryo X26 invites you to embrace every adventure!
            </p>

            <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
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