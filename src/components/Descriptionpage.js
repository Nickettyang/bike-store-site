import image5 from "../images/bicycle-1-800x800.jpg";

const Descriptionpage = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center font-sans py-3">
        Why Choose Kryo
      </h1>
      <div className="flex min-h-screen justify-center items-center p-5">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6">
            <img src={image5} alt="" className="hover:cursor-pointer"/>
          </div>
          <div className="col-span-6">
            <img src={image5} alt="" className="hover:cursor-pointer" />
          </div>
          <div className="col-span-4">
            <img src={image5} alt="" className="hover:cursor-pointer" />
          </div>
          <div className="col-span-4">
            <img src={image5} alt="" className="hover:cursor-pointer"/>
          </div>
          <div className="col-span-4">
            <img src={image5} alt="" className="hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptionpage;
