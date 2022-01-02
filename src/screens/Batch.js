import React, {useEffect, useState}from "react";
import { useNavigate } from "react-router-dom";
import "./Batch.css"
import BatchTable from "./BatchTable.js";
import Dashboard from "../component/Dashboard";
import {BrowserRouter as Router , Routes , Route, Link} from 'react-router-dom';
import AddBatches from "./AddBatches.js";
import CustomPopup from "../component/CustomPopup/Popup.js";
import axios from "axios";
import base_url from "../api/Api";
import { toast, ToastContainer } from "react-toastify";
import { positions } from "@mui/system";

function Batch ()
{
  
  const getAllBatchFromServer = () => {
    axios.get(`${base_url}/getAllBatch`,{
    }).then(
      (response) => {
        console.log(response);
        toast.success("Batch has been loaded" ,{ position:"botom-center"})
        setBatchTable(response.data)
      },
      (error) => {
        console.log(error);
        toast.error("Server Error")
      }
    );
};

useEffect(() => {
  getAllBatchFromServer()
});
  
  const [batchTable, setBatchTable] = useState([]);
  const updateBatch = (batchId) => {
    setBatchTable(batchTable.filter((bId) => bId.batchId != batchId));
  }

  // popup 
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="same-component">
      <Dashboard /> 
      {/* <ToastContainer/> */}
      <div className="main_Batch">
      <div className="batch_topbar">
        <h2>Batches</h2>
        <button type="submit" onClick={(e) => setVisibility(!visibility)}> + Add </button>
      </div>
      {
        batchTable.length > 0
        ? <BatchTable batch={batchTable} update={updateBatch}/>: 
        <div className="no-data">
          <h1 className="no-data-h1">Oop's data not exits</h1>
        </div>
        }
      </div>
      <div className="Popup-panel" >
      <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
         <AddBatches />
        </CustomPopup>
      </div>
      </div>
  );
}

export default Batch;
