import React, { Component } from 'react';
import styled from "styled-components";

//styling
const Search = styled.input`
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  border: 1px solid black;
  width: 90%;

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
  