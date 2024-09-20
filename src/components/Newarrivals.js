import image1 from "../images/bicycle-1-800x800.jpg";
import image2 from "../images/bicycle-4-800x800.jpg";
import image3 from "../images/bicycle-5-800x800.jpg";
import image4 from "../images/bicycle-7-800x800.jpg";

const Newarrivals = () => {
  return (
    <div id="Bicycles">
      <h1 className="text-center bg-white pt-5 font-black text-3xl">
        New Arrivals
      </h1>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-12 gap-20 p-4">
          <div className="col-span-3">
            <img src={image1} alt="" className="hover:cursor-pointer" />
            <div className="italic">
              Bicycles <br />
              <div className="py-3 italic font-bold">Kryo-X26-Model-K</div>
              <div className="py-1">SSSSS</div>
              <div className="font-bold">$350</div>
            </div>
          </div>
          <div className="col-span-3">
            <img src={image2} alt="" className="hover:cursor-pointer" />
            <div className="italic">
              Bicycles <br />
              <div className="py-3 italic font-bold">Kryo-X26-Model-K</div>
              <div className="py-1">SSSSS</div>
              <div className="font-bold">$350</div>
            </div>
          </div>
          <div className="col-span-3">
            <img src={image3} alt="" className="hover:cursor-pointer" />
            <div className="italic">
              Bicycles <br />
              <div className="py-3 italic font-bold">Kryo-X26-Model-K</div>
              <div className="py-1">SSSSS</div>
              <div className="font-bold">$350</div>
            </div>
          </div>
          <div className="col-span-3">
            <img src={image4} alt="" className="hover:cursor-pointer" />
            <div className="italic">
              Bicycles <br />
              <div className="py-3 italic font-bold">Kryo-X26-Model-K</div>
              <div className="py-1">SSSSS</div>
              <div className="font-bold">$350</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrivals;
