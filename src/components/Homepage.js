import logo from "../images/logo-1-80x48.png";
import { Link } from "react-router-dom";
// import Cart from "../pages/Cart";
import background from "../images/pexels-jahangeer-bm-759527-1619299.jpg";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
      id="home"
    >
      <Navbar />
    </div>
  );
};

export default Homepage;
