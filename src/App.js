import React from "react";
import MainScreen from "./component/MainScreen";
import Navbar from "./component/Navbar.js";
import "./App.css";
import Login from "./Login/Login.js";
import Home from "./screens/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Batch from "./screens/Batch";
import AddBatches from "./screens/AddBatches";
import Timesheet from "./component/timesheet/Timesheet.js";
import Report from "./component/report/Report";
import Employee from "./component/employee/Employee";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="main-controller">
      <Router>
        <div className="left-panel">
          <Navbar />
          {/* <Dashboard /> */}
        </div>
        <div className="right-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/mainscreen" element={<MainScreen />} />
            <Route path="/employee" element={<Employee/>} />
            <Route path="/batch" element={<Batch />} />
            <Route path="/addbatch" element={<AddBatches />} />
            <Route path="/timesheet" element={<Timesheet/>} />
            <Route path="/report" element={<Report/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
