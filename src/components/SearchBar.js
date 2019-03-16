import React, { Component } from 'react';
import styled from "styled-components";

//styling
const Search = styled.input`
`;
// component

class SearchBar extends Component {
    render() {
      return (
        <Search type="text" className="input" placeholder="Search..."/>
      );
    }
  }
  
  export default SearchBar;
  