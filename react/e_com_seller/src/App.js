import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Components/NavBarr/Navbar";
import { useContext } from "react";
import StartContext from "./Components/ContextDataFol/StartContext";
import CategoryAdd from "./Components/Master/CategoryAdd";


function App() {
  const commonData1 = useContext(StartContext);
  // console.log(commonData1.userAuth[0]);

  return (
    <>
      {
        commonData1.userAuth[0] ? <Navbar /> : <Login />
      }
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Category" element={<CategoryAdd />} />
      </Routes>
    </>
  );
}

export default App;
