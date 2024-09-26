import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image8 from "../images/accessories-3-800x800.jpg";
const Bike1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex itms-center justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={image8} alt="" className="p-10 hover:cursor-pointer" />
          </div>
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">
              Bicycle Gloves Red
            </h1>
            <div className="p-3 font-semibold text-3xl">$350.00</div>
            Discover the Ultimate Bicycle Gloves! Take your cycling to the
            next level with our cutting-edge bicycle gloves! Designed for
            maximum comfort and performance, these gloves feature padded palms
            to absorb shocks and reduce hand fatigue, making every ride a
            pleasure. The breathable, moisture-wicking fabric keeps your hands
            cool and dry, while the flexible design ensures a perfect fit and
            great dexterity. Whether you’re hitting the trails or cruising
            through the city, these gloves provide the grip and protection you
            need. Don’t let discomfort hold you back—experience the difference
            with our top-quality bicycle gloves. **Get yours now and ride in
            style!
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
