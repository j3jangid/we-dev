import { Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import ElecAcce from "./Components/ElecAcce";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/electronics&accessories" element={<ElecAcce />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
