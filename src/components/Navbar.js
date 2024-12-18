import { Link } from "react-router-dom";
import logo from "../images/logo-1-80x48.png";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-3 font-bold bg-black">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="text-white flex">
        <Link to="/">
          <li className="px-3 hover:cursor-pointer">HOME</li>
        </Link>
        <li className="px-3 hover:cursor-pointer">BICYCLES</li>
        <li className="px-3 hover:cursor-pointer">ACCESORIES</li>
        <li className="px-3 hover:cursor-pointer">ABOUT US</li>
        <Link to="/contact">
          <li className="px-3 hover:cursor-pointer">CONTACT US</li>
        </Link>
      </ul>
      <div className="text-white">
        $0.00{" "}
        <Link to="/cart">
          <i
            className="fa fa-shopping-cart text-white text-3xl mr-3 hover:cursor-pointer"
            aria-hidden="true"
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
