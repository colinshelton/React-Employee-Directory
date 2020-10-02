import React, { Component } from "react";
import API from "../utils/API";

class Table extends Component {
  state = {
    employees: [],
    // only do one API call that does not update
    //use this for employee table
    filteredEmployees: [],
    userInput: ""
  };

  async componentDidMount() {
    const response = await API.getUsers();
    this.setState({
      employees: response.data.results,
      filteredEmployees: response.data.results,
    });
    console.log(response.data.results);
  }

  handleInput = e => {
    
    this.setState({ 
      userInput: e.target.value,
      filteredEmployees: [...this.state.employees].filter(employee=>{
        const regex = new RegExp(e.target.value, 'gi')
        return employee.name.last.match(regex)
      }
        ) 
    })
  }

  // handleSearch = (e) => {
  //   const value = props.target.value;
  //   const employee = this.state.employees.filter((employee) => {
  //     return employee.name.first.includes(value) === -1;
  //     // concat first, last
  //     // what we need to do to make this filter work
  //     //employees.name.first to compare values
  //     //create string concat last name and first name, var for .inclue, pass in event.target.filter
  //     // .include returns true/false which will be filter
  //   });
  //   this.setState({ filteredEmployees: employee });
  // };
  //function to set state for filtered employees to compare values to search term
  //set state
  //event handler

  // SORT by name need click handler for collum header, instead of filter call .sort and provide state value that is asending or descending

  // sorted array will be off of second array

  //.

  // each will

  // function handler
  // this.target.value

  // sort function

  render() {
    console.log("employees", this.state.employees);
    
    return (
      <div className='container'>
      <input 
        value={this.state.userInput}
        placeholder="Enter name to search for...."
        onChange={e=>this.handleInput(e)}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {this.state.filteredEmployees[0] !== undefined &&
          this.state.filteredEmployees[0].name !== undefined ? (
            this.state.filteredEmployees.map((employee) => {
              return (
                <tr>
                  <td>{employee.id.name}</td>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
          )
        </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
