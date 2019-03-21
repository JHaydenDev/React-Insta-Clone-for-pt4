import React, { Component } from "react";
import styled from "styled-components";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

//styling
const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  justify-content: space-around;
`;

//App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [dummyData]
    };
  }
  componentDidMount() {
    this.setState({ post: dummyData })
  }

  render() {
    return (
      <AppContainer>
        <SearchBar />
        <PostContainer posts={this.state.post} />
      </AppContainer>
    );
  }
}

export default App;
