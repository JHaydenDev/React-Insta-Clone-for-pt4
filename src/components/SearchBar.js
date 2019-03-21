import React, { Component } from "react";
import styled from "styled-components";


//styling
const Search = styled.input`
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  border: 1px solid black;
  width: 90%;
`;
//Search Handler

class SearchBar extends React.Component {
  state = { search: "" };

  submitSearch = event => {
    console.log("on submit");
    event.preventDefault();
    this.props.searchHandler(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <Search
          className="search"
          type="text"
          value={this.state.search}
          placeholder="Search"
          onChange={e => this.setState({ search: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;
