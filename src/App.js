import React, { Component } from 'react';
import styled from "styled-components";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";
import PostContainer from "./components/PostContainer";



class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [dummyData]
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer/>
      </div>
    );
  };l
 
}
console.log(dummyData)
export default App;
