import React from 'react'
import Dashboard from '../Dashboard';
import ReportTable from './ReportTable';

function Report() {
    // const [empdata, setEmpData] = useState({});
  
    // const getAllEmployee = () => {
    //   axios.get(`http://localhost:8086/getAllEmployee`, {}).then(
    //     (response) => {
    //       setEmpData(response.data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // };
  
    // useEffect(() => {
    //   getAllEmployee();
    // }, []);
    return (
      <div className="parent_timesheet">
        <Dashboard />
        <div className="main_timesheet">
          <div className="timesheet_topbar">
            <h2>Batch</h2>
            <h3></h3>
          </div>
          {/* {empdata.length > 0 ? (
            <TimesheetTable empData={empdata} />
          ) : (
            <div className="no-data">
              <h1 className="no-data-h1">Oop's data not exits</h1>
            </div>
          )} */}
          <ReportTable/>
        </div>
      </div>
    );
  }

export default Report
