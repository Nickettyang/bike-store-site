import Newarrivals from "./Newarrivals";
import Descriptionpage from "./Descriptionpage";
import Accesoriespage from "./Accesoriespage";
import Ecopage from "./Ecopage";
import Footer from "./Footer";

const Landingpage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to the Bike Store</h1>
        
        <Newarrivals />
        <Descriptionpage />
        <Accesoriespage />
        <Ecopage />
        <Footer />
      </div>
    </div>
  );
};

export default Landingpage;
