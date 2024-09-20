import eco from "../images/pexels-efrem-efre-2786187-18791780.jpg";

const Ecopage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex flex-col justify-between"
        style={{ backgroundImage: `url(${eco})` }}
      >
        <h1 className="font-bold text-3xl text-start">
          Join #GoEcoBiking Programme
        </h1>

        <div className="p-8 m-4 flex justify-end items-end">
          <div className="text-center border-2 rounded-lg bg-yellow-300 font-bold hover:cursor-pointer hover:bg-yellow-100 p-5">
            Join the Program
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecopage;
