import logo from "../images/logo-1-80x48.png";

const Footer = () => {
  return (
    <div>
      <div className="flex   min-h-screen  bg-black justify-center items-center text-white">
        <div className="grid grid-cols-12 gap-11">
          <div className="col-span-3 ">
            <img src={logo} alt="" />
          </div>
          <div className="col-span-3  px-10">
            <h1 className="font-bold text-3xl mb-5"> Useful Links </h1>
            <ul>
              <li className="p-2 hover:cursor-pointer">Home</li>
              <li className="p-2 hover:cursor-pointer">Shop</li>
              <li className="p-2 hover:cursor-pointer">About Us</li>
              <li className="p-2 hover:cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="col-span-3  px-10">
            <h3 className="font-bold text-3xl mb-5">Our Collection</h3>
            <ul>
              <li className="p-2 hover:cursor-pointer">Mountain</li>
              <li className="p-2 hover:cursor-pointer">City</li>
              <li className="p-2 hover:cursor-pointer">Specialty</li>
              <li className="p-2 hover:cursor-pointer">Electric</li>
            </ul>
          </div>
          <div className="col-span-3  px-10">
            <h3 className="font-bold text-3xl mb-5">Accounts </h3>
            <ul>
              <li className="p-2 hover:cursor-pointer">Customer Login</li>
              <li className="p-2 hover:cursor-pointer">Dealer Login</li>
              <li className="p-2 hover:cursor-pointer">Addresses</li>
              <li className="p-2 hover:cursor-pointer">Payment methods</li>
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
