import "./App.css";
import background from "./images/pexels-jahangeer-bm-759527-1619299.jpg";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Newarrivals from "./pages/Newarrivals";
import Descriptionpage from "./pages/Descriptionpage";
import Accesoriespage from "./pages/Accesoriespage";
import Ecopage from "./pages/Ecopage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen bg-black"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Navbar */}
        <Navbar />
        <Landingpage />
      </div>
      <div>
        <Newarrivals />
      </div>
      <div>
        <Descriptionpage />
      </div>
      <div>
        <Accesoriespage />
      </div>
      <div>
        <Ecopage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
