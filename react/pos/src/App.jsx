import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeFrame from "./Components/Home/HomeFrame";
import POSFrame from "./Components/POS/POSFrame";
import { useContext, useEffect } from "react";
import ItemsCreate from "./Data/ItemsCreate";
import { StartContext } from "./Context/StartContext";

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
      </Routes>
    </>
  );
}

export default App;
