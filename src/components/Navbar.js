import logo from "../images/logo-1-80x48.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-3 font-bold">
      <img src={logo} alt="" />
      <ul className="text-white flex">
        <li className="px-3 hover:cursor-pointer">
          <a href="#Home">HOME</a>
        </li>
        <li className="px-3 hover:cursor-pointer">
          <a href="#Bicycles">BICYCLES</a>
        </li>
        <li className="px-3 hover:cursor-pointer">
          <a href="#Accesories">ACCESORIES</a>
        </li>
        <li className="px-3 hover:cursor-pointer">
          <a href="#About us">ABOUT US</a>
        </li>
        <li className="px-3 hover:cursor-pointer">
          <a href="#Contact">CONTACT</a>
        </li>
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
