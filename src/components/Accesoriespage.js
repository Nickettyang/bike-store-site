import image8 from "../images/accessories-3-800x800.jpg";
import image9 from "../images/accessories-4-800x800.jpg";
import image10 from "../images/accessories-4-800x800(1).jpg";
import image11 from "../images/accessories-5-800x800.jpg";
import { Link } from "react-router-dom";

const Accesoriespage = () => {
  return (
    <div id="Accesories">
      <h1 className="text-3xl font-bold text-center py-3 pt-2">
        Explore Accesories
      </h1>
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <Link to="/acc1"><img src={image8} alt="" className="hover:cursor-pointer"/></Link>
            <div className="italic">
              Accesories <br />
              <div className="py-3 italic font-bold">Bicycle Gloves red</div>
              <div className="py-1 text-sm">SSSSS</div>
              <div className="font-bold">$350</div>
              <div className="grid grid-cols-12 gap-2 py-3">
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  L
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  M
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  XL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Link to="acc2"><img src={image9} alt="" className="hover:cursor-pointer"/></Link>
            <div className="italic">
              Accesories <br />
              <div className="py-3 italic font-bold">Bicycle Gloves blue</div>
              <div className="py-1 text-sm">SSSSS</div>
              <div className="font-bold">$350</div>
              <div className="grid grid-cols-12 gap-2 py-3">
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  L
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  M
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  XL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Link to="acc3"><img src={image10} alt="" className="hover:cursor-pointer"/></Link>
            <div className="italic">
              Accesories <br />
              <div className="py-3 italic font-bold">Bicycle Gloves gold</div>
              <div className="py-1 text-sm">SSSSS</div>
              <div className="font-bold">$350</div>
              <div className="grid grid-cols-12 gap-2 py-3">
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  L
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  M
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  XL
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Link to="acc4"><img src={image11} alt="" className="hover:cursor-pointer"/></Link>
            <div className="italic">
              Accesories <br />
              <div className="py-3 italic font-bold">Bicycle Gloves pink</div>
              <div className="py-1 text-sm">SSSSS</div>
              <div className="font-bold">$350</div>
              <div className="grid grid-cols-12 gap-2 py-3">
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  L
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  M
                </div>
                <div className="col-span-2 border-2 text-center rounded-md hover:cursor-pointer">
                  XL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesoriespage;
