import React, { useState, useEffect } from "react";
import Sort from "./components/Sort";
import Table from "./components/Table";
import API from "./utils/API";

const testData = [
  {
    id: 1,
    name: "Colin Shelton",
    role: "Customer Success Manager",
  },
  {
    id: 2,
    name: "Frank Sinatra",
    role: "Creative Director",
  },
  {
    id: 3,
    name: "Elon Musk",
    role: "CEO",
  },
];

const EmployeeList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

const Card = (props) => {
  // set this.state.employees to employees json array
  const profile = this.props;
  return (
    <div className="employee-profile">
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
      </div>
    </div>
  );
};

function App() {
  const [employeeState, setEmployeeState] = useState({
    //profiles: testData,
    //searchTerm: "",
    results: [],
  });

  useEffect(() => {
    API.sort((res) => setEmployeeState({ results: res }));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // latest added from medium article !!!
    console.log("hi from onChange", event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });

    // const nameSearch = testData.filter(
    //   (profile) => profile.name === searchTerm
    // );
  };

  // handleInputChange =
  console.log({ employeeState });
  return (
    <div>
      <h1 className="header">Employee Directory App</h1>
      <Sort handleSubmit={handleSubmit} />
      <Table />
      {/* <CardList profiles={testData} /> */}
    </div>
  );
}

export default App;
