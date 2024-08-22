import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import DashBoard from "./Components/DashBoard/DashBoard";
import Navbar from "./Components/NavBarr/Navbar";
import { useContext } from "react";
import StartContext from "./Components/ContextDataFol/StartContext";
import CategoryAdd from "./Components/Master/CategoryAdd";
import BrandsAdd from "./Components/Master/BrandsAdd"
import ItemsAdd from "./Components/Master/ItemsAdd"
import CustomerAdd from "./Components/Master/CustomerAdd"
import Sales from "./Components/Transaction/Sales"
import Purchase from "./Components/Transaction/Purchase"
import PurchaseReport from "./Components/Reports/PurchaseReport"
import SalesReport from "./Components/Reports/SalesReport"
import StockReport from "./Components/Reports/StockReport"
import UserAdd from "./Components/Configuration/UserAdd"
import UserTypeAdd from "./Components/Configuration/UserTypeAdd"
import PurchaseSetting from "./Components/Settings/PurchaseSetting"
import SaleSetting from "./Components/Settings/SaleSetting"
import MasterSetting from "./Components/Settings/MasterSetting"
import TaxAdd from "./Components/Master/TaxAdd";


function App() {
  const commonData = useContext(StartContext);
  // console.log(commonData1.userAuth[0]);

  return (
    <>
      {
        commonData.userAuth[0] ?
          <>
            <Navbar />
            <Routes>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/category" element={<CategoryAdd />} />
              <Route path="/brands" element={<BrandsAdd />} />
              <Route path="/tax" element={<TaxAdd />} />
              <Route path="/item" element={<ItemsAdd />} />
              <Route path="/customer" element={<CustomerAdd />} />
              <Route path="/sale" element={<Sales />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/purchase_report" element={<PurchaseReport />} />
              <Route path="/sale_report" element={<SalesReport />} />
              <Route path="/stock_report" element={<StockReport />} />
              <Route path="/users" element={<UserAdd />} />
              <Route path="/user_types" element={<UserTypeAdd />} />
              <Route path="/master_settings" element={<MasterSetting />} />
              <Route path="/sale_settings" element={<SaleSetting />} />
              <Route path="/purchase_setting" element={<PurchaseSetting />} />
            </Routes>
          </>
          :
          <>
            <Login />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </>
      }
    </>
  );
}

export default App;
