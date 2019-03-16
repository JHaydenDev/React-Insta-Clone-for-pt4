import React, { Component } from "react";
import styled from "styled-components";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";
import PostContainer from "./components/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [dummyData]
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.post} user={this.props.user} />
      </div>
    );
  }
}

export default App;
