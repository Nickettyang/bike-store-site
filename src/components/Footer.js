import logo from "../images/logo-1-80x48.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex   min-h-screen  bg-black justify-center items-center text-white">
        <div className="grid grid-cols-12 gap-11">
          <div className="col-span-3 ">
            <img src={logo} alt="" />
          </div>
          <div className="col-span-3  px-10">
            <h1 className="font-bold text-3xl mb-5 italic"> Useful Links </h1>
            <ul>
              
                <a href="#home">
                  <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                    Home
                  </li>
                </a>
              
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Shop
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                About Us
              </li>
              <Link to="/contact">
                <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-3  px-10">
            <h3 className="font-bold text-3xl mb-5 italic">Our Collection</h3>
            <ul>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Mountain
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                City
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Specialty
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Electric
              </li>
            </ul>
          </div>
          <div className="col-span-3  px-10">
            <h3 className="font-bold text-3xl mb-5 italic">Accounts </h3>
            <ul>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Customer Login
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Dealer Login
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Addresses
              </li>
              <li className="p-1 hover:cursor-pointer hover:text-red-600 font-bold">
                Payment methods
              </li>
            </ul>
          </div>

          <hr className="col-span-12 border-white mt-11" />

          <div className="col-span-12 flex flex-col items-center justify-center mt-4">
            <p className="mb-2">
              <i className="fa fa-copyright" aria-hidden="true"></i> 2024 Bike
              Store
            </p>
            <p className="mb-2">California branch coming soon!</p>
            <div className="flex space-x-4">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
