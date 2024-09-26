import "./App.css";
import background from "./images/pexels-jahangeer-bm-759527-1619299.jpg";
import Navbar from "./components/Homepage";
import Landingpage from "./components/Landingpage";
import Newarrivals from "./components/Newarrivals";
import Descriptionpage from "./components/Descriptionpage";
import Accesoriespage from "./components/Accesoriespage";
import Ecopage from "./components/Ecopage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ContactSection14 from "./pages/Contact";
import Bike1 from "./pages/Bike1";
import Bike2 from "./pages/Bike2";
import Bike3 from "./pages/Bike3";
import Bike4 from "./pages/Bike4";
import Acc1 from "./pages/Acc1";
import Acc2 from "./pages/Acc2";
import Acc3 from "./pages/Acc3";
import Acc4 from "./pages/Acc4";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactSection14 />} />
          <Route path="/bike1" element={<Bike1 />} />
          <Route path="/bike2" element={<Bike2 />} />
          <Route path="/bike3" element={<Bike3 />} />
          <Route path="/bike4" element={<Bike4 />} />
          <Route path="/acc1" element={<Acc1 />} />
          <Route path="/acc2" element={<Acc2 />} />
          <Route path="/acc3" element={<Acc3 />} />
          <Route path="/acc4" element={<Acc4 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
