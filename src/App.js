import React, { Component } from 'react';
import styled from "styled-components";
import dummyData from "./dummy-data"
import SearchBar from "./components/SearchBar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
      </div>
    );
  }
}

export default App;
