import React from 'react'

function ReportTable() {
    return (
        <div className="parent_timesheetTable">
        <table className="timesheet_data_table">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Report</th>
            </tr>
          </thead>
          {/* <tbody>
            {
            empData.length>0?
            empData.map((item, i) => {
              return [
                <tr key={i}>
                  <td>{item.empId}</td>
                  <td>{item.empName}</td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                </tr>
              ] 
            }) : "Date not Found"
          }
          </tbody> */}
        </table>
      </div>
    )
}

export default ReportTable
