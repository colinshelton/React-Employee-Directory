import React from "react";
import API from "../utils/API";


function Table( {employees} ) {
    console.log("employees", employees);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {employees[0]!== undefined && employees[0].name!== undefined ?  (employees.map(employee)) : 
           (
            <tr>
              <th scope="row">1</th>
              <td>{employee.name.first}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          )
        })
      </tbody>
    </table>
  );
}

export default Table;
