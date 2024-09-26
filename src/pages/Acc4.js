import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image11 from "../images/accessories-5-800x800.jpg";
const Bike1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex itms-center justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={image11} alt="" className="p-10 hover:cursor-pointer" />
          </div>
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">
              Bicycle Gloves Pink
            </h1>
            <div className="p-3 font-semibold text-3xl">$350.00</div>
            Elevate Your Ride with Premium Bicycle Gloves! Experience ultimate
            comfort and grip with our high-performance bicycle gloves! Designed
            for avid cyclists, these gloves provide superior padding and
            breathability, ensuring a secure hold on the handlebars while
            reducing fatigue during long rides. The sleek, ergonomic design fits
            snugly, offering excellent dexterity without compromising
            protection. With moisture-wicking fabric and adjustable closures,
            you’ll stay dry and comfortable no matter the terrain.
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
