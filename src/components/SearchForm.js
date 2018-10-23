import React from "react";

const SearchForm = props => (
  <form>
    <div>
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search Articles"
        id="search"
      />
      <button
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;