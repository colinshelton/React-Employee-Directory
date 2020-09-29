import React from "react";

function Table() {
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
        {employees.map((employee) => {
          return (
            <tr>
              <th scope="row">1</th>
              <td>{employee.name.first}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
