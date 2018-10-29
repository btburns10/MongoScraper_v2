import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Articles from "./Articles";
import API from "../utils/API.js";

class SearchResultContainer extends Component {
  state = {
    search: '',
    articles: []
  };

  componentDidMount() {
    this.searchNYTimes('football');
  }

  searchNYTimes = query => {
    console.log(query);
    API.search(query)
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
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
        <Articles 
          articles={this.state.articles}
        />
      </div>
    )
  };

};

export default SearchResultContainer;