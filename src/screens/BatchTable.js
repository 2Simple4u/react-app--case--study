import React,{useState} from "react";
import "./BatchTable.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import base_url from "../api/Api";
import CustomPopup from "../component/CustomPopup/Popup";
import UpdateBatch from "../update/batch/UpdateBatch";

function BatchTable({batch,update}) {
  console.log(batch);
  // popup 
   const [visibility, setVisibility] = useState(false);
   const popupCloseHandler = (e) => {
     setVisibility(e);
   };

const [updateId,setUpdateId]=useState("");

  const deleteBatch=(batchId)=>{
    axios.delete(`${base_url}/delete/${batchId}`).then(
      (response) => {
        console.log(response);
        console.log("sucess");
         update(batchId);
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }
  return (
    <div className="parent_batchTable">
      <div className="batches_data">
        <h2>Jfs</h2>
        <p>Session : {batch.session}</p>

        <table className="batches_data_table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Batch</th>
              <th>Dates</th>
              <th>Time</th>
              <th>Trainer</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
                batch.map((item,i)=>{
                 return [<tr key={i}>
                   <td>  <EditIcon onClick={(e) => {
                     setUpdateId(i);
                     setVisibility(!visibility)
                     }}/> 
                   <DeleteIcon onClick={()=>{
                     deleteBatch(item.batchId);
                   }}/> </td>
                    <td>{item.batchName}</td>
                    <td>{item.startDate}</td>
                    <td>{item.startTime}</td>
                    <td>{item.trainer}</td>
                    <td>{item.description}</td>
                 </tr>]
                })
            }
          </tbody>
        </table>
      </div>
      <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
         <UpdateBatch updateData={batch[updateId]}/>
        </CustomPopup>
    </div>
  );
}

export default BatchTable;
