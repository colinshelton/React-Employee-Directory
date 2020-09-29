import React from "react";
const Sort = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Employee Name" required />
      <button>Search</button>
    </form>
  );
};

export default Sort;
