import React, { Component } from "react";
import API from "../utils/API";

class Table extends Component {
  state = {
    employees: [],
    // only do one API call that does not update
    //use this for employee table
    filteredEmployees: [],
    userInput: "",
    ascending: true,
  };

  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({
      employees: response.data.results,
      filteredEmployees: response.data.results,
    });
    console.log(response.data.results);
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
      filteredEmployees: [...this.state.employees].filter((employee) => {
        const regex = new RegExp(e.target.value, "gi");
        return employee.name.last.match(regex);
      }),
    });
  };

  handleSort = (e) => {
    const current = this.state.ascending;
    let sorted = [];
    if (current) {
      sorted = this.state.filteredEmployees.sort(function (a, b) {
        return a.name.last
          .toLowerCase()
          .localeCompare(b.name.last.toLowerCase());
      });
    } else {
      sorted = this.state.filteredEmployees.sort(function (a, b) {
        return b.name.last
          .toLowerCase()
          .localeCompare(a.name.last.toLowerCase());
      });
    }
    this.setState({
      filteredEmployees: sorted,
      ascending: !current,
    });
  };

  // SORT by name need click handler for collum header, instead of filter call .sort and provide state value that is asending or descending
  // sorted array will be off of second array
  //.
  // each will
  // function handler
  // this.target.value
  // sort function

  render() {
    console.log("employees", this.state.employees);
    console.log(this.state.filteredEmployees);

    return (
      <div className="container">
        <input
          value={this.state.userInput}
          placeholder="Enter name to search for...."
          onChange={(e) => this.handleInput(e)}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={this.handleSort}>
                Click to SORT {this.state.ascending ? "^" : "⌄"}
              </th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees[0] !== undefined &&
            this.state.filteredEmployees[0].name !== undefined ? (
              this.state.filteredEmployees.map((employee, index) => {
                return (
                  <tr key={employee.login.uuid}>
                    <td>{index + 1}</td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
