import React from "react";
import MainScreen from "./component/MainScreen";
import Navbar from "./component/Navbar.js";
import "./App.css";
import Login from "./Login/Login.js";
import Home from "./screens/Home.js";
import {BrowserRouter as Router , Routes , Route, Link} from 'react-router-dom';
import Batch from "./screens/Batch";
import AddBatches from "./screens/AddBatches"
import TimeSheet from "./screens/TimeSheet";
import Dashboard from "./component/Dashboard";
import { ToastContainer } from "react-toastify";

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
          <Route path="/" element={ <Home/>}/>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/mainscreen" element={<MainScreen />}>
          </Route>
            <Route path="/batch" element={<Batch />} />
            <Route path="/addbatch" element={<AddBatches />} />
          <Route path="/timeSheet" element={<TimeSheet/>}/>
        </Routes>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
