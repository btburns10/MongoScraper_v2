import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API.js";

class SearchResultContainer extends Component {
  state = {
    search: '',
    results: []
  };

  componentDidMount() {
    this.searchNYTimes('football');
  }

  searchNYTimes = query => {
    console.log(query);
    API.search(query)
      .then(res => this.setState({ results: res.data.response.docs }))
      .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value.join("+")
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchNYTimes(this.state.search);
  }

  render() {
    return(
      <div>
        <SearchForm 
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ResultList 
          results={this.state.results}
        />
      </div>
    )
  };

};

export default SearchResultContainer;