import Newarrivals from "./Newarrivals";
import Descriptionpage from "./Descriptionpage";
import Accesoriespage from "./Accesoriespage";
import Ecopage from "./Ecopage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

const Landingpage = () => {
  return (
    <div>
      <div>
        <Homepage />
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
