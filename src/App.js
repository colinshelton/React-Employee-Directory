import React, { useState, useEffect } from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter"
//import Table from "./components/Table";
import API from "./utils/API";

// const EmployeeList = (props) => (
//   <div>
//     {props.profiles.map((profile) => (
//       <Card {...profile} />
//     ))}
//   </div>
// );

// const Card = (props) => {
//   // set this.state.employees to employees json array
//   const profile = this.props;
//   return (
//     <div className="employee-profile">
//       <div className="info">
//         <div className="name">{profile.name}</div>
//         <div className="role">{profile.role}</div>
//       </div>
//     </div>
//   );
// };

function App() {
  const [employeeState, setEmployeeState] = useState([{}]);

  useEffect(() => {
    API.getUsers().then((res) => {
      console.log("res.data.results", res.data.results);
      setEmployeeState(res.data.results);
    });
  }, []);

  console.log(employeeState);
  return (
    <div>
      <h1 className="header">Employee Directory App</h1>
      <Sort  />
      <Filter />
      {/* <Table employees={employeeState}/> */}
    </div>
  );
}

export default App;
