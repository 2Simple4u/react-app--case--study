import React from "react";
import Batch from "../screens/Batch.js";
import Dashboard from "./Dashboard";
import "./style/Mainscreen.css";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";

function MainScreen() {
  return (    
    <div className="main_screen">
      <div className="parent-panel">
        <div className="left-panel">
          <Dashboard />
        </div>
        <div className="right-panel">
          <Routes>
          <Route path="/batch" element={  <Batch/>}></Route>
          </Routes>
        </div>  
      </div>
    </div>
  );
}

export default MainScreen;
