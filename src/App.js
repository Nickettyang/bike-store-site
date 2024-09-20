import "./App.css";
import background from "./images/pexels-jahangeer-bm-759527-1619299.jpg";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Newarrivals from "./components/Newarrivals";
import Descriptionpage from "./components/Descriptionpage";
import Accesoriespage from "./components/Accesoriespage";
import Ecopage from "./components/Ecopage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <div>
        <div
          className="bg-cover bg-center h-screen bg-black"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div>
          <Landingpage />
        </div>
      </div>
    </Router>
  );
}

export default App;
