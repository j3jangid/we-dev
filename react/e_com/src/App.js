import { Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import ElecAcce from "./Components/ElecAcce";
import LogIn from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/electronics&accessories" element={<ElecAcce />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
