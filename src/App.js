import React from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter"
import Table from "./components/Table";

function App() {
  return (
    <div>
      <h1 className="header">Employee Directory App</h1>
      <Sort />
      <Filter />
      <Table />
    </div>
  );
}

export default App;
