import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import DashBoard from "./Components/DashBoard/DashBoard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
    
    </>
  );
}

export default App;
