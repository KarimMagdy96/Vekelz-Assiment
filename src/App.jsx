import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  document.querySelectorAll("*").forEach((elem) => {
    if (elem.offsetWidth > document.documentElement.offsetWidth) {
      console.log("Problem child: ", elem);
    }
  });
  return (
    <>
      <div className="row g-0">
        <Sidebar />
        <div className="col-10 ">
          <Header />
          <Routes>
            <Route path="booking" element={<Booking />} />
            <Route path="" element={<Booking />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
