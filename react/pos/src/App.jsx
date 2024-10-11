import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeFrame from "./Components/Home/HomeFrame";
import POSFrame from "./Components/POS/POSFrame";
import { useContext, useEffect } from "react";
import ItemsCreate from "./Data/ItemsCreate";
import { StartContext } from "./Context/StartContext";
import MySales from "./Components/Sales/MySales";
import Format1 from "./Components/Prints/Format1";

function App() {
  const commonData = useContext(StartContext);

  useEffect(() => {
    const getItems = ItemsCreate()
    commonData.setSystemItems(getItems);
    commonData.setFilterData(getItems);
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeFrame />} />
        <Route path="/pos" element={<POSFrame />} />
        <Route path="/sales" element={<MySales />} />
        <Route path="/Format1" element={<Format1 />} />
      </Routes>
    </>
  );
}

export default App;
