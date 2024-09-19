import logo from '../images/logo-1-80x48.png'

const Navbar = () => {
  return (
    <div className="flex justify-between pt-3 font-bold">
      <img src={logo} alt="" />
      <ul className="text-white flex">
        <li className="px-3 hover:cursor-pointer">HOME</li>
        <li className="px-3 hover:cursor-pointer">BICYCLES</li>
        <li className="px-3 hover:cursor-pointer">ACCESORIES</li>
        <li className="px-3 hover:cursor-pointer">ABOUT US</li>
        <li className="px-3 hover:cursor-pointer">CONTACT</li>
      </ul>
      <div className="text-white">
        $0.00{" "}
        <i
          className="fa fa-shopping-cart text-white text-3xl mr-3 hover:cursor-pointer"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
