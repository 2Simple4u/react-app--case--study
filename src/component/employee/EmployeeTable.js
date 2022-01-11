import React from "react";
import ReactTooltip from "react-tooltip";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function EmployeeTable({employee,updateEmp}) {
    console.log(employee
        );
    const deleteEmployee=(eId)=>{
        axios.delete(`http://localhost:8086/deleteEmployee/${eId}`).then(
          (response) => {
            console.log(response);
            console.log("sucess");
             updateEmp(eId);
          },
          (error)=>{
            console.log(error);
          }
        ) 
      }
  return (
    <div className="parent_batchTable">
      <div className="batches_data">
        <h2>Capgemini</h2>
        <p>Session : 2021 - 2022</p>
        <table className="batches_data_table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>D.O.B</th>
              <th>D.O.J</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item, i) => {
              return [
                <tr key={i}>
                  <td>
                    {/* <AddTaskIcon
                      data-tip="Add Learner"
                      data-for="toolTip1"
                      data-place="bottom"
                      padding={10}
                      onClick={(e) => {
                        setVisibility_2(!visibility_2);
                      }}
                    /> */}
                    {/* <EditIcon onClick={(e) => {
                     setUpdateId(i);
                     setVisibility(!visibility)
                     }}/>  */}
                    <DeleteIcon
                      data-tip="Delete"
                      data-for="toolTip2"
                      data-place="bottom"
                      onClick={()=>{
                        deleteEmployee(item.eId);
                      }}
                    />
                    <ReactTooltip id="toolTip2" />
                  </td>

                  <td>{item.empId}</td>
                  <td>
                    {item.empName}
                  </td>
                  <td>
                    {item.empEmail}
                  </td>
                  <td>{item.empPhone}</td>
                  <td>{item.empDob}</td>
                  <td>{item.empDoj}</td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
      </div>
      {/* <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Information of Batches"
        >
         <UpdateBatch updateData={batch[updateId]}/>
        </CustomPopup> */}
      {/* <div className="Popup-panel">
        <CustomPopup
          onClose={popupCloseHandler_2}
          show={visibility_2}
          title="Assign learner"
        >
          <AssignLearner />
        </CustomPopup>
      </div> */}
    </div>
  );
}

export default EmployeeTable;
