import "./App.css";
import background from "./images/bicycle-1-800x800.jpg";
import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Newarrivals from "./pages/Newarrivals";

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
    </div>
  );
}

export default App;
