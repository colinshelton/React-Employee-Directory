import React from "react";
const Sort = (props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          highest to lowest
        </a>
        <a className="dropdown-item" href="#">
          lowest to highest
        </a>
      </div>
    </div>

    // <form onSubmit={props.handleSubmit}>
    //   <input type="text" placeholder="Employee Name" required />
    //   <button>Search</button>
    // </form>
  );
};

export default Sort;
