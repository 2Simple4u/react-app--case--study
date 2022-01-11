import axios from "axios";
import React, { useState } from "react";

function AddEmployee() {
  //storing the employee data in state
  const [employee, setEmployee] = useState({});
  // sending the data using function
  const handleForm = (e) => {
    console.log(employee);
    e.preventDefault();
    postEmployeeData(employee);

  }


  // posting the employee data
  const postEmployeeData = (data) => {
    axios.post(`http://localhost:8086/addEmployee`,data).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  return (
    <div className="parent_addBatches">
      <div className="addBatches_data">
        <div className="col-flex-1">
          <div className="curriculam child-col-flex-1">
            <label htmlFor="empId">
              Employee Id <span className="star">*</span>
            </label>
            <input
              type="text"
              name="empId"
              id="empId"
                // value={batch.empName}
                onChange={(e) => {
                  setEmployee({ ...employee, empId: e.target.value });
                }}
            />
          </div>
          <div className="empEmail child-col-flex-1">
            <label htmlFor="empEmail">
              Email <span className="star">*</span>
            </label>
            <input
              type="text"
              name="empEmail"
              id="empEmail"
              onChange={(e) => {
                setEmployee({...employee, empEmail:e.target.value});
              }}
            />
          </div>
        </div>
        <div className="col-flex-1">
          <div className="empEmail child-col-flex-1">
            <label htmlFor="empName">
              Employee Name <span className="star">*</span>
            </label>
            <input
              type="text"
              name="empName"
              id="empName"
                // value={batch.empName}
                onChange={(e) => {
                  setEmployee({ ...employee, empName: e.target.value });
                }}
            />
          </div>

          <div className="Name child-col-flex-1">
            <label htmlFor="empPhone">
              Phone No. <span className="star">*</span>
            </label>
            <input
              type="text"
              name="empPhone"
              id="name"
                onChange={(e) => {
                  setEmployee({ ...employee, empPhone: e.target.value });
                }}
            />
          </div>
        </div>
        <div className="col-flex-1">
          <div className="Time child-col-flex-1">
            <label htmlFor="empDoj">
              D.O.J <span className="star">*</span>
            </label>

            <input
              type="date"
              name="empDoj"
              id="Time"
              onChange={(e) => {
                setEmployee({ ...employee, empDoj: e.target.value });
              }}
            />
          </div>
          <div className="empDob child-col-flex-1">
            <label htmlFor="empDob">
              D.O.B <span className="star">*</span>
            </label>
            <input
              type="date"
              name="empDob"
              id="empDob"
                onChange={(e) => {
                  setEmployee({ ...employee, empDob: e.target.value });
                }}
            />
          </div>
        </div>
        <div className="buttons">
            <button className="create_button" type="submit" onClick={handleForm}>
              Create
            </button>
            {/* <button type="reset" className="cancel_button">
            Clear
          </button> */}
          </div>
      </div>
    </div>
  );
}

export default AddEmployee;
