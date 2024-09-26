import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image10 from "../images/accessories-4-800x800(1).jpg";
const Bike1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex itms-center justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={image10} alt="" className="p-10 hover:cursor-pointer" />
          </div>
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">
              Bicycle Gloves Gold
            </h1>
            <div className="p-3 font-semibold text-3xl">$350.00</div>
            Ride in Comfort with Our Bicycle Gloves! Enhance your cycling
            experience with our premium bicycle gloves! Crafted for performance,
            these gloves feature shock-absorbing padding and breathable
            materials to keep your hands comfortable during any ride. The snug
            fit ensures excellent control over your handlebars while reducing
            fatigue, making them perfect for long distances. Plus, the stylish
            design adds a touch of flair to your cycling gear. Stay focused on
            the road ahead—protect your hands and improve your grip with our
            must-have bicycle gloves. **Upgrade your ride today!
            <button className="rounded-lg border-2 p-3  bg-black font-bold text-white m-5">
              ADD TO CART
            </button>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bike1;
