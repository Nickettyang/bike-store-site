import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import image4 from "../images/bicycle-7-800x800.jpg";
const Bike1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex itms-center justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={image4} alt="" className="p-10 hover:cursor-pointer" />
          </div>
          <div className="col-span-6 p-6 font-bold">
            <h1 className="text-3xl font-bold italic p-3">Kryo-X26-MB</h1>
            <div className="p-3 font-semibold text-3xl">$350.00</div>
            Unleash Your Adventure with the Kryo X26 Mountain Bike! Meet the
            **Kryo X26 MB**—your ultimate companion for rugged trails and
            breathtaking landscapes! With a lightweight aluminum frame and
            advanced suspension, this bike delivers unmatched comfort and
            control on any terrain. Conquer steep climbs and navigate rocky
            paths effortlessly with its precision 21-speed gearing and
            all-terrain tires that grip the ground with confidence. Stylish and
            durable, the Kryo X26 isn’t just built for performance; it’s
            designed to turn heads. Whether you’re an experienced rider or just
            starting your journey, the Kryo X26 invites you to explore,
            discover, and embrace every adventure.
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
