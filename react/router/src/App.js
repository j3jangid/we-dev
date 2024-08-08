import { Route, Routes } from "react-router-dom";
import Aboutus from "./aboutus";
import Form from "./Form";
import Contectus from "./contectus";
import Navbar from "./Navbar";
import "./App.css"


function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contectus />} />
      </Routes>
    </div>
  );
}

export default App;
