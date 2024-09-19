import eco from "../images/pexels-efrem-efre-2786187-18791780.jpg";

const Ecopage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${eco})` }}
      >
        <h1 className="font-bold text-3xl text-start">
          Join #GoEcoBiking Programme
        </h1>

        <div className="grid grid-cols-12">
            <div className="text-center border-2 rounded-lg bg-slate-300 font-bold hover:cursor-pointer">Join the Program</div>
        </div>
      </div>
    </div>
  );
};

export default Ecopage;
